const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('nombre').optional({ values: 'falsy' }).trim().notEmpty().withMessage('El nombre es obligatorio'),
  body('email').optional({ values: 'falsy' }).isEmail().withMessage('Email inválido').normalizeEmail(),
  body('password').optional({ values: 'falsy' }).isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
];

const validateLogin = [
  body('email').optional({ values: 'falsy' }).isEmail().withMessage('Email inválido').normalizeEmail(),
  body('password').optional({ values: 'falsy' }).notEmpty().withMessage('La contraseña es obligatoria')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Datos inválidos',
      errors: errors.array().map(err => ({ field: err.path, message: err.msg }))
    });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  handleValidationErrors
};