const mongoose = require('mongoose');

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI no está definida. Saltando conexión a MongoDB.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conexión a MongoDB Atlas exitosa.');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;