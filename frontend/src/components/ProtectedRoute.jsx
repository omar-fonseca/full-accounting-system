import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { user, loading, token } = useAuth();

  if (loading) {
    return <div className="loading">Verificando sesión...</div>;
  }

  const hasValidSession = Boolean(token);

  if (!hasValidSession) {
    return <Navigate to="/loginregister?mode=login" replace />;
  }

  if (allowedRoles.length > 0 && user?.role && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;