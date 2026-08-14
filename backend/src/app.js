const loadEnv = require('../config/env');
loadEnv();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authUsuarios");
const connectDB = require("../config/database");
const { errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
const PORT = Number(process.env.PORT || 5000);

if (process.env.NODE_ENV !== "test") {
  connectDB();
} else {
  console.log("Saltando conexión a MongoDB en entorno de pruebas.");
}

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  credentials: true,
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use(errorHandler);

if (require.main === module) {
  const startServer = (port) => {
    app.listen(port, () => {
      console.log(`Servidor corriendo en http://localhost:${port}`);
    }).on("error", (error) => {
      if (error.code === "EADDRINUSE") {
        console.warn(`Puerto ${port} ocupado. Probando con el puerto ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error("Error al iniciar el servidor:", error);
        process.exit(1);
      }
    });
  };

  startServer(PORT);
}

module.exports = { app };