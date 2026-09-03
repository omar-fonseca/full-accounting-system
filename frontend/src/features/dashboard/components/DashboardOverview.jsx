import PropTypes from 'prop-types';
import { Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { DashboardIcon } from './DashboardIcons';
import KpiCard from './KpiCard';

const PanelHeader = ({ eyebrow, title, action }) => <div className="dashboard-panel-header"><div><span className="dashboard-eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action && <button type="button" className="dashboard-text-button">{action}<DashboardIcon name="ChevronRight" size={15} /></button>}</div>;

PanelHeader.propTypes = { eyebrow: PropTypes.string.isRequired, title: PropTypes.string.isRequired, action: PropTypes.string };

const dashboardSummaryPropType = PropTypes.shape({
  kpis: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired })).isRequired,
  sales: PropTypes.shape({ period: PropTypes.string.isRequired, unit: PropTypes.string.isRequired, timeline: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
  fuel: PropTypes.shape({ volume: PropTypes.number.isRequired, unit: PropTypes.string.isRequired, mix: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
  inventory: PropTypes.shape({ levels: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
  shifts: PropTypes.shape({ today: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
  alerts: PropTypes.shape({ items: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
  activity: PropTypes.shape({ items: PropTypes.arrayOf(PropTypes.object).isRequired }).isRequired,
});

const DashboardOverview = ({ summary, loading, error, onRetry }) => {
  if (loading) return <section className="dashboard-state"><DashboardIcon name="RefreshCw" size={24} /><h2>Cargando resumen operativo</h2><p>Preparando los indicadores de la estación.</p></section>;
  if (error || !summary) return <section className="dashboard-state dashboard-state-error"><DashboardIcon name="TriangleAlert" size={24} /><h2>No fue posible cargar el resumen</h2><p>El centro operativo no pudo obtener sus datos.</p><button type="button" className="dashboard-refresh-button" onClick={onRetry}><DashboardIcon name="RefreshCw" size={16} /> Reintentar</button></section>;

  const { kpis, sales, fuel, inventory, shifts, alerts, activity } = summary;

  return <div className="dashboard-overview">
  <section className="dashboard-page-intro"><div><span className="dashboard-eyebrow">Miércoles, 03 septiembre 2026</span><h1>Visión de la estación</h1><p>Una lectura rápida de la operación para decidir dónde actuar primero.</p></div><button type="button" className="dashboard-refresh-button" onClick={onRetry}><DashboardIcon name="RefreshCw" size={16} /> Actualizar vista</button></section>
  <div className="dashboard-kpi-grid">{kpis.map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}</div>
  <div className="dashboard-primary-grid">
    <section className="dashboard-panel dashboard-sales-panel"><PanelHeader eyebrow="Rendimiento operativo" title="Evolución de ventas" action="Ver detalle" /><div className="dashboard-chart-legend"><span><i className="legend-dot sales" /> Ventas estimadas</span><span className="dashboard-chart-period">{sales.period} · {sales.unit}</span></div><div className="dashboard-chart dashboard-chart-large"><ResponsiveContainer width="100%" height="100%"><AreaChart data={sales.timeline} margin={{ top: 10, right: 8, left: -24, bottom: 0 }}><defs><linearGradient id="salesFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#55d6be" stopOpacity={0.28} /><stop offset="100%" stopColor="#55d6be" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#263548" strokeDasharray="3 3" vertical={false} /><XAxis dataKey="time" stroke="#71839a" tickLine={false} axisLine={false} fontSize={11} /><YAxis stroke="#71839a" tickLine={false} axisLine={false} fontSize={11} tickFormatter={(value) => `${value}k`} /><Tooltip contentStyle={{ background: '#101c2b', border: '1px solid #2a3a4f', borderRadius: 8, color: '#e8f1fa' }} formatter={(value) => [`$ ${value}k`, 'Ventas']} /><Area type="monotone" dataKey="amount" stroke="#55d6be" strokeWidth={2.5} fill="url(#salesFill)" /></AreaChart></ResponsiveContainer></div></section>
    <section className="dashboard-panel dashboard-fuel-panel"><PanelHeader eyebrow="Mezcla de producto" title="Combustible vendido" action="Explorar" /><div className="dashboard-chart dashboard-chart-donut"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={fuel.mix} dataKey="value" nameKey="name" innerRadius={64} outerRadius={88} paddingAngle={3} stroke="none">{fuel.mix.map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Pie><Tooltip contentStyle={{ background: '#101c2b', border: '1px solid #2a3a4f', borderRadius: 8, color: '#e8f1fa' }} formatter={(value) => [`${value}%`, 'Participación']} /></PieChart></ResponsiveContainer><div className="dashboard-donut-center"><strong>{fuel.volume.toLocaleString('es-CO')}</strong><span>{fuel.unit}</span></div></div><div className="dashboard-legend-list">{fuel.mix.map((fuelItem) => <div key={fuelItem.name}><span><i className="legend-dot" style={{ background: fuelItem.color }} />{fuelItem.name}</span><strong>{fuelItem.value}%</strong></div>)}</div></section>
  </div>
  <div className="dashboard-secondary-grid"><section className="dashboard-panel"><PanelHeader eyebrow="Existencias" title="Inventario general" action="Ver inventario" /><div className="dashboard-inventory-list">{inventory.levels.map((item) => <div className="dashboard-inventory-row" key={item.name}><div><span>{item.name}</span><small>{item.status}</small></div><div className="dashboard-progress"><span style={{ width: `${item.value}%` }} /></div><strong>{item.value}%</strong></div>)}</div></section><section className="dashboard-panel"><PanelHeader eyebrow="Cobertura operativa" title="Turnos de hoy" action="Ver turnos" /><div className="dashboard-shift-list">{shifts.today.map((shift) => <div className="dashboard-shift-row" key={shift.name}><span className={`dashboard-shift-status dashboard-tone-${shift.tone}`}><DashboardIcon name={shift.tone === 'positive' ? 'CheckCircle2' : 'Clock3'} size={15} /></span><div><strong>{shift.name}</strong><small>{shift.time} · {shift.employee}</small></div><span className={`dashboard-status-label dashboard-tone-${shift.tone}`}>{shift.status}</span></div>)}</div></section></div>
  <div className="dashboard-tertiary-grid"><section className="dashboard-panel dashboard-alert-panel"><PanelHeader eyebrow="Centro de atención" title="Alertas prioritarias" action="Ver todas" /><div className="dashboard-alert-list">{alerts.items.map((alert) => <div className={`dashboard-alert dashboard-alert-${alert.tone}`} key={alert.title}><span className="dashboard-alert-icon"><DashboardIcon name={alert.icon} size={16} /></span><div><strong>{alert.title}</strong><p>{alert.description}</p></div></div>)}</div></section><section className="dashboard-panel"><PanelHeader eyebrow="Trazabilidad" title="Actividad reciente" /><div className="dashboard-activity-list">{activity.items.map((activityItem) => <div className="dashboard-activity-row" key={`${activityItem.time}-${activityItem.label}`}><span className="dashboard-activity-time">{activityItem.time}</span><span className="dashboard-activity-icon"><DashboardIcon name={activityItem.icon} size={15} /></span><div><strong>{activityItem.label}</strong><small>{activityItem.detail}</small></div></div>)}</div></section></div>
  <p className="dashboard-data-disclaimer"><DashboardIcon name="Info" size={14} /> Vista Foundation: los indicadores visibles son datos mock aislados y no representan operaciones reales.</p>
</div>;
};

DashboardOverview.propTypes = { summary: dashboardSummaryPropType.isRequired, loading: PropTypes.bool.isRequired, error: PropTypes.object, onRetry: PropTypes.func.isRequired };

export default DashboardOverview;