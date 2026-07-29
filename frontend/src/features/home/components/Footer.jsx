import { FaInstagram, FaFacebookF } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer home-inicial">
      <div className="footer-container">
        <div className="footer-column">
          <h3>KORE Station</h3>
          <ul>
            <li><a href="#">Acerca de Nosotros</a></li>
            <li><a href="#">Oportunidades</a></li>
            <li><a href="#">Sala de Prensa</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Funcionalidades</h3>
          <ul>
            <li><a href="#">Eficiencia</a></li>
            <li><a href="#">Operaciones</a></li>
            <li><a href="#">Sala de Prensa</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <ul>
            <li><a href="#">@KOREStation <FaInstagram className="social-icon instagram" /></a></li>
            <li><a href="#">@KOREStation <FaFacebookF className="social-icon facebook" /></a></li>
            <li><a href="#">Boletines</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Boletín Mensual</h3>
          <p>Consejos profesionales para la gestión de la contabilidad de estaciones.</p>
          <form action="#">
            <input type="email" placeholder="correo@KOREStation.com" />
            <button type="submit">→</button>
          </form>
          <p className="terms">
            <a href="#">Términos</a> | <a href="#">Privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
