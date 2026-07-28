import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import Card from '../../../components/ui/Card';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-section" id="hero">
      <div className="home-inicial home-container">
        <motion.div className="hero-grid" initial="hidden" animate="visible" variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } }
        }}>
          <motion.div className="hero-copy" variants={{ hidden: { opacity: 0, x: -18 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
            <Badge>Plataforma de gestión para estaciones de servicio</Badge>
            <h1 className="hero-title">Control total de operaciones, ventas y combustible.</h1>
            <p>Una experiencia diseñada para estaciones inteligentes que necesitan visibilidad, seguridad y decisiones rápidas en tiempo real.</p>
            <div className="hero-actions">
              <Button variant="primary" onClick={() => navigate('/loginregister?mode=register')}>Comenzar ahora</Button>
              <Button variant="secondary" onClick={() => navigate('/loginregister?mode=login')}>Iniciar sesión</Button>
            </div>
            <div className="hero-stats">
              <Card>
                <h4>Transacciones diarias</h4>
                <p>1.2K+</p>
              </Card>
              <Card>
                <h4>Usuarios activos</h4>
                <p>320+</p>
              </Card>
              <Card>
                <h4>Optimización de inventario</h4>
                <p>+24%</p>
              </Card>
            </div>
          </motion.div>

          <motion.div className="hero-visual" variants={{ hidden: { opacity: 0, x: 18 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
            <div className="dashboard-preview" aria-label="Vista previa del dashboard">
              <div className="dashboard-header">
                <div>
                  <p className="dashboard-title">Panel de control</p>
                  <h4 style={{ margin: 0, color: 'var(--text)' }}>Estación Central</h4>
                </div>
                <div className="dashboard-meta">
                  <Badge>En vivo</Badge>
                </div>
              </div>
              <motion.div className="dashboard-chart" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} />
              <motion.div className="dashboard-grid" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.12 }}>
                <motion.div className="dashboard-tile" whileHover={{ y: -6 }}>
                  <h4>Inventario</h4>
                  <p>72%</p>
                </motion.div>
                <motion.div className="dashboard-tile" whileHover={{ y: -6 }}>
                  <h4>Ventas</h4>
                  <p>$14.8K</p>
                </motion.div>
                <motion.div className="dashboard-tile" whileHover={{ y: -6 }}>
                  <h4>Combustible</h4>
                  <p>42kL</p>
                </motion.div>
                <motion.div className="dashboard-tile" whileHover={{ y: -6 }}>
                  <h4>Alertas</h4>
                  <p>3 nuevas</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
