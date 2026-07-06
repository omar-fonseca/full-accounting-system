const bcrypt = require("bcrypt");
const Usuario = require("../models/usuario.js");

// Controlador para obtener datos de un usuario
exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json("Usuario no encontrado.");
    }
    return res.json(usuario);
  } catch (error) {
    console.error("Error al obtener el usuario:", error.message);
    return res.status(500).json("Error en el servidor.");
  }
};

// Controlador para actualizar un usuario
exports.actualizarUsuario = async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  try {
    let usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json("Usuario no encontrado.");
    }

    if (nombre) usuario.nombre = nombre;
    if (email) usuario.email = email;
    if (contraseña) {
      const hashedPassword = await bcrypt.hash(contraseña, 10);
      usuario.contraseña = hashedPassword;
    }

    await usuario.save();
    return res.json("Usuario actualizado exitosamente.");
  } catch (error) {
    console.error("Error al actualizar el usuario:", error.message);
    return res.status(500).json("Error en el servidor.");
  }
};

// Controlador para eliminar un usuario
exports.eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuario) {
      return res.status(404).json("Usuario no encontrado.");
    }
    return res.json("Usuario eliminado exitosamente.");
  } catch (error) {
    console.error("Error al eliminar el usuario:", error.message);
    return res.status(500).json("Error en el servidor.");
  }
};
