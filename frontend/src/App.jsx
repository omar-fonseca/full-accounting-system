import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/theme.css';
import MainLayout from './components/layouts/MainLayout';
import { useTheme } from './hooks/useTheme';

// Carga diferida de las páginas para reducir el tamaño inicial del bundle.
const HomePage = lazy(() => import('./features/home/HomePage'));
const LoginRegisterPage = lazy(() => import('./features/auth/LoginRegisterPage'));
const AdminDashboardPage = lazy(() => import('./features/dashboard/AdminDashboardPage'));

function App() {
  const [theme, setTheme] = useTheme();

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="loading">Cargando...</div>}>
        <Routes>
          <Route path="/" element={<MainLayout theme={theme} setTheme={setTheme}><HomePage /></MainLayout>} />
          <Route path="/loginregister" element={<LoginRegisterPage />} />
          <Route path="/admindashboard" element={<AdminDashboardPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
