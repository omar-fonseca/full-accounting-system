const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const usuarioController = require("../controllers/usuarioController");

// Rutas de autenticación
router.post("/register", authController.registrarUsuario);
router.post("/login", authController.iniciarSesion);

// Rutas de operaciones CRUD de usuarios
router.get("/usuario/:id", usuarioController.obtenerUsuario);
router.put("/usuario/:id", usuarioController.actualizarUsuario);
router.delete("/usuario/:id", usuarioController.eliminarUsuario);

module.exports = router;
