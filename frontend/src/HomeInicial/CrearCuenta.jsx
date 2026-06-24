
const CrearCuenta = () => {
  return (
    <div className="home-inicial">
      <section id="crear-cuenta">
        <div className="container-crear crear">
          <h2>Crear Cuenta</h2>
          <p>¡Accede a tu mundo!</p>
          <button className="google">Continuar con Google</button>
          <p className="or">o</p>
          <input type="email" placeholder="Tu Correo Electrónico" />
          <input type="password" placeholder="Tu Contraseña" />
          <button className="registro">Registrar con Email</button>
          <p className="terms">Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.</p>
        </div>
      </section>
    </div>
  );
};

export default CrearCuenta;


