import { FaGoogle } from 'react-icons/fa';

const CrearCuenta = () => {
  return (
    <div className="home-inicial">
      <section id="crear-cuenta">
        <div className="create-section home-container">
          <div className="container-crear">
            <h2>Inicia tu configuración en minutos</h2>
            <p>Regístrate y accede a la plataforma diseñada para gestionar estaciones con máxima seguridad.</p>
            <button className="google" type="button">
              <FaGoogle aria-hidden="true" />
              Continuar con Google
            </button>
            <div className="or">o</div>
            <input className="create-input" type="email" placeholder="Correo electrónico" aria-label="Correo electrónico" />
            <input className="create-input" type="password" placeholder="Contraseña" aria-label="Contraseña" />
            <button className="button create-button registro" type="button">Registrar con Email</button>
            <p className="terms">Al continuar, aceptas nuestros <a href="#">Términos de Servicio</a> y <a href="#">Política de Privacidad</a>.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrearCuenta;
