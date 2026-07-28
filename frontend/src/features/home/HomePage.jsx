// Header lo maneja el MainLayout. No importarlo aquí para evitar duplicados.
import Hero from './components/Hero';
import AdminSection from './components/AdminSection';
import CrearCuenta from './components/CrearCuenta';
import Info from './components/Info';
import Testimonials from './components/Testimonials';

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <AdminSection />
      <CrearCuenta />
      <Info />
      <Testimonials />
    </div>
  );
}

export default HomePage;
