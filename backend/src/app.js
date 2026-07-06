require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authUsuarios");

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a la base de datos MongoDB Atlas usando la URI del archivo .env
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conexión a MongoDB Atlas exitosa.");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

// Configuración de CORS
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

// Middleware para manejar JSON
app.use(bodyParser.json());

// Rutas
app.use("/auth", authRoutes);

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

