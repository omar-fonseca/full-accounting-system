# 📘 MongoDB

---

# 1. Definición técnica

MongoDB es una base de datos NoSQL orientada a documentos que almacena información en formato **BSON (Binary JSON)**. A diferencia de las bases de datos relacionales, MongoDB no utiliza tablas ni esquemas rígidos, sino colecciones de documentos flexibles.

Cada documento representa una entidad del sistema y puede contener estructuras anidadas, listas y tipos dinámicos de datos.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, MongoDB cumple el rol de **sistema principal de persistencia de datos**.

Su propósito es:

* Almacenar ventas de combustible.
* Registrar usuarios del sistema.
* Mantener inventario de productos.
* Guardar registros operativos y reportes.
* Permitir escalabilidad flexible del modelo de datos.

Desde ingeniería de software, MongoDB permite construir un sistema de datos adaptable a cambios de negocio sin necesidad de migraciones rígidas.

---

# 3. Problema que resuelve

Las bases de datos relacionales tradicionales imponen estructuras rígidas que dificultan la evolución rápida de sistemas modernos.

MongoDB resuelve problemas como:

* Rigidez en esquemas tabulares.
* Dificultad para manejar datos semi-estructurados.
* Escalabilidad compleja en sistemas distribuidos.
* Altos costos de migración de estructura.
* Baja flexibilidad para cambios en el modelo de negocio.

En el sistema de gasolinera, esto es crítico porque los módulos de ventas, inventario y usuarios pueden evolucionar con nuevos campos sin romper el sistema.

---

# 4. Cómo funciona internamente (conceptual)

MongoDB se basa en un modelo de almacenamiento de documentos dentro de colecciones.

## Estructura básica

* Base de datos → Contenedor general.
* Colección → Conjunto de documentos.
* Documento → Registro individual en formato BSON.

## Modelo de datos

Un documento puede contener:

* Campos simples (texto, números, booleanos).
* Objetos anidados.
* Arrays de valores.
* Referencias a otros documentos.

## Almacenamiento

MongoDB almacena los documentos en formato BSON, lo que permite:

* Mayor eficiencia en lectura/escritura.
* Soporte para estructuras complejas.
* Serialización rápida entre backend y base de datos.

## Escalabilidad

MongoDB está diseñado para:

* Escalado horizontal (sharding).
* Replicación de datos.
* Alta disponibilidad.

---

# 5. Casos de uso reales

En el sistema de gasolinera, MongoDB se utiliza para:

* Registrar ventas de combustible.
* Almacenar usuarios y roles del sistema.
* Gestionar inventario de productos.
* Guardar historial de transacciones.
* Registrar auditorías operativas.

### Ejemplo práctico

Una venta se almacena como un documento que incluye producto, cantidad, precio unitario, total y fecha, permitiendo consultas rápidas para reportes y análisis.

---

# 6. Dónde se usa en el stack

MongoDB se encuentra en la capa de persistencia del sistema:

* **Backend (Node.js + Express)** como consumidor principal.
* **Mongoose** como capa de abstracción.
* **API REST** que expone datos al frontend.
* **Sistema de reportes y análisis de datos**.
* **Autenticación y gestión de usuarios**.

MongoDB no interactúa directamente con el frontend; siempre pasa a través del backend.

---

# 7. Implementación básica

## Conexión desde Node.js

```javascript id="mongo-connect-01"
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/gasolinera", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error de conexión:", err));
```

---

## Ejemplo de documento

```json id="mongo-doc-01"
{
  "producto": "Gasolina Extra",
  "galones": 10,
  "precioUnitario": 15000,
  "total": 150000,
  "fecha": "2026-07-05"
}
```

---

## Operaciones básicas

### Insertar documento

```javascript id="mongo-insert-01"
db.ventas.insertOne({
  producto: "Gasolina Extra",
  galones: 10,
  total: 150000
});
```

### Consultar documentos

```javascript id="mongo-find-01"
db.ventas.find({});
```

### Filtrar datos

```javascript id="mongo-filter-01"
db.ventas.find({ producto: "Gasolina Extra" });
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, MongoDB debe usarse con criterios de consistencia y escalabilidad:

* Definir esquemas claros mediante Mongoose.
* Validar datos antes de persistirlos.
* Evitar documentos excesivamente grandes.
* Normalizar datos cuando sea necesario.
* Usar índices para optimizar consultas frecuentes.
* Mantener consistencia en nombres de campos.
* Separar colecciones por dominio funcional.
* Registrar fechas en formato estándar (ISO).

### Aplicado al sistema de gasolinera

Las ventas deben estructurarse de forma consistente para permitir reportes confiables de ingresos, consumo y rendimiento operativo.

---

# 9. Errores comunes

Los errores más frecuentes en MongoDB son de modelado de datos:

* No definir estructura clara de documentos.
* Mezclar demasiados tipos de datos en una colección.
* No usar índices en campos de consulta frecuente.
* Guardar datos redundantes innecesarios.
* No validar datos antes de guardarlos.
* Crear documentos demasiado anidados.
* No controlar duplicidad de registros.
* Diseñar el modelo sin pensar en consultas reales.

### En el sistema de gasolinera

Un mal diseño de ventas puede generar reportes incorrectos, dificultar auditorías o afectar la trazabilidad de operaciones.

---

# 10. Relación con otras tecnologías del stack

MongoDB se integra con todo el backend del sistema:

* **Node.js**: ejecuta la lógica que accede a la base de datos.
* **Express**: expone endpoints que consumen datos.
* **Mongoose**: facilita modelado y validación.
* **Axios**: frontend consume datos provenientes de MongoDB.
* **JWT**: datos de usuarios almacenados en MongoDB.
* **React**: visualiza la información almacenada.
* **Vite**: entorno del frontend que consume datos.

MongoDB es el núcleo de persistencia del sistema de gasolinera.

---

# 11. Resumen técnico

MongoDB es la base de datos NoSQL del sistema de gasolinera. Permite almacenar datos en formato flexible basado en documentos, facilitando escalabilidad y evolución del modelo de negocio.

En este proyecto, MongoDB es responsable de persistir ventas, usuarios, inventario y registros operativos, proporcionando una base de datos adaptable, eficiente y alineada con arquitecturas modernas de aplicaciones web.
