# 📘 Arquitectura del Sistema

---

# 1. Definición técnica

La arquitectura de software es la estructura fundamental de un sistema que define cómo se organizan sus componentes, cómo interactúan entre sí y bajo qué principios se mantiene su evolución.

En el sistema de gasolinera, la arquitectura se basa en un modelo **Full Stack desacoplado**, compuesto por:

* Frontend (React + Vite)
* Backend (Node.js + Express)
* Base de datos (MongoDB + Mongoose)
* Comunicación HTTP (Axios)
* Seguridad (JWT + CORS)
* Configuración (dotenv)

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, la arquitectura cumple el rol de **columna vertebral del diseño del sistema**.

Su propósito es:

* Definir la separación de responsabilidades.
* Garantizar escalabilidad del sistema.
* Permitir mantenimiento modular.
* Facilitar integración de nuevas funcionalidades.
* Reducir acoplamiento entre componentes.

Desde ingeniería de software, la arquitectura define la calidad estructural del sistema más allá del código individual.

---

# 3. Problema que resuelve

Sin una arquitectura definida, los sistemas presentan:

* Código acoplado y difícil de mantener.
* Lógica mezclada entre frontend y backend.
* Escalabilidad limitada.
* Dificultad para agregar nuevas funcionalidades.
* Alta probabilidad de errores en integración.

En el sistema de gasolinera, esto sería crítico porque involucra módulos independientes como ventas, inventario, usuarios y reportes.

---

# 4. Cómo funciona internamente (conceptual)

La arquitectura del sistema de gasolinera sigue un modelo **cliente-servidor con API REST**.

## Capas del sistema

### 1. Capa de Presentación (Frontend)

* React + Vite
* Interfaz de usuario
* Manejo de estado (Hooks)
* Navegación (React Router)

### 2. Capa de Comunicación

* Axios
* HTTP Requests
* Intercambio de JSON

### 3. Capa de Lógica de Negocio (Backend)

* Node.js + Express
* Controladores y rutas
* Middleware (JWT, CORS)

### 4. Capa de Persistencia

* MongoDB
* Mongoose (ODM)
* Modelos de datos

---

## Flujo de arquitectura

1. Usuario interactúa con React.
2. React ejecuta lógica con Hooks.
3. Axios envía request al backend.
4. Express recibe la solicitud.
5. Middleware valida JWT/CORS.
6. Controlador ejecuta lógica de negocio.
7. Mongoose interactúa con MongoDB.
8. Respuesta regresa al frontend.
9. UI se actualiza dinámicamente.

---

# 5. Casos de uso reales

En el sistema de gasolinera, la arquitectura permite:

* Registrar ventas de combustible en tiempo real.
* Gestionar inventario dinámicamente.
* Autenticar usuarios con roles.
* Generar reportes operativos.
* Separar módulos independientes.
* Escalar backend y frontend por separado.

### Ejemplo práctico

Un operador registra una venta desde React. La arquitectura permite que esa acción viaje desde frontend → backend → base de datos → respuesta sin acoplar capas.

---

# 6. Dónde se usa en el stack

La arquitectura no es una herramienta, sino la forma en que todo el stack se organiza:

* **Frontend (React + Vite)** → capa visual.
* **Backend (Node + Express)** → lógica de negocio.
* **MongoDB** → persistencia de datos.
* **Mongoose** → modelado estructurado.
* **Axios** → comunicación entre capas.
* **JWT + CORS** → seguridad.
* **dotenv** → configuración del sistema.

Cada tecnología existe dentro de una capa arquitectónica específica.

---

# 7. Implementación básica (estructura del sistema)

## Estructura general

```text id="arch-structure-01"
gasolinera-system/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── App.jsx
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── docs/
└── .env
```

---

## Ejemplo de flujo backend

```javascript id="arch-flow-backend-01"
// Route
app.post("/api/ventas", authMiddleware, crearVenta);

// Controller
async function crearVenta(req, res) {
  const venta = await Venta.create(req.body);
  res.json(venta);
}

// Model
const Venta = mongoose.model("Venta", ventaSchema);
```

---

## Ejemplo de flujo frontend

```javascript id="arch-flow-frontend-01"
const crearVenta = async (data) => {
  const response = await api.post("/ventas", data);
  return response.data;
};
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, la arquitectura debe mantenerse estrictamente modular:

* Separar frontend y backend completamente.
* No mezclar lógica de negocio con UI.
* Usar capas bien definidas (routes → controllers → models).
* Centralizar servicios de API en frontend.
* Mantener estructura por módulos funcionales.
* Evitar dependencias circulares.
* Diseñar pensando en escalabilidad.
* Aplicar separación de responsabilidades (SoC).

### Aplicado al sistema de gasolinera

Cada módulo (ventas, inventario, usuarios) debe ser independiente pero interoperable a través de la API.

---

# 9. Errores comunes

Los errores más frecuentes en arquitectura son estructurales:

* Mezclar frontend y backend en el mismo nivel lógico.
* No separar controladores y rutas.
* Lógica de negocio dentro de componentes React.
* Acceso directo a base de datos desde rutas.
* Falta de modularidad.
* Acoplamiento excesivo entre capas.
* No definir estructura clara desde el inicio.

### En el sistema de gasolinera

Una mala arquitectura haría imposible escalar módulos como ventas o inventario sin romper el sistema completo.

---

# 10. Relación con otras tecnologías del stack

La arquitectura es el marco que organiza todas las tecnologías:

* **React** → capa de presentación.
* **Node.js / Express** → lógica de negocio.
* **MongoDB / Mongoose** → persistencia.
* **Axios** → comunicación entre capas.
* **JWT / CORS** → seguridad arquitectónica.
* **Git** → control de evolución de arquitectura.
* **ESLint** → consistencia estructural del código.
* **dotenv** → configuración del sistema.

La arquitectura define cómo interactúan todas estas piezas.

---

# 11. Resumen técnico

La arquitectura del sistema de gasolinera es un modelo full-stack desacoplado basado en cliente-servidor con API REST. Organiza el sistema en capas claramente separadas para garantizar escalabilidad, mantenibilidad y claridad estructural.

En este proyecto, la arquitectura es el núcleo conceptual que permite que todos los módulos funcionen como un sistema coherente, escalable y profesional.
