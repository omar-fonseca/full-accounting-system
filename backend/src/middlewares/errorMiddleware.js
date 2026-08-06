/**
 * Middleware de manejo centralizado de errores
 * Captura y formatea errores de manera consistente
 */

/**
 * Clase personalizada para errores de la aplicación
 */
class AppError extends Error {
  constructor(message, statusCode, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Middleware para manejar errores de desarrollo
 * Proporciona información detallada en desarrollo
 */
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err
  });
};

/**
 * Middleware para manejar errores en producción
 * Proporciona información limitada por seguridad
 */
const sendErrorProd = (err, res) => {
  // Errores operacionales conocidos
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      status: err.status,
      message: err.message
    });
  }

  // Errores desconocidos - no revelar detalles
  console.error('ERROR 💥', err);
  res.status(500).json({
    success: false,
    status: 'error',
    message: 'Algo salió mal. Por favor intenta nuevamente.'
  });
};

/**
 * Middleware principal de manejo de errores
 */
const errorHandler = (err, req, res, next) => {
  let error = err;

  // Log de errores
  console.error(err);

  if (err.type === 'entity.parse.failed') {
    const message = 'JSON inválido en la solicitud';
    error = new AppError(message, 400);
  }

  // Errores de Mongoose - ID inválido
  if (err.name === 'CastError') {
    const message = 'Recurso no encontrado';
    error = new AppError(message, 404);
  }

  // Errores de Mongoose - validación
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message).join(', ');
    error = new AppError(message, 400);
  }

  // Errores de Mongoose - duplicado
  if (err.code === 11000) {
    const message = 'Valor duplicado encontrado';
    error = new AppError(message, 400);
  }

  // Errores de JWT
  if (err.name === 'JsonWebTokenError') {
    const message = 'Token inválido';
    error = new AppError(message, 401);
  }

  if (err.name === 'TokenExpiredError') {
    const message = 'Tu sesión ha expirado. Por favor inicia sesión nuevamente.';
    error = new AppError(message, 401);
  }

  // Enviar respuesta
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(error, res);
  } else {
    sendErrorProd(error, res);
  }
};

module.exports = {
  AppError,
  errorHandler
};