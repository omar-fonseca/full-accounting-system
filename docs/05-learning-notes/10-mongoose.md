# 📘 Mongoose

---

# 1. Definición técnica

Mongoose es una librería de modelado de datos (ODM: Object Data Modeling) para MongoDB y Node.js. Proporciona una capa de abstracción que permite definir esquemas estructurados sobre una base de datos NoSQL, facilitando validación, consultas, relaciones y lógica de negocio a nivel de modelo.

Aunque MongoDB es flexible, Mongoose introduce estructura controlada sobre esa flexibilidad.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, Mongoose cumple el rol de **capa de modelado y validación de datos entre el backend y la base de datos**.

Su propósito es:

* Definir estructuras claras para ventas, usuarios e inventario.
* Validar datos antes de ser persistidos en MongoDB.
* Centralizar reglas de negocio a nivel de modelo.
* Simplificar consultas complejas.
* Mantener consistencia en la base de datos.

Desde ingeniería de software, Mongoose actúa como una capa de disciplina sobre un sistema flexible, evitando caos en el modelado de datos.

---

# 3. Problema que resuelve

MongoDB por sí solo es altamente flexible, lo que puede convertirse en un problema en sistemas grandes.

Problemas que Mongoose resuelve:

* Falta de estructura estricta en documentos.
* Inconsistencia de datos entre registros.
* Validación manual repetitiva en el backend.
* Dificultad para definir reglas de negocio en la base de datos.
* Consultas complejas poco organizadas.

En el sistema de gasolinera, esto evita que ventas o usuarios se almacenen con datos incompletos o inconsistentes.

---

# 4. Cómo funciona internamente (conceptual)

Mongoose se sitúa entre Node.js y MongoDB como una capa de abstracción.

## Componentes principales

### Schema

Define la estructura de los documentos (campos, tipos, validaciones).

### Model

Es la interfaz que permite interactuar con la colección en MongoDB.

### Document

Instancia real de un modelo almacenado en la base de datos.

## Flujo interno

1. Se define un Schema.
2. Se crea un Model a partir del Schema.
3. Se ejecutan operaciones CRUD usando el Model.
4. Mongoose valida datos antes de enviarlos a MongoDB.
5. MongoDB almacena el documento final.

## Validación

Mongoose permite definir reglas como:

* Tipos de datos.
* Campos obligatorios.
* Valores por defecto.
* Validaciones personalizadas.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Mongoose se utiliza para:

* Definir el modelo de ventas de combustible.
* Estructurar usuarios del sistema.
* Modelar inventario de productos.
* Validar datos antes de guardar transacciones.
* Consultar registros operativos.
* Relacionar entidades entre colecciones.

### Ejemplo práctico

Cuando se registra una venta, Mongoose valida que los campos como galones, precio y total sean correctos antes de guardar el documento en MongoDB.

---

# 6. Dónde se usa en el stack

Mongoose se encuentra en la capa de backend:

* **Node.js**: entorno de ejecución.
* **Express**: controlador de rutas que usa modelos.
* **MongoDB**: base de datos subyacente.
* **API REST**: consultas estructuradas a través de modelos.
* **Autenticación JWT**: usuarios modelados con Mongoose.

Mongoose no se usa en frontend; su función es exclusivamente del backend.

---

# 7. Implementación básica

## Conexión

```javascript id="mongoose-connect-01"
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gasolinera")
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error("Error de conexión:", err));
```

---

## Definición de Schema

```javascript id="mongoose-schema-01"
const mongoose = require("mongoose");

const ventaSchema = new mongoose.Schema({
  producto: {
    type: String,
    required: true
  },
  galones: {
    type: Number,
    required: true
  },
  precioUnitario: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});
```

---

## Modelo

```javascript id="mongoose-model-01"
const Venta = mongoose.model("Venta", ventaSchema);

module.exports = Venta;
```

---

## Uso del modelo

```javascript id="mongoose-usage-01"
const Venta = require("./models/Venta");

async function crearVenta() {
  const nuevaVenta = new Venta({
    producto: "Gasolina Extra",
    galones: 10,
    precioUnitario: 15000,
    total: 150000
  });

  await nuevaVenta.save();
}
```

---

## Consulta básica

```javascript id="mongoose-query-01"
const ventas = await Venta.find({});
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, Mongoose debe usarse como el núcleo de consistencia del backend:

* Definir esquemas claros y estrictos.
* Validar todos los campos obligatorios.
* Usar tipos de datos correctos (Number, String, Date).
* Centralizar lógica de validación en los schemas.
* Evitar lógica de negocio compleja dentro del modelo.
* Usar nombres consistentes entre colecciones.
* Separar modelos por dominio (ventas, usuarios, inventario).
* Usar timestamps cuando sea necesario.
* Implementar índices en campos de consulta frecuente.

### Aplicado al sistema de gasolinera

El modelo de ventas debe garantizar que cada registro tenga coherencia matemática (ej: galones × precio = total) antes de persistir.

---

# 9. Errores comunes

Los errores más frecuentes en Mongoose son de modelado y validación:

* No definir schemas y usar MongoDB sin estructura.
* Campos mal tipados (String en lugar de Number).
* No validar datos obligatorios.
* Duplicar lógica de validación en múltiples capas.
* No manejar errores de validación correctamente.
* Sobrecargar schemas con lógica de negocio.
* No usar modelos separados por entidad.
* No controlar relaciones entre documentos.

### En el sistema de gasolinera

Un error en el schema de ventas puede generar inconsistencias graves en reportes financieros o inventarios.

---

# 10. Relación con otras tecnologías del stack

Mongoose conecta directamente con el backend completo:

* **MongoDB**: base de datos subyacente.
* **Node.js**: ejecuta los modelos.
* **Express**: usa modelos en controladores.
* **JWT**: usuarios almacenados y validados en modelos.
* **React**: consume datos estructurados desde la API.
* **Axios**: transporte de datos desde backend.
* **JavaScript**: lenguaje base de toda la capa.

Mongoose es el puente estructurado entre lógica de backend y almacenamiento de datos.

---

# 11. Resumen técnico

Mongoose es la capa de modelado y validación del sistema de gasolinera sobre MongoDB. Permite definir estructuras claras, aplicar reglas de negocio y garantizar consistencia en los datos del sistema.

En este proyecto, Mongoose asegura que ventas, usuarios e inventario mantengan integridad estructural, convirtiéndose en un componente crítico para la confiabilidad del backend.
