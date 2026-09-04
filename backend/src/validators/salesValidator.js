const { body, validationResult } = require('express-validator');
const { PAYMENT_METHODS, SALE_ITEM_TYPES, SALE_STATUSES } = require('../models/venta');

const validateSale = [
  body('soldAt').optional().isISO8601().withMessage('La fecha de venta debe ser válida'),
  body('items').isArray({ min: 1 }).withMessage('La venta debe contener al menos un ítem'),
  body('items.*.itemType').isIn(Object.values(SALE_ITEM_TYPES)).withMessage('El tipo de ítem no es válido'),
  body('items.*.product').optional({ values: 'falsy' }).isMongoId().withMessage('El producto debe ser un ID válido'),
  body('items.*.fuelType').optional({ values: 'falsy' }).isString().trim().withMessage('El tipo de combustible debe ser texto'),
  body('items.*.quantity').isFloat({ gt: 0 }).withMessage('La cantidad debe ser mayor que cero'),
  body('items.*.unitPrice').isFloat({ min: 0 }).withMessage('El precio unitario no puede ser negativo'),
  body('items.*.volume').optional({ values: 'falsy' }).isFloat({ min: 0 }).withMessage('El volumen no puede ser negativo'),
  body('items.*.pump').optional({ values: 'falsy' }).isMongoId().withMessage('El surtidor debe ser un ID válido'),
  body('items.*.nozzle').optional({ values: 'falsy' }).isString().trim().withMessage('La boquilla debe ser texto'),
  body('items.*.total').isFloat({ min: 0 }).withMessage('El total del ítem no puede ser negativo'),
  body('payment').isObject().withMessage('El pago es obligatorio'),
  body('payment.method').isIn(Object.values(PAYMENT_METHODS)).withMessage('El método de pago no es válido'),
  body('payment.reference').optional({ values: 'falsy' }).isString().trim().isLength({ max: 120 }).withMessage('La referencia de pago no es válida'),
  body('subtotal').isFloat({ min: 0 }).withMessage('El subtotal no puede ser negativo'),
  body('taxes').optional().isFloat({ min: 0 }).withMessage('Los impuestos no pueden ser negativos'),
  body('total').isFloat({ min: 0 }).withMessage('El total no puede ser negativo'),
  body('status').optional().isIn(Object.values(SALE_STATUSES)).withMessage('El estado de venta no es válido')
];

const handleSaleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Datos de venta inválidos',
      errors: errors.array().map((error) => ({ field: error.path, message: error.msg }))
    });
  }
  next();
};

module.exports = {
  validateSale,
  handleSaleValidationErrors
};