import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AuthUserMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/loginregister?mode=login');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span>{user?.nombre || 'Usuario'}</span>
      <button onClick={handleLogout} style={{ padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default AuthUserMenu;