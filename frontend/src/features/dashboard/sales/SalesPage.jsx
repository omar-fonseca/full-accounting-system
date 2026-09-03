import { useMemo, useState } from 'react';
import { DashboardIcon } from '../components/DashboardIcons';
import { useSales } from '../hooks/useSales';
import SalesFilters from './components/SalesFilters';
import SaleDetail from './components/SaleDetail';
import SalesTable from './components/SalesTable';
import { formatCurrency, getErrorMessage } from './salesFormatters';
import './sales.css';

const initialFilters = { date: '', employee: '', shift: '', paymentMethod: '' };

const SalesPage = () => {
  const { sales, sale, listLoading, detailLoading, error, fetchSales, fetchSale, refreshSales, retry } = useSales();
  const [filters, setFilters] = useState(initialFilters);
  const [selectedSaleId, setSelectedSaleId] = useState(null);
  const metrics = useMemo(() => { const revenue = sales.reduce((sum, item) => sum + (Number(item.total) || 0), 0); return { revenue, count: sales.length, average: sales.length ? revenue / sales.length : 0 }; }, [sales]);
  const handleChange = (event) => setFilters((current) => ({ ...current, [event.target.name]: event.target.value }));
  const handleApply = () => fetchSales(filters).catch(() => {});
  const handleClear = () => { setFilters(initialFilters); fetchSales(initialFilters).catch(() => {}); };
  const handleSelect = (id) => { setSelectedSaleId(id); fetchSale(id).catch(() => {}); };
  const handleRefresh = () => refreshSales().catch(() => {});

  return <section className="sales-page"><header className="sales-page-header"><div><span className="dashboard-eyebrow">Operación / Ventas</span><h1>Ventas</h1><p>Consulta y seguimiento de las transacciones de la estación.</p></div><div className="sales-page-actions"><button type="button" className="sales-quiet-button" onClick={handleRefresh} disabled={listLoading}><DashboardIcon name="RefreshCw" size={15} /> Actualizar</button><button type="button" className="sales-primary-button" disabled title="La creación requiere productos, combustible y turnos conectados"><DashboardIcon name="Plus" size={15} /> Nueva venta</button></div></header><SalesFilters filters={filters} onChange={handleChange} onApply={handleApply} onClear={handleClear} loading={listLoading} /><div className="sales-metrics"><article><span>Ingresos consultados</span><strong>{formatCurrency(metrics.revenue)}</strong><small>Según resultados actuales</small></article><article><span>Transacciones</span><strong>{metrics.count}</strong><small>{listLoading ? 'Cargando...' : 'Ventas encontradas'}</small></article><article><span>Ticket promedio</span><strong>{formatCurrency(metrics.average)}</strong><small>Calculado sobre la lista</small></article></div><section className="sales-table-panel"><div className="sales-section-heading"><div><span className="dashboard-eyebrow">Registro operacional</span><h2>Últimas ventas</h2></div><span className="sales-data-source">API de Sales</span></div>{listLoading ? <div className="sales-state"><span className="sales-spinner" /><strong>Cargando ventas</strong><span>Consultando transacciones...</span></div> : error ? <div className="sales-state sales-state-error"><DashboardIcon name="TriangleAlert" size={24} /><strong>{getErrorMessage(error)}</strong><button type="button" className="sales-primary-button" onClick={() => retry().catch(() => {})}><DashboardIcon name="RefreshCw" size={15} /> Reintentar</button></div> : sales.length === 0 ? <div className="sales-state"><DashboardIcon name="ReceiptText" size={25} /><strong>No hay ventas registradas</strong><span>No existen resultados para los filtros seleccionados.</span></div> : <SalesTable sales={sales} onSelect={handleSelect} />}</section>{selectedSaleId && <SaleDetail sale={sale} loading={detailLoading} onClose={() => setSelectedSaleId(null)} />}</section>;
};

export default SalesPage;