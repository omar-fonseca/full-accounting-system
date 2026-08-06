/**
 * Configuración de JWT
 * Maneja la generación y verificación de tokens de acceso y refresh
 */

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1h';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET no está definido en las variables de entorno');
}

/**
 * Genera un token de acceso
 * @param {string} userId - ID del usuario
 * @param {string} role - Rol del usuario
 * @returns {string} Token JWT
 */
const generateAccessToken = (userId, role) => {
  return jwt.sign(
    { userId, role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

/**
 * Genera un token de refresh
 * @param {string} userId - ID del usuario
 * @returns {string} Token JWT de refresh
 */
const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    JWT_SECRET,
    { expiresIn: JWT_REFRESH_EXPIRES_IN }
  );
};

/**
 * Verifica un token JWT
 * @param {string} token - Token a verificar
 * @returns {object} Payload decodificado
 */
const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
  JWT_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN
};
