import { useCallback, useEffect, useRef, useState } from 'react';
import salesService from '../services/salesService';

const DEFAULT_FILTERS = {
  date: '',
  employee: '',
  shift: '',
  paymentMethod: ''
};

export const useSales = ({ autoFetch = true, initialFilters = DEFAULT_FILTERS } = {}) => {
  const [sales, setSales] = useState([]);
  const [sale, setSale] = useState(null);
  const [filters, setFilters] = useState(() => ({ ...DEFAULT_FILTERS, ...initialFilters }));
  const [listLoading, setListLoading] = useState(autoFetch);
  const [detailLoading, setDetailLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [error, setError] = useState(null);

  const mountedRef = useRef(true);
  const filtersRef = useRef(filters);
  const operationRef = useRef({ type: 'list', filters });
  const listRequestRef = useRef(0);
  const detailRequestRef = useRef(0);

  useEffect(() => () => {
    mountedRef.current = false;
  }, []);

  const fetchSales = useCallback(async (nextFilters = filtersRef.current) => {
    const currentFilters = { ...DEFAULT_FILTERS, ...nextFilters };
    const requestId = listRequestRef.current + 1;
    listRequestRef.current = requestId;
    filtersRef.current = currentFilters;
    operationRef.current = { type: 'list', filters: currentFilters };
    setFilters(currentFilters);
    setListLoading(true);
    setError(null);

    try {
      const result = await salesService.getSales(currentFilters);
      if (!mountedRef.current || requestId !== listRequestRef.current) return result;
      setSales(result);
      return result;
    } catch (loadError) {
      if (mountedRef.current && requestId === listRequestRef.current) setError(loadError);
      throw loadError;
    } finally {
      if (mountedRef.current && requestId === listRequestRef.current) setListLoading(false);
    }
  }, []);

  const fetchSale = useCallback(async (saleId) => {
    const requestId = detailRequestRef.current + 1;
    detailRequestRef.current = requestId;
    operationRef.current = { type: 'detail', saleId };
    setDetailLoading(true);
    setError(null);

    try {
      const result = await salesService.getSaleById(saleId);
      if (!mountedRef.current || requestId !== detailRequestRef.current) return result;
      setSale(result);
      return result;
    } catch (loadError) {
      if (mountedRef.current && requestId === detailRequestRef.current) setError(loadError);
      throw loadError;
    } finally {
      if (mountedRef.current && requestId === detailRequestRef.current) setDetailLoading(false);
    }
  }, []);

  const createSale = useCallback(async (payload) => {
    operationRef.current = { type: 'create', payload };
    setCreateLoading(true);
    setError(null);

    try {
      const createdSale = await salesService.createSale(payload);
      if (mountedRef.current) setSale(createdSale);
      return createdSale;
    } catch (createError) {
      if (mountedRef.current) setError(createError);
      throw createError;
    } finally {
      if (mountedRef.current) setCreateLoading(false);
    }
  }, []);

  const refreshSales = useCallback(() => fetchSales(filtersRef.current), [fetchSales]);

  const retry = useCallback(() => {
    const operation = operationRef.current;
    if (operation.type === 'detail') return fetchSale(operation.saleId);
    if (operation.type === 'create') return createSale(operation.payload);
    return fetchSales(operation.filters);
  }, [createSale, fetchSale, fetchSales]);

  useEffect(() => {
    if (autoFetch) fetchSales(filtersRef.current).catch(() => {});
  }, [autoFetch, fetchSales]);

  return {
    sales,
    sale,
    loading: listLoading || detailLoading || createLoading,
    listLoading,
    detailLoading,
    createLoading,
    error,
    filters,
    fetchSales,
    fetchSale,
    createSale,
    refreshSales,
    retry
  };
};