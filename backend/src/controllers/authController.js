/**
 * Controlador de autenticación
 * Maneja las peticiones HTTP relacionadas con autenticación
 */

const authService = require('../services/authService');
const { sendSuccess } = require('../utils/response');

exports.register = async (req, res, next) => {
  try {
    const result = await authService.register(req.body);

    return sendSuccess(res, 201, 'Usuario registrado exitosamente', result);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return sendSuccess(res, 200, 'Inicio de sesión exitoso', {
      user: result.user,
      accessToken: result.accessToken
    });
  } catch (error) {
    next(error);
  }
};

exports.logout = async (req, res, next) => {
  try {
    await authService.logout(req.user._id);
    res.clearCookie('refreshToken');

    return sendSuccess(res, 200, 'Sesión cerrada exitosamente');
  } catch (error) {
    next(error);
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const refreshTokenFromCookie = req.cookies?.refreshToken;
    const refreshTokenFromBody = req.body?.refreshToken;
    const refreshTokenFromQuery = req.query?.refreshToken;
    const refreshTokenFromHeader = req.get('x-refresh-token');
    const refreshToken = refreshTokenFromBody || refreshTokenFromCookie || refreshTokenFromQuery || refreshTokenFromHeader;
    const result = await authService.refreshToken(refreshToken);

    return sendSuccess(res, 200, 'Token renovado correctamente', result);
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await authService.getMe(req.user._id);

    return sendSuccess(res, 200, 'Usuario cargado correctamente', { user });
  } catch (error) {
    next(error);
  }
};
