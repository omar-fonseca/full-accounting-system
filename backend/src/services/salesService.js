const { Venta } = require('../models/venta');
const { AppError } = require('../middlewares/errorMiddleware');

const roundMoney = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

const normalizeSalePayload = (payload) => {
  const items = payload.items.map((item) => ({
    ...item,
    total: roundMoney(Number(item.quantity) * Number(item.unitPrice))
  }));
  const subtotal = roundMoney(items.reduce((sum, item) => sum + item.total, 0));
  const taxes = roundMoney(Number(payload.taxes || 0));

  return {
    ...payload,
    items,
    subtotal,
    taxes,
    total: roundMoney(subtotal + taxes),
    status: payload.status || 'COMPLETED'
  };
};

const createSale = async (payload) => {
  const saleData = normalizeSalePayload(payload);
  const sale = await Venta.create(saleData);
  return sale;
};

const listSales = async (filters = {}) => {
  const query = {};

  if (filters.payment) query['payment.method'] = filters.payment;
  if (filters.employee) query.employee = filters.employee;
  if (filters.shift) query.shift = filters.shift;
  if (filters.date) {
    const start = new Date(filters.date);
    if (Number.isNaN(start.getTime())) throw new AppError('La fecha de filtro no es válida', 400);
    const end = new Date(start);
    end.setUTCDate(end.getUTCDate() + 1);
    query.soldAt = { $gte: start, $lt: end };
  }

  return Venta.find(query).sort({ soldAt: -1 });
};

const getSaleById = async (saleId) => {
  const sale = await Venta.findById(saleId);
  if (!sale) throw new AppError('Venta no encontrada', 404);
  return sale;
};

module.exports = {
  createSale,
  listSales,
  getSaleById,
  normalizeSalePayload
};