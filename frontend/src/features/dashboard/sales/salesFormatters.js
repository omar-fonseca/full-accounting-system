export const formatCurrency = (value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(Number(value) || 0);

export const formatDateTime = (value) => {
  if (!value) return 'Sin fecha';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Fecha inválida';
  return new Intl.DateTimeFormat('es-CO', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
};

export const getSaleType = (items = []) => {
  const types = new Set(items.map((item) => item.itemType));
  if (types.size > 1) return 'Mixta';
  return types.has('FUEL') ? 'Combustible' : 'Producto';
};

export const getPaymentLabel = (method) => ({ CASH: 'Efectivo', CARD: 'Tarjeta', TRANSFER: 'Transferencia', OTHER: 'Otro' }[method] || 'Sin especificar');
export const getStatusLabel = (status) => ({ PENDING: 'Pendiente', COMPLETED: 'Completada', CANCELLED: 'Cancelada' }[status] || 'Desconocido');

export const getErrorMessage = (error) => {
  const status = error?.response?.status;
  if (status === 400) return 'La solicitud de ventas no es válida.';
  if (status === 401) return 'Tu sesión ya no es válida. Inicia sesión nuevamente.';
  if (status === 403) return 'No tienes permisos para consultar ventas.';
  if (status === 404) return 'La venta solicitada no existe.';
  if (status >= 500) return 'El servicio de ventas no está disponible.';
  if (!error?.response) return 'No fue posible conectar con el servicio de ventas.';
  return 'No fue posible cargar las ventas.';
};