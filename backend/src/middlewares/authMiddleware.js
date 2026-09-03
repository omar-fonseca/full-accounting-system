/**
 * Middleware de autenticación
 * Verifica que el usuario esté autenticado mediante token JWT
 */

const { verifyToken } = require('../../config/jwt');
const { Usuario } = require('../models/usuario');

/**
 * Middleware que verifica el token JWT del usuario
 * @param {object} req - Request de Express
 * @param {object} res - Response de Express
 * @param {function} next - Función next de Express
 */
const authenticate = async (req, res, next) => {
  try {
    let token;

    // Verificar token en headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No se proporcionó token de autenticación'
      });
    }

    // Verificar token
    const decoded = verifyToken(token);

    // Buscar usuario en base de datos
    const user = await Usuario.findById(decoded.userId).select('-password -refreshToken');
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido - usuario no encontrado'
      });
    }

    // Verificar estado del usuario
    if (user.estado === 'DELETED') {
      return res.status(401).json({
        success: false,
        message: 'Cuenta eliminada'
      });
    }

    if (user.estado === 'SUSPENDED') {
      return res.status(403).json({
        success: false,
        message: 'Cuenta suspendida'
      });
    }

    // Agregar usuario a request
    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Token inválido'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expirado'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error en el servidor'
    });
  }
};

/**
 * Middleware para autorización basada en roles
 * @param {...string} roles - Roles permitidos
 * @returns {function} Middleware de autorización
 */
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'No autenticado'
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'No tienes permisos para acceder a este recurso'
      });
    }

    next();
  };
};

module.exports = {
  authenticate,
  authorize
};