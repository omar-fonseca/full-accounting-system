import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThemeToggle from '../../../components/ui/ThemeToggle';

const Header = ({ theme, setTheme }) => {
  const navigate = useNavigate();

  return (
    <header className="header-inicial" role="banner">
      <div className="home-inicial">
        <div className="home-container container-header">
          <p className="logo">KORE Station</p>
          <nav aria-label="Main navigation">
            <Link to="/">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/contactos">Contactos</Link>
          </nav>
          <div className="nav-actions">
            <button
              className="button button-secondary"
              onClick={() => navigate('/loginregister?mode=login')}
            >
              Iniciar sesión
            </button>

            <button
              className="button button-primary"
              onClick={() => navigate('/loginregister?mode=register')}
            >
              Crear cuenta
            </button>

            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
