const mongoose = require('mongoose');

const SALE_ITEM_TYPES = {
  PRODUCT: 'PRODUCT',
  FUEL: 'FUEL'
};

const PAYMENT_METHODS = {
  CASH: 'CASH',
  CARD: 'CARD',
  TRANSFER: 'TRANSFER',
  OTHER: 'OTHER'
};

const SALE_STATUSES = {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

const saleItemSchema = new mongoose.Schema({
  itemType: {
    type: String,
    enum: Object.values(SALE_ITEM_TYPES),
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Producto',
    default: null
  },
  fuelType: {
    type: String,
    trim: true,
    default: null
  },
  quantity: {
    type: Number,
    required: true,
    min: [0.001, 'La cantidad debe ser mayor que cero']
  },
  unitPrice: {
    type: Number,
    required: true,
    min: [0, 'El precio unitario no puede ser negativo']
  },
  volume: {
    type: Number,
    min: [0, 'El volumen no puede ser negativo'],
    default: null
  },
  pump: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Surtidor',
    default: null
  },
  nozzle: {
    type: String,
    trim: true,
    default: null
  },
  total: {
    type: Number,
    required: true,
    min: [0, 'El total del ítem no puede ser negativo'],
    validate: {
      validator: function(total) {
        return Math.abs(total - (this.quantity * this.unitPrice)) < 0.01;
      },
      message: 'El total del ítem no coincide con cantidad por precio unitario'
    }
  }
}, { _id: false });

const paymentSchema = new mongoose.Schema({
  method: {
    type: String,
    enum: Object.values(PAYMENT_METHODS),
    required: true
  },
  reference: {
    type: String,
    trim: true,
    maxlength: [120, 'La referencia de pago no puede exceder 120 caracteres'],
    default: null
  }
}, { _id: false });

const saleSchema = new mongoose.Schema({
  soldAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  items: {
    type: [saleItemSchema],
    required: true,
    validate: {
      validator: (items) => Array.isArray(items) && items.length > 0,
      message: 'La venta debe contener al menos un ítem'
    }
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empleado',
    default: null
  },
  shift: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Turno',
    default: null
  },
  payment: {
    type: paymentSchema,
    required: true
  },
  subtotal: {
    type: Number,
    required: true,
    min: [0, 'El subtotal no puede ser negativo']
  },
  taxes: {
    type: Number,
    required: true,
    min: [0, 'Los impuestos no pueden ser negativos'],
    default: 0
  },
  total: {
    type: Number,
    required: true,
    min: [0, 'El total no puede ser negativo'],
    validate: {
      validator: function(total) {
        return Math.abs(total - (this.subtotal + this.taxes)) < 0.01;
      },
      message: 'El total no coincide con subtotal más impuestos'
    }
  },
  status: {
    type: String,
    enum: Object.values(SALE_STATUSES),
    required: true,
    default: SALE_STATUSES.COMPLETED
  }
}, {
  timestamps: true,
  versionKey: false
});

saleSchema.path('subtotal').validate({
  validator: function(subtotal) {
    const itemsSubtotal = this.items.reduce((sum, item) => sum + item.total, 0);
    return Math.abs(subtotal - itemsSubtotal) < 0.01;
  },
  message: 'El subtotal no coincide con la suma de los ítems'
});

const Venta = mongoose.model('Venta', saleSchema);

module.exports = {
  Venta,
  SALE_ITEM_TYPES,
  PAYMENT_METHODS,
  SALE_STATUSES
};