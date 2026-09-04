import { useCallback, useEffect, useState } from 'react';
import dashboardService from '../services/dashboardService';

export const useDashboard = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setSummary(await dashboardService.getDashboardSummary());
    } catch (loadError) {
      setError(loadError);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadDashboard(); }, [loadDashboard]);

  return { summary, loading, error, retry: loadDashboard };
};