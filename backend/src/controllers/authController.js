const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/usuario.js");

// Función para generar un token JWT
const generarToken = (id) => {
  return jwt.sign({ id }, "process.env.JWT_SECRET", { expiresIn: "1h" });
};

// Controlador para registrar un usuario
exports.registrarUsuario = async (req, res) => {
  const { nombre, email, contraseña } = req.body;

  if (!nombre || !email || !contraseña) {
    return res.status(400).json("Por favor, completa todos los campos.");
  }

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json("El usuario ya está registrado.");
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      contraseña: hashedPassword
    });

    await nuevoUsuario.save();
    const token = generarToken(nuevoUsuario._id);
    return res.status(201).json({ message: "Usuario registrado exitosamente.", token });
  } catch (error) {
    console.error("Error al guardar el usuario:", error.message);
    return res.status(500).json("Error en el servidor.");
  }
};

// Controlador para iniciar sesión
exports.iniciarSesion = async (req, res) => {
  const { email, contraseña } = req.body;

  if (!email || !contraseña) {
    return res.status(400).json("Por favor, proporciona email y contraseña.");
  }

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json("Usuario no encontrado.");
    }

    const isMatch = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!isMatch) {
      return res.status(401).json("Contraseña incorrecta.");
    }

    const token = generarToken(usuario._id);
    return res.json({ message: "Inicio de sesión exitoso.", token });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error.message);
    return res.status(500).json("Error en el servidor.");
  }
};
