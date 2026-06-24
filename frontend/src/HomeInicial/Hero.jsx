import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero">
      <div className="home-inicial">
        <img src="/image-hero.png" alt="" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
        <div className="home-container Hero" style={{ padding: '20px 0' }}>
          <h1>Bienvenido a <br />Accounting.SC</h1>
          <p>Tu socio confiable al alcance de tus manos</p>
          <button className="btn-hero" onClick={() => navigate('/loginregister?mode=register')}>Regístrate Hoy</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

