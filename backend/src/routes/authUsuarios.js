const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const usuarioController = require("../controllers/usuarioController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");
const { ROLES } = require("../models/usuario");
const { validateRegister, validateLogin, handleValidationErrors } = require("../validators/authValidator");

// Rutas de autenticación
router.post("/register", validateRegister, handleValidationErrors, authController.register);
router.post("/login", validateLogin, handleValidationErrors, authController.login);
router.post("/logout", authenticate, authController.logout);
router.post("/refresh", authController.refreshToken);
router.get("/me", authenticate, authController.getMe);

// Rutas de operaciones CRUD de usuarios
router.get("/usuario/:id", authenticate, authorize(ROLES.ADMIN, ROLES.PROPIETARIO), usuarioController.obtenerUsuario);
router.put("/usuario/:id", authenticate, authorize(ROLES.ADMIN, ROLES.PROPIETARIO), usuarioController.actualizarUsuario);
router.delete("/usuario/:id", authenticate, authorize(ROLES.ADMIN), usuarioController.eliminarUsuario);

module.exports = router;
