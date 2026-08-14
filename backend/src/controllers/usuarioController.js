const bcrypt = require('bcrypt');
const { Usuario } = require('../models/usuario');
const { AppError } = require('../middlewares/errorMiddleware');
const { sendSuccess } = require('../utils/response');

const getUserByIdOrThrow = async (userId) => {
  const user = await Usuario.findById(userId);
  if (!user) {
    throw new AppError('Usuario no encontrado', 404);
  }
  return user;
};

exports.obtenerUsuario = async (req, res, next) => {
  try {
    const user = await getUserByIdOrThrow(req.params.id);
    return sendSuccess(res, 200, 'Usuario cargado correctamente', { user });
  } catch (error) {
    next(error);
  }
};

exports.actualizarUsuario = async (req, res, next) => {
  try {
    const { nombre, email, password } = req.body;
    const user = await getUserByIdOrThrow(req.params.id);

    if (nombre) user.nombre = nombre;
    if (email) user.email = email.toLowerCase().trim();
    if (password) {
      user.password = password;
    }

    await user.save();
    return sendSuccess(res, 200, 'Usuario actualizado exitosamente', { user });
  } catch (error) {
    next(error);
  }
};

exports.eliminarUsuario = async (req, res, next) => {
  try {
    const user = await Usuario.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new AppError('Usuario no encontrado', 404);
    }

    return sendSuccess(res, 200, 'Usuario eliminado exitosamente');
  } catch (error) {
    next(error);
  }
};
