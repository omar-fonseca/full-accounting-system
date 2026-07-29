import PropTypes from 'prop-types';
import Header from '../../features/home/components/Header';
import Footer from '../../features/home/components/Footer';
import '../../styles/pages/HomePage.css';

// Layout principal que envuelve las páginas públicas
// Recibe el estado del tema desde la raíz para mantenerlo compartido.
function MainLayout({ children, theme, setTheme }) {
  return (
    <div className="app-layout" data-theme={theme}>
      <Header theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default MainLayout;
