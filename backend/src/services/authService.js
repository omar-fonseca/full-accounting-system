/**
 * Servicio de autenticación
 * Contiene la lógica de negocio para registro, login y gestión de tokens
 */

const { Usuario, ROLES, ESTADOS } = require('../models/usuario');
const { generateAccessToken, generateRefreshToken, verifyToken } = require('../../config/jwt');
const { AppError } = require('../middlewares/errorMiddleware');

/**
 * Registra un nuevo usuario
 * @param {object} userData - Datos del usuario
 * @returns {object} Usuario registrado y tokens
 */
const register = async (userData) => {
  const { nombre, email, password, role } = userData;

  if (!nombre || !email || !password) {
    throw new AppError('Nombre, email y contraseña son requeridos', 400);
  }

  if (typeof password !== 'string' || password.length < 8) {
    throw new AppError('La contraseña debe tener al menos 8 caracteres', 400);
  }

  const normalizedEmail = email.toLowerCase().trim();
  const existingUser = await Usuario.findOne({ email: normalizedEmail });
  if (existingUser) {
    throw new AppError('El email ya está registrado', 400);
  }

  const user = await Usuario.create({
    nombre: nombre.trim(),
    email: normalizedEmail,
    password,
    role: role || ROLES.CLIENTE,
    estado: ESTADOS.PENDING
  });

  const accessToken = generateAccessToken(user._id, user.role);
  const refreshToken = generateRefreshToken(user._id);

  user.refreshToken = refreshToken;
  await user.save({ validateBeforeSave: false });

  return {
    user: user.toJSON(),
    accessToken,
    refreshToken
  };
};

/**
 * Inicia sesión con credenciales
 * @param {string} email - Email del usuario
 * @param {string} password - Contraseña del usuario
 * @returns {object} Usuario autenticado y tokens
 */
const login = async (email, password) => {
  if (!email || !password) {
    throw new AppError('Email y contraseña son requeridos', 400);
  }

  const normalizedEmail = email.toLowerCase().trim();
  const user = await Usuario.findOne({ email: normalizedEmail }).select('+password');

  if (!user) {
    throw new AppError('Credenciales inválidas', 401);
  }

  if (user.estado === ESTADOS.SUSPENDED) {
    throw new AppError('Tu cuenta está suspendida. Contacta al administrador.', 403);
  }

  if (user.estado === ESTADOS.DELETED) {
    throw new AppError('Tu cuenta ha sido eliminada.', 403);
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new AppError('Credenciales inválidas', 401);
  }

  const accessToken = generateAccessToken(user._id, user.role);
  const refreshToken = generateRefreshToken(user._id);

  user.refreshToken = refreshToken;
  user.lastLoginAt = new Date();
  if (process.env.NODE_ENV !== 'production') {
    user.isEmailVerified = true;
  }
  await user.save({ validateBeforeSave: false });

  return {
    user: user.toJSON(),
    accessToken,
    refreshToken
  };
};

/**
 * Cierra la sesión del usuario
 * @param {string} userId - ID del usuario
 */
const logout = async (userId) => {
  await Usuario.findByIdAndUpdate(userId, {
    refreshToken: null
  });
};

/**
 * Refresca el token de acceso
 * @param {string} refreshToken - Token de refresh
 * @returns {object} Nuevo token de acceso
 */
const refreshToken = async (refreshToken) => {
  if (!refreshToken) {
    throw new AppError('No se proporcionó refresh token', 401);
  }

  const decoded = verifyToken(refreshToken);
  const user = await Usuario.findById(decoded.userId).select('+refreshToken');

  if (!user) {
    throw new AppError('Usuario no encontrado', 401);
  }

  if (!user.refreshToken || user.refreshToken !== refreshToken) {
    throw new AppError('Refresh token inválido', 401);
  }

  const newAccessToken = generateAccessToken(user._id, user.role);
  const newRefreshToken = generateRefreshToken(user._id);

  user.refreshToken = newRefreshToken;
  await user.save({ validateBeforeSave: false });

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken
  };
};

/**
 * Obtiene el usuario actual
 * @param {string} userId - ID del usuario
 * @returns {object} Usuario
 */
const getMe = async (userId) => {
  const user = await Usuario.findById(userId).select('-password -refreshToken');
  
  if (!user) {
    throw new AppError('Usuario no encontrado', 404);
  }

  return user.toJSON();
};

module.exports = {
  register,
  login,
  logout,
  refreshToken,
  getMe
};