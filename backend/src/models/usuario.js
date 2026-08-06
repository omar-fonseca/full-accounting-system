const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * Enum de roles disponibles en el sistema
 */
const ROLES = {
  ADMIN: 'ADMIN',
  PROPIETARIO: 'PROPIETARIO',
  OPERARIO: 'OPERARIO',
  CONTADOR: 'CONTADOR',
  CLIENTE: 'CLIENTE'
};

/**
 * Enum de estados de cuenta de usuario
 */
const ESTADOS = {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DELETED: 'DELETED'
};

const usuarioSchema = new mongoose.Schema({
  nombre: { 
    type: String, 
    required: [true, 'El nombre es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede excedar 100 caracteres']
  },
  email: { 
    type: String, 
    required: [true, 'El email es obligatorio'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Email inválido']
  },
  password: { 
    type: String, 
    required: [true, 'La contraseña es obligatoria'],
    minlength: [8, 'La contraseña debe tener al menos 8 caracteres']
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.CLIENTE,
    required: true
  },
  estado: {
    type: String,
    enum: Object.values(ESTADOS),
    default: ESTADOS.PENDING,
    required: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  lastLoginAt: {
    type: Date,
    default: null
  },
  refreshToken: {
    type: String,
    default: null
  }
}, {
  timestamps: true,
  versionKey: false
});

/**
 * Middleware para hashear la contraseña antes de guardar
 */
usuarioSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

/**
 * Método para comparar contraseñas
 */
usuarioSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

/**
 * Método para generar token público del usuario (sin password)
 */
usuarioSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.password;
  delete user.refreshToken;
  delete user.__v;
  return user;
};

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = {
  Usuario,
  ROLES,
  ESTADOS
};
