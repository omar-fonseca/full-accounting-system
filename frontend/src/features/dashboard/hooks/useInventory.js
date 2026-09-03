import { useCallback, useEffect, useState } from 'react';
import inventoryService from '../services/inventoryService';

export const useInventory = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadInventory = useCallback(async () => {
    setLoading(true);
    setError(null);
    try { setSummary(await inventoryService.getInventorySummary()); } catch (loadError) { setError(loadError); } finally { setLoading(false); }
  }, []);
  useEffect(() => { loadInventory(); }, [loadInventory]);
  return { summary, loading, error, retry: loadInventory };
};