export const dashboardNavItems = [
  { id: 'overview', label: 'Resumen', group: 'Principal', icon: 'LayoutDashboard' },
  { id: 'sales', label: 'Ventas', group: 'Operación', icon: 'ReceiptText' },
  { id: 'shifts', label: 'Turnos', group: 'Operación', icon: 'Clock3' },
  { id: 'closures', label: 'Cierres', group: 'Operación', icon: 'CircleDollarSign' },
  { id: 'inventory', label: 'Inventario general', group: 'Inventario', icon: 'Boxes' },
  { id: 'fuel', label: 'Combustibles', group: 'Inventario', icon: 'Fuel' },
  { id: 'products', label: 'Productos', group: 'Inventario', icon: 'Package' },
  { id: 'employees', label: 'Empleados', group: 'Personal', icon: 'UsersRound' },
  { id: 'reports', label: 'Reportes', group: 'Información', icon: 'ChartNoAxesCombined' },
  { id: 'monitoring', label: 'Monitoreo', group: 'Estación', icon: 'RadioTower' },
];

export const dashboardKpis = [
  { label: 'Ventas de hoy', value: '$ 2.450.000', unit: 'COP', detail: 'vs. ayer', trend: '+12,4%', status: 'En seguimiento', updatedAt: 'Corte 14:32', tone: 'positive', icon: 'TrendingUp' },
  { label: 'Combustible vendido', value: '8.420', unit: 'L', detail: 'últimas 24 horas', trend: '+8,1%', status: 'Operativo', updatedAt: 'Corte 14:32', tone: 'positive', icon: 'Fuel' },
  { label: 'Inventario crítico', value: '07', unit: 'productos', detail: 'requieren atención', trend: 'Revisar', status: 'Atención requerida', updatedAt: 'Corte 14:10', tone: 'warning', icon: 'PackageSearch' },
  { label: 'Turnos activos', value: '03', unit: 'de 04', detail: 'programados para hoy', trend: 'En curso', status: 'Cobertura parcial', updatedAt: 'Corte 14:00', tone: 'neutral', icon: 'Clock3' },
];

export const salesData = [
  { time: '06:00', amount: 280 }, { time: '08:00', amount: 420 }, { time: '10:00', amount: 360 },
  { time: '12:00', amount: 620 }, { time: '14:00', amount: 540 }, { time: '16:00', amount: 710 },
  { time: '18:00', amount: 680 }, { time: '20:00', amount: 490 },
];

export const fuelMix = [
  { name: 'Gasolina corriente', value: 48, color: '#55d6be' },
  { name: 'Gasolina extra', value: 31, color: '#f2b35d' },
  { name: 'Diésel', value: 21, color: '#70a7ff' },
];

export const inventoryLevels = [
  { name: 'Lubricantes', value: 78, status: 'Estable' },
  { name: 'Aditivos', value: 56, status: 'Estable' },
  { name: 'Accesorios', value: 32, status: 'Vigilar' },
  { name: 'Repuestos', value: 18, status: 'Crítico' },
];

export const shifts = [
  { name: 'Turno mañana', employee: 'Pendiente de datos', status: 'En curso', time: '06:00 - 14:00', tone: 'positive' },
  { name: 'Turno tarde', employee: 'Pendiente de datos', status: 'Programado', time: '14:00 - 22:00', tone: 'neutral' },
  { name: 'Turno noche', employee: 'Pendiente de datos', status: 'Programado', time: '22:00 - 06:00', tone: 'neutral' },
];

export const alerts = [
  { title: 'Datos operativos no conectados', description: 'Este resumen usa datos de demostración hasta disponer de API de negocio.', tone: 'info', icon: 'Info' },
  { title: 'Inventario por debajo del mínimo', description: 'Repuestos requiere revisión antes del próximo abastecimiento.', tone: 'warning', icon: 'TriangleAlert' },
];

export const recentActivity = [
  { time: '14:32', label: 'Resumen preparado', detail: 'Vista de control operacional', icon: 'Activity' },
  { time: '14:10', label: 'Inventario revisado', detail: 'Datos de demostración', icon: 'ClipboardCheck' },
  { time: '13:54', label: 'Turno programado', detail: 'Sin conexión a API', icon: 'CalendarClock' },
];

export const dashboardSummary = {
  kpis: dashboardKpis,
  sales: { timeline: salesData, period: 'Hoy', unit: 'COP' },
  fuel: { volume: 8420, unit: 'litros', mix: fuelMix },
  inventory: { levels: inventoryLevels },
  shifts: { today: shifts },
  alerts: { items: alerts },
  activity: { items: recentActivity },
};