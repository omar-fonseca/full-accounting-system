# 📘 JavaScript

---

# 1. Definición técnica

JavaScript es un lenguaje de programación interpretado, dinámico, orientado a objetos basado en prototipos y multiparadigma. Está estandarizado bajo **ECMAScript** y se ejecuta principalmente en navegadores web y entornos server-side como **Node.js** mediante motores de ejecución como **V8**.

En términos prácticos, JavaScript es el lenguaje que permite agregar comportamiento, lógica de negocio, manipulación de datos y comunicación asincrónica dentro de aplicaciones web modernas. Su diseño lo convierte en una pieza central para arquitecturas frontend, backend y full-stack.

---

# 2. Propósito en ingeniería de software

En este proyecto, JavaScript cumple el rol de **lenguaje base del ecosistema completo**. Su propósito no es solo “hacer que la página funcione”, sino permitir que toda la aplicación comparta una misma semántica de desarrollo entre la interfaz, la API y la lógica de negocio.

Eso tiene varias ventajas de ingeniería:

* Reduce fricción entre frontend y backend.
* Permite reutilizar patrones de pensamiento y validación.
* Facilita mantenimiento y escalabilidad.
* Unifica el stack tecnológico.
* Hace más claro el flujo entre datos, interfaces y servicios.

En un sistema como el de gasolinera, JavaScript permite construir la capa de interacción con el usuario, el consumo de servicios, la transformación de datos y parte importante de la lógica operativa.

---

# 3. Problema que resuelve

Antes de JavaScript, las aplicaciones web eran esencialmente estáticas. El navegador mostraba contenido, pero cualquier cambio importante requería volver a cargar la página o depender de mecanismos limitados.

JavaScript resuelve problemas como:

* Interacción dinámica en la interfaz.
* Actualización de datos sin recargar toda la vista.
* Validación de información antes de enviarla al servidor.
* Comunicación asincrónica con APIs.
* Manejo de eventos del usuario.
* Transformación de datos en tiempo real.

En un sistema de gasolinera, esto significa poder calcular valores, mostrar información actualizada, validar formularios de ventas o inventario, reaccionar a cambios del usuario y consumir servicios del backend sin interrumpir la operación.

---

# 4. Cómo funciona internamente (conceptual)

JavaScript no funciona “solo”; necesita un entorno de ejecución. Su comportamiento interno depende del runtime donde se ejecute.

## En navegador

JavaScript trabaja junto con:

* **JavaScript Engine**: interpreta y ejecuta el código.
* **Web APIs**: DOM, `fetch`, `localStorage`, eventos, timers.
* **Event Loop**: coordina la ejecución asincrónica.

## En Node.js

JavaScript trabaja con:

* **V8 Engine**: ejecuta el código JavaScript.
* **libuv**: gestiona asincronía y operaciones no bloqueantes.
* **Event Loop**: orquesta las tareas pendientes.
* **Thread pool**: apoya operaciones de I/O cuando es necesario.

## Modelo de ejecución

El flujo general sigue esta lógica:

* **Call Stack**: ejecuta el código síncrono.
* **Web APIs / Node APIs**: procesan tareas externas.
* **Callback Queue**: guarda callbacks listos para ejecutarse.
* **Microtask Queue**: prioriza promesas y tareas micro.
* **Event Loop**: decide qué tarea pasa al stack.

Este diseño permite trabajar con múltiples operaciones sin bloquear el hilo principal. Por eso JavaScript es tan útil para interfaces reactivas y servidores ligeros con buena concurrencia.

---

# 5. Casos de uso reales

En el proyecto de gasolinera, JavaScript se usa en escenarios concretos como:

* Calcular valores de venta según galones o litros.
* Validar formularios antes de enviar información.
* Transformar respuestas de API en datos listos para mostrar.
* Manejar autenticación y sesiones de usuario.
* Controlar estados de formularios y tablas en React.
* Renderizar listas de ventas, productos o registros operativos.
* Administrar eventos de interacción del usuario.
* Preparar datos para persistencia en backend.

### Ejemplo práctico

Si un usuario ingresa una cantidad de combustible y un precio por galón, JavaScript permite calcular el total inmediatamente, validar que los valores sean correctos y preparar el dato para enviarlo al backend.

---

# 6. Dónde se usa en el stack

JavaScript aparece prácticamente en todo el sistema:

## Frontend

Se usa en React para construir la interfaz, manejar eventos, estados, renderizado condicional, formularios y consumo de datos.

## Backend

Se usa en Node.js y Express para crear la lógica de servidor, definir rutas, procesar peticiones y responder con datos.

## Base de datos

Aunque MongoDB no “se escribe en JavaScript”, la interacción con él se hace desde código JavaScript mediante drivers u ODM como Mongoose.

## Comunicación

Se usa para consumir APIs con `fetch` o Axios.

## Seguridad y configuración

También participa en el manejo de JWT, variables de entorno con `dotenv` y validaciones de entrada.

---

# 7. Implementación básica

```javascript
function calcularTotal(cantidad, precioUnitario) {
  return cantidad * precioUnitario;
}

const totalVenta = calcularTotal(10, 15000);

console.log("Total de la venta:", totalVenta);
```

## Sintaxis importante que conviene dominar

### Variables

```javascript
const empresa = "Gasolinera Central";
let stock = 120;
```

* `const` se usa para valores que no deben reasignarse.
* `let` se usa para valores que cambian.

### Funciones

```javascript
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
```

### Arrow functions

```javascript
const sumar = (a, b) => a + b;
```

### Objetos

```javascript
const venta = {
  producto: "Gasolina Extra",
  galones: 10,
  total: 150000
};
```

### Destructuring

```javascript
const { producto, total } = venta;
```

### Arrays

```javascript
const ventas = [100000, 150000, 200000];
```

### Métodos frecuentes

```javascript
const productosActivos = productos.filter((p) => p.activo);
const nombres = productos.map((p) => p.nombre);
```

### Async / Await

```javascript
async function obtenerVentas() {
  const respuesta = await fetch("/api/ventas");
  const datos = await respuesta.json();
  return datos;
}
```

Estas construcciones son especialmente importantes porque aparecen todo el tiempo en React, Node.js y en la comunicación con APIs.

---

# 8. Buenas prácticas

En este proyecto, las buenas prácticas de JavaScript deben enfocarse en claridad, modularidad y seguridad de datos.

* Usar `const` por defecto y `let` solo cuando haya reasignación.
* Evitar `var`.
* Separar funciones de negocio de la interfaz visual.
* Crear funciones pequeñas y reutilizables.
* Validar los datos antes de procesarlos.
* Usar `async/await` para operaciones asincrónicas legibles.
* Manejar errores con `try/catch`.
* No mutar objetos compartidos sin control.
* Centralizar cálculos críticos como precios, totales o impuestos.
* Mantener nombres descriptivos y consistentes.

### Aplicado al proyecto de gasolinera

Si hay una función que calcula el total de una venta, no debe estar dispersa en varios componentes o archivos. Debe vivir en una función clara y reutilizable, para evitar inconsistencias entre ventas, reportes e inventario.

---

# 9. Errores comunes

Al aprender JavaScript, los errores más comunes no son solo sintácticos, sino de diseño.

* Confundir `==` con `===`.
* Escribir lógica de negocio dentro de componentes visuales.
* No manejar errores en promesas o funciones async.
* Mutar objetos o arrays directamente.
* Usar `map()` para efectos secundarios en lugar de transformación.
* No validar datos numéricos antes de operar con ellos.
* Crear funciones demasiado largas.
* Mezclar datos de UI con datos de negocio.
* Depender de variables globales.
* Ignorar el flujo asincrónico.

### En el sistema de gasolinera

Un error pequeño, como no validar una cantidad de combustible, puede producir cálculos incorrectos, reportes inconsistentes o datos mal almacenados. Por eso JavaScript debe usarse con disciplina y claridad.

---

# 10. Relación con otras tecnologías del stack

JavaScript es la base común de todo el stack del proyecto.

* **Node.js**: ejecuta JavaScript en servidor.
* **Express**: usa JavaScript para definir rutas, middleware y controladores.
* **React**: usa JavaScript para construir UI declarativa.
* **React Router**: usa JavaScript para navegación de vistas.
* **Axios**: usa JavaScript para comunicación HTTP.
* **MongoDB / Mongoose**: se integran con JavaScript para manejo de datos.
* **JWT**: se genera, verifica y consume desde JavaScript.
* **dotenv**: permite leer configuración desde variables de entorno en JavaScript.

JavaScript es el punto de unión entre la presentación, la lógica y la persistencia.

---

# 11. Resumen técnico

JavaScript es el lenguaje central del sistema de gasolinera y de todo el ecosistema moderno de desarrollo web. Su valor no está solo en la sintaxis, sino en su capacidad para coordinar interfaces, datos, eventos y comunicación asincrónica dentro de una arquitectura full-stack.

En este proyecto, JavaScript permite construir lógica de negocio, consumir servicios, validar información, controlar el flujo de interacción y conectar frontend con backend de forma eficiente y mantenible.
