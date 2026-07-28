import { BarChart3, Package, ShieldCheck, Headset, Cloud, Zap } from 'lucide-react';

function AdminSection() {
  return (
    <section id="admistrar">
      <div className="home-inicial home-container">
        <h2>Administra mejor tu estación de servicio</h2>
        <p>Controla inventarios, ventas y seguridad desde un único panel diseñado para operaciones empresariales.</p>
        <div className="feature-grid">
          <div className="feature-card feature-card-icon">
            <BarChart3 className="feature-icon" />
            <h4>Informes en tiempo real</h4>
            <p>Visualiza métricas clave al instante y toma decisiones basadas en datos.</p>
          </div>
          <div className="feature-card feature-card-icon">
            <Package className="feature-icon" />
            <h4>Inventario optimizado</h4>
            <p>Reduce pérdidas con alertas predictivas y reabastecimientos automáticos.</p>
          </div>
          <div className="feature-card feature-card-icon">
            <ShieldCheck className="feature-icon" />
            <h4>Seguridad empresarial</h4>
            <p>Restringe accesos y protege tus zonas críticas con permisos avanzados.</p>
          </div>
          <div className="feature-card feature-card-icon">
            <Headset className="feature-icon" />
            <h4>Soporte proactivo</h4>
            <p>Recibe recomendaciones y soporte cuando lo necesitas.</p>
          </div>
          <div className="feature-card feature-card-icon">
            <Cloud className="feature-icon" />
            <h4>Actualizaciones continuas</h4>
            <p>Tu sistema mejora constantemente sin interrumpir tu operación.</p>
          </div>
          <div className="feature-card feature-card-icon">
            <Zap className="feature-icon" />
            <h4>Integración ágil</h4>
            <p>Conecta con hardware y servicios existentes en minutos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminSection;
