import api from '../../../services/apiClient';
import { salesData } from '../data/dashboardMockData';

const useMockData = import.meta.env.VITE_SALES_DATA_SOURCE === 'mock';

const normalizeFilters = (filters = {}) => {
	const params = {};
	['date', 'employee', 'shift'].forEach((key) => {
		if (filters[key]) params[key] = filters[key];
	});
	if (filters.paymentMethod) params.payment = filters.paymentMethod;
	if (filters.payment) params.payment = filters.payment;
	return params;
};

const getResponseData = (response) => response.data?.data || {};

const createSale = async (salePayload) => {
	if (useMockData) return { ...salePayload, id: `mock-${Date.now()}` };
	const response = await api.post('/sales', salePayload);
	return getResponseData(response).sale;
};

const getSales = async (filters = {}) => {
	if (useMockData) return [];
	const response = await api.get('/sales', { params: normalizeFilters(filters) });
	return getResponseData(response).sales || [];
};

const getSaleById = async (saleId) => {
	if (useMockData) return null;
	const response = await api.get(`/sales/${saleId}`);
	return getResponseData(response).sale;
};

const getSalesSummary = async () => ({ timeline: salesData, period: 'Hoy', unit: 'COP' });

export default { createSale, getSales, getSaleById, getSalesSummary };