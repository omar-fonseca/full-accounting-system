import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import '../../styles/pages/LoginRegister.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGoogle } from 'react-icons/fa';
import { FiMail, FiLock, FiUser, FiBriefcase } from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';

const ROLES = [
  { value: 'ADMIN', label: 'Administrador' },
  { value: 'PROPIETARIO', label: 'Propietario' },
  { value: 'OPERARIO', label: 'Operario' },
  { value: 'CONTADOR', label: 'Contador' },
  { value: 'CLIENTE', label: 'Cliente' }
];

const LoginRegisterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'register');
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    role: 'PROPIETARIO'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, register } = useAuth();

  useEffect(() => {
    setIsLogin(searchParams.get('mode') !== 'register');
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        const result = await login({
          email: formData.email,
          password: formData.password
        });

        if (result?.success) {
          const user = result?.data?.user || result?.user;
          const role = typeof user?.role === 'string' ? user.role.trim().toUpperCase() : '';

          if (['ADMIN', 'PROPIETARIO'].includes(role)) {
            navigate('/admindashboard');
          } else {
            navigate('/');
          }
        }
      } else {
        await register({
          nombre: formData.nombre,
          email: formData.email,
          password: formData.password,
          role: formData.role
        });

        setIsLogin(true);
        setSearchParams({ mode: 'login' });
      }
    } catch (err) {
      const backendMessage = err?.response?.data?.errors?.[0]?.message;
      const fallbackMessage = err?.response?.data?.message || err?.message || 'Ocurrió un error inesperado';
      setError(backendMessage || fallbackMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginregister">
      <div className={`loginregister-container ${isLogin ? '' : 'toggle'}`}>
        <div className="login-register loginregister-container-form">
          <form className={`loginregister-sign-in ${isLogin ? '' : 'hidden'}`} onSubmit={handleSubmit}>
            <div className="loginregister-brand-pill">KORE Station</div>
            <h2>Iniciar Sesión</h2>
            <p className="loginregister-subtitle">Accede a tu panel con seguridad y estilo.</p>
            <div className="loginregister-social-networks">
              <span className="social-icon twitter"><FaTwitter /></span>
              <span className="social-icon facebook"><FaFacebookF /></span>
              <span className="social-icon linkedin"><FaLinkedinIn /></span>
              <span className="social-icon google"><FaGoogle /></span>
            </div>
            <span>Use su correo y contraseña</span>
            {error && <p style={{ color: '#ff6b6b', fontSize: '0.9rem' }}>{error}</p>}
            <div className="loginregister-container-input">
              <FiMail className="input-icon" />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <FiLock className="input-icon" />
              <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="submit" className="loginregister-button" disabled={loading}>
              {loading ? 'Procesando...' : 'INICIAR SESIÓN'}
            </button>
          </form>
        </div>

        <div className="loginregister-container-form">
          <form className={`loginregister-sign-up ${isLogin ? 'hidden' : ''}`} onSubmit={handleSubmit}>
            <div className="loginregister-brand-pill">KORE Station</div>
            <h2>Registrarse</h2>
            <p className="loginregister-subtitle">Crea tu cuenta y transforma la gestión financiera.</p>
            <div className="loginregister-social-networks">
              <span className="social-icon twitter"><FaTwitter /></span>
              <span className="social-icon facebook"><FaFacebookF /></span>
              <span className="social-icon linkedin"><FaLinkedinIn /></span>
              <span className="social-icon google"><FaGoogle /></span>
            </div>
            <span>Use su correo electrónico para registrarse</span>
            {error && <p style={{ color: '#ff6b6b', fontSize: '0.9rem' }}>{error}</p>}
            <div className="loginregister-container-input">
              <FiUser className="input-icon" />
              <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <FiMail className="input-icon" />
              <input type="email" name="email" placeholder="Tu correo" value={formData.email} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input">
              <FiLock className="input-icon" />
              <input type="password" name="password" placeholder="Tu contraseña" value={formData.password} onChange={handleChange} />
            </div>
            <div className="loginregister-container-input loginregister-container-select">
              <FiBriefcase className="input-icon" />
              <select name="role" value={formData.role} onChange={handleChange}>
                {ROLES.map(r => (
                  <option key={r.value} value={r.value}>{r.label}</option>
                ))}
              </select>
            </div>
            <button type="submit" className="loginregister-button" disabled={loading}>
              {loading ? 'Procesando...' : 'REGISTRARSE'}
            </button>
          </form>
        </div>

        <div className="loginregister-container-welcome">
          <div className="loginregister-welcome-sign-up loginregister-welcome">
            <h3>¡Bienvenido!</h3>
            <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
            <button className="loginregister-button" id="loginregister-btn-sign-up" onClick={() => setSearchParams({ mode: 'register' })}>Registrarse</button>
          </div>

          <div className="loginregister-welcome-sign-in loginregister-welcome">
            <h3>¡Hola!</h3>
            <p>Regístrate con tus datos personales para usar todas las funciones del sitio</p>
            <button className="loginregister-button" id="loginregister-btn-sign-in" onClick={() => setSearchParams({ mode: 'login' })}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
