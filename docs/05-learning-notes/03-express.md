# 📘 Express.js

---

# 1. Definición técnica

Express.js es un framework minimalista para Node.js que facilita la construcción de aplicaciones web, servidores HTTP y APIs REST. Proporciona una capa de abstracción sobre el módulo nativo `http` de Node.js para gestionar rutas, middleware, solicitudes y respuestas de manera más estructurada.

Express no reemplaza a Node.js; funciona sobre él. Su valor está en simplificar la creación de backend sin obligar al desarrollador a escribir toda la infraestructura HTTP desde cero.

---

# 2. Propósito en ingeniería de software

En este proyecto, Express cumple el rol de **columna vertebral de la API del backend**. Su propósito es recibir solicitudes desde el frontend, enrutar cada petición hacia la lógica adecuada, aplicar middleware cuando sea necesario y devolver respuestas consistentes al cliente.

En un sistema de gasolinera, Express permite organizar de forma limpia la comunicación entre la interfaz de usuario, la lógica de negocio y la base de datos. Es una pieza clave para construir un backend mantenible, legible y escalable.

---

# 3. Problema que resuelve

Node.js puro ofrece el módulo `http`, pero trabajar directamente con él implica más código, más complejidad y menos claridad para aplicaciones reales.

Express resuelve problemas como:

* Definición de rutas de forma clara.
* Gestión centralizada de middleware.
* Manejo estructurado de solicitudes y respuestas.
* Separación entre lógica de negocio y capa HTTP.
* Construcción rápida de APIs REST.

En el sistema de gasolinera, esto evita tener un backend desordenado, donde cada endpoint termine siendo una mezcla caótica de validación, consulta de datos, cálculo y respuesta.

---

# 4. Cómo funciona internamente (conceptual)

Express funciona como una capa intermedia sobre Node.js que organiza el ciclo de vida de una petición HTTP.

## Flujo conceptual

1. Llega una solicitud al servidor.
2. Express identifica la ruta y el método HTTP.
3. Se ejecutan los middleware aplicables.
4. La petición pasa al controlador correspondiente.
5. El controlador procesa la lógica necesaria.
6. Se envía una respuesta al cliente.

## Componentes clave

### Routing

Permite mapear URL y métodos HTTP a funciones específicas.

### Middleware

Son funciones intermedias que pueden modificar la solicitud, la respuesta o decidir si la petición continúa.

### Request / Response

Express encapsula objetos de entrada y salida para trabajar más cómodamente con datos HTTP.

### Error handling

Express permite centralizar el manejo de errores para mantener el backend más robusto.

Este diseño hace que la API sea modular y fácil de extender cuando el proyecto crece.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Express se utiliza para:

* Crear endpoints de autenticación.
* Exponer rutas para ventas, usuarios e inventario.
* Validar datos antes de enviarlos a la base de datos.
* Organizar controladores por dominio funcional.
* Aplicar middleware de seguridad.
* Responder con JSON al frontend.
* Manejar errores de forma uniforme.

### Ejemplo práctico

Cuando el frontend registra una venta, Express recibe la petición `POST`, pasa por middleware de autenticación y validación, ejecuta el controlador de ventas y devuelve una respuesta estructurada al cliente.

---

# 6. Dónde se usa en el stack

Express se ubica en la capa de servidor del proyecto:

* **API REST** del sistema de gasolinera.
* **Capa intermedia** entre frontend y base de datos.
* **Enrutamiento** de recursos como usuarios, ventas, inventario y autenticación.
* **Middleware de seguridad** y validación.
* **Integración con MongoDB** mediante servicios y modelos.

Express es el organizador principal del backend. No contiene la lógica de negocio completa, pero sí decide cómo se accede a ella.

---

# 7. Implementación básica

```javascript id="express-basic-01"
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Express activa");
});

app.post("/ventas", (req, res) => {
  const venta = req.body;
  res.status(201).json({
    mensaje: "Venta registrada correctamente",
    data: venta
  });
});

app.listen(3000, () => {
  console.log("Servidor Express escuchando en el puerto 3000");
});
```

## Sintaxis importante

### Crear la aplicación

```javascript id="express-app-01"
const app = express();
```

### Middleware para JSON

```javascript id="express-json-01"
app.use(express.json());
```

### Ruta GET

```javascript id="express-get-01"
app.get("/ruta", (req, res) => {
  res.send("Respuesta");
});
```

### Ruta POST

```javascript id="express-post-01"
app.post("/ruta", (req, res) => {
  res.json({ ok: true });
});
```

### Código de estado HTTP

```javascript id="express-status-01"
res.status(200).json({ mensaje: "OK" });
```

Estas estructuras aparecen constantemente en aplicaciones reales y conviene dominarlas bien.

---

# 8. Buenas prácticas

En el proyecto de gasolinera, Express debe usarse con orden y separación clara de responsabilidades.

* Separar rutas, controladores y servicios.
* Evitar escribir lógica de negocio dentro de las rutas.
* Usar middleware para validación, autenticación y permisos.
* Responder siempre con formatos consistentes.
* Manejar errores con middleware centralizado.
* Validar `req.body`, `req.params` y `req.query`.
* Mantener nombres de rutas claros y predecibles.
* Usar métodos HTTP correctamente según la acción.
* Organizar por módulos funcionales: ventas, usuarios, inventario, autenticación.
* No duplicar lógica en distintos endpoints.

### Aplicado al sistema de gasolinera

La ruta de ventas no debería calcular, validar, guardar y formatear todo en el mismo bloque. Express permite dividir ese flujo para que el sistema siga siendo mantenible a medida que crece.

---

# 9. Errores comunes

Los errores más frecuentes al usar Express son estructurales.

* Poner demasiada lógica dentro de una ruta.
* No usar middleware correctamente.
* Olvidar `express.json()` y no poder leer cuerpos JSON.
* No manejar errores de manera global.
* Mezclar validación, persistencia y respuesta en el mismo archivo.
* Devolver respuestas inconsistentes.
* No respetar verbos HTTP.
* No modularizar el proyecto.

### En el sistema de gasolinera

Un endpoint mal estructurado puede hacer que una venta se procese parcialmente, que un error no se capture o que el frontend reciba respuestas ambiguas. Eso complica depuración y mantenimiento.

---

# 10. Relación con otras tecnologías del stack

Express está estrechamente vinculado con el resto del sistema:

* **Node.js**: runtime donde Express se ejecuta.
* **JavaScript**: lenguaje con el que se programa Express.
* **MongoDB / Mongoose**: persistencia de datos que la API consume.
* **JWT**: autenticación de usuarios mediante middleware.
* **dotenv**: configuración de variables de entorno.
* **Axios**: el frontend usa Axios para consumir la API creada con Express.

Express es el puente operativo entre la interfaz y la lógica persistente del sistema.

---

# 11. Resumen técnico

Express.js es el framework que permite estructurar el backend del sistema de gasolinera de forma limpia y modular. Sobre Node.js, facilita la creación de rutas, middleware y respuestas HTTP, reduciendo complejidad y mejorando mantenimiento.

En este proyecto, Express es el punto donde convergen validación, autenticación, lógica de negocio y comunicación con la base de datos, convirtiéndose en una pieza esencial de la arquitectura.
