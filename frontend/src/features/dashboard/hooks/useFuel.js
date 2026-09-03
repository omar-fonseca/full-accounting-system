import { useCallback, useEffect, useState } from 'react';
import fuelService from '../services/fuelService';

export const useFuel = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loadFuel = useCallback(async () => {
    setLoading(true);
    setError(null);
    try { setSummary(await fuelService.getFuelSummary()); } catch (loadError) { setError(loadError); } finally { setLoading(false); }
  }, []);
  useEffect(() => { loadFuel(); }, [loadFuel]);
  return { summary, loading, error, retry: loadFuel };
};