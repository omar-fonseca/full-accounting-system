const salesService = require('../services/salesService');
const { sendSuccess } = require('../utils/response');

exports.createSale = async (req, res, next) => {
  try {
    const sale = await salesService.createSale(req.body);
    return sendSuccess(res, 201, 'Venta creada exitosamente', { sale });
  } catch (error) {
    next(error);
  }
};

exports.listSales = async (req, res, next) => {
  try {
    const sales = await salesService.listSales(req.query);
    return sendSuccess(res, 200, 'Ventas cargadas correctamente', { sales });
  } catch (error) {
    next(error);
  }
};

exports.getSale = async (req, res, next) => {
  try {
    const sale = await salesService.getSaleById(req.params.id);
    return sendSuccess(res, 200, 'Venta cargada correctamente', { sale });
  } catch (error) {
    next(error);
  }
};