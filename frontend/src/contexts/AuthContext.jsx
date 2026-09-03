import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import api from '../services/apiClient';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('accessToken'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await api.get('/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setUser(response.data?.data?.user || null);
      } catch (error) {
        localStorage.removeItem('accessToken');
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [token]);

  const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    const accessToken = response.data?.data?.accessToken;
    const userFromResponse = response.data?.data?.user;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      setToken(accessToken);
      setUser(userFromResponse || null);
      return response.data;
    }

    throw new Error('No se recibió token de acceso');
  };

  const register = async (data) => {
    const response = await api.post('/auth/register', data);
    return response.data;
  };

  const logout = async () => {
    try {
      if (token) {
        await api.post('/auth/logout', {}, {
          headers: { Authorization: `Bearer ${token}` }
        });
      }
    } finally {
      localStorage.removeItem('accessToken');
      setToken(null);
      setUser(null);
    }
  };

  const value = useMemo(() => ({
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: Boolean(token) || Boolean(user)
  }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
