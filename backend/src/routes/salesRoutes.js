const express = require('express');
const salesController = require('../controllers/salesController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { ROLES } = require('../models/usuario');
const { validateSale, handleSaleValidationErrors } = require('../validators/salesValidator');

const router = express.Router();
const salesRoles = [ROLES.ADMIN, ROLES.PROPIETARIO, ROLES.OPERARIO];

router.post('/', authenticate, authorize(...salesRoles), validateSale, handleSaleValidationErrors, salesController.createSale);
router.get('/', authenticate, authorize(...salesRoles), salesController.listSales);
router.get('/:id', authenticate, authorize(...salesRoles), salesController.getSale);

module.exports = router;