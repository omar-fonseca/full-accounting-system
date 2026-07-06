import '../../styles/pages/HomeInicial.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AdminSection from './components/AdminSection';
import CrearCuenta from './components/CrearCuenta';
import Info from './components/Info';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <AdminSection />
      <CrearCuenta />
      <Info />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;
