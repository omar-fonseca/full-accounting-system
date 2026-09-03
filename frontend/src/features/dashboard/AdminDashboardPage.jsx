import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import './components/dashboard.css';
import DashboardOverview from './components/DashboardOverview';
import DashboardPlaceholder from './components/DashboardPlaceholder';
import DashboardShell from './components/DashboardShell';
import { useDashboard } from './hooks/useDashboard';
import SalesPage from './sales/SalesPage';

const placeholderViews = {
  sales: ['Ventas', 'El dominio de ventas reunirá transacciones, métodos de pago y tendencias operativas.', 'ReceiptText'],
  shifts: ['Turnos', 'La operación de turnos permitirá consultar asignaciones, actividad y cobertura de la estación.', 'Clock3'],
  closures: ['Cierres', 'Los cierres conectarán ventas, efectivo esperado y conciliación cuando exista el dominio operativo.', 'CircleDollarSign'],
  inventory: ['Inventario general', 'El inventario de productos, mínimos y movimientos se incorporará desde su propio módulo.', 'Boxes'],
  fuel: ['Combustibles', 'El módulo de combustible se conectará a tipos, tanques, volumen, precios y movimientos reales.', 'Fuel'],
  products: ['Productos', 'El catálogo de productos será la base del inventario general y de las ventas de tienda.', 'Package'],
  employees: ['Empleados', 'La experiencia de colaboradores se vinculará posteriormente con turnos y actividad operacional.', 'UsersRound'],
  reports: ['Reportes', 'Los reportes analizarán datos reales de ventas, combustible, inventario, empleados y turnos.', 'ChartNoAxesCombined'],
  monitoring: ['Monitoreo de estación', 'La supervisión de tanques, surtidores y conectividad queda preparada para una futura integración.', 'RadioTower'],
};

const AdminDashboardPage = () => {
  const [activeView, setActiveView] = useState('overview');
  const { user } = useAuth();
  const { summary, loading, error, retry } = useDashboard();
  const content = activeView === 'overview'
    ? <DashboardOverview summary={summary} loading={loading} error={error} onRetry={retry} />
    : activeView === 'sales'
      ? <SalesPage />
    : <DashboardPlaceholder title={placeholderViews[activeView][0]} description={placeholderViews[activeView][1]} icon={placeholderViews[activeView][2]} />;

  return <DashboardShell activeView={activeView} onNavigate={setActiveView} user={user}>{content}</DashboardShell>;
};

export default AdminDashboardPage;
