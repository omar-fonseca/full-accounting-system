# 📘 Node.js

---

# 1. Definición técnica

Node.js es un entorno de ejecución de JavaScript construido sobre el motor **V8** de Chrome. Permite ejecutar código JavaScript fuera del navegador, principalmente en el servidor, con un modelo orientado a eventos y operaciones de entrada/salida no bloqueantes.

A diferencia de un lenguaje de backend tradicional, Node.js no es un lenguaje en sí mismo, sino una plataforma de ejecución que transforma JavaScript en una herramienta útil para construir APIs, servicios web, procesos automatizados y aplicaciones escalables.

---

# 2. Propósito en ingeniería de software

En este proyecto, Node.js cumple el rol de **runtime del backend**. Su propósito es ejecutar la lógica del servidor que recibe peticiones desde el frontend, procesa reglas de negocio, consulta la base de datos y devuelve respuestas estructuradas.

Node.js permite que el sistema de gasolinera tenga una base tecnológica coherente, porque el mismo lenguaje usado en el frontend también puede usarse en el backend. Eso simplifica mantenimiento, depuración, capacitación y evolución del sistema.

---

# 3. Problema que resuelve

Antes de Node.js, construir backend implicaba depender de otros lenguajes o plataformas más pesadas para manejar solicitudes web, autenticación, lógica de negocio y persistencia de datos.

Node.js resuelve problemas como:

* Necesidad de servidores rápidos para APIs modernas.
* Manejo eficiente de múltiples solicitudes concurrentes.
* Reducción de complejidad al usar JavaScript en todo el stack.
* Mejor integración con aplicaciones web de tipo SPA.
* Procesamiento no bloqueante de operaciones I/O.

En el sistema de gasolinera, esto permite atender consultas de ventas, usuarios, inventario y reportes sin detener la aplicación cuando hay muchas solicitudes simultáneas.

---

# 4. Cómo funciona internamente (conceptual)

Node.js combina varias piezas fundamentales:

## Motor V8

* Ejecuta el código JavaScript.
* Compila y optimiza el código para mejorar rendimiento.

## libuv

* Gestiona la asincronía.
* Maneja el event loop.
* Coordina operaciones de entrada/salida sin bloquear el hilo principal.

## Event Loop

Es el mecanismo que permite que Node.js procese múltiples operaciones sin quedarse esperando una sola tarea. En vez de bloquearse, Node delega ciertas operaciones y continúa atendiendo otras solicitudes.

## Modelo no bloqueante

Node.js trabaja con un enfoque **non-blocking I/O**, lo que significa que las operaciones como lectura de archivos, consultas de red o acceso a base de datos se gestionan de forma asíncrona.

### Flujo conceptual

1. Llega una petición HTTP.
2. Node.js la recibe.
3. La lógica de negocio procesa la solicitud.
4. Si hay una operación externa, se delega asincrónicamente.
5. Cuando termina la operación, la respuesta vuelve al flujo principal.
6. El servidor responde al cliente.

Este modelo es ideal para aplicaciones web que necesitan rapidez, concurrencia y bajo consumo de recursos en tareas I/O intensivas.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Node.js se usa para:

* Servir la API principal del sistema.
* Gestionar autenticación de usuarios.
* Procesar ventas, reportes e inventario.
* Exponer endpoints para el frontend en React.
* Coordinar operaciones con MongoDB.
* Validar datos antes de persistirlos.
* Ejecutar lógica de negocio del lado del servidor.

### Ejemplo práctico

Cuando el usuario registra una venta de combustible, Node.js recibe los datos, valida la información, calcula lo necesario, guarda el registro en base de datos y devuelve una respuesta al frontend.

---

# 6. Dónde se usa en el stack

Node.js aparece en la capa de servidor del proyecto:

* **Backend principal** de la aplicación.
* **API REST** que consume el frontend.
* **Integración con Express**, que construye rutas y middleware.
* **Conexión con MongoDB** mediante Mongoose o drivers.
* **Procesos de autenticación** con JWT.
* **Servicios auxiliares** como validaciones o lógica de negocio.

En la arquitectura del sistema de gasolinera, Node.js es el motor que mantiene viva la lógica del backend.

---

# 7. Implementación básica

```javascript id="node-basic-01"
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Servidor Node.js activo");
});

server.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
```

## Sintaxis clave que conviene entender

### Módulos

```javascript id="node-modules-01"
const fs = require("fs");
```

Node trabaja con módulos para dividir el código en piezas reutilizables.

### Función de callback

```javascript id="node-callback-01"
server.listen(3000, () => {
  console.log("Escuchando solicitudes");
});
```

### Manejo asincrónico

```javascript id="node-async-01"
async function obtenerDatos() {
  return "datos";
}
```

### Exportación de funciones

```javascript id="node-export-01"
module.exports = {
  obtenerDatos
};
```

Estas construcciones son básicas para organizar aplicaciones Node reales.

---

# 8. Buenas prácticas

En el proyecto de gasolinera, Node.js debe usarse con disciplina estructural:

* Separar rutas, controladores, servicios y modelos.
* Evitar colocar lógica de negocio directamente en los endpoints.
* Manejar errores con `try/catch` y middleware centralizado.
* Mantener funciones cortas y enfocadas en una sola responsabilidad.
* Usar operaciones asincrónicas correctamente.
* Validar datos antes de acceder a la base de datos.
* Centralizar configuración con variables de entorno.
* Registrar eventos y errores de forma clara para depuración.
* No bloquear el event loop con operaciones costosas.
* Mantener una estructura modular para facilitar mantenimiento.

### Aplicado al sistema de gasolinera

Si una venta depende de cálculo, autenticación y registro de inventario, cada parte debe vivir en una capa distinta. Node.js permite eso, pero solo si se organiza correctamente desde el inicio.

---

# 9. Errores comunes

Los errores más frecuentes al trabajar con Node.js suelen ser de arquitectura y asincronía:

* Bloquear el event loop con código pesado.
* Mezclar lógica de negocio con rutas.
* No capturar errores en funciones async.
* Usar callbacks innecesariamente cuando `async/await` es más claro.
* No estructurar el proyecto en capas.
* Acceder a variables de entorno sin validación.
* Manejar mal los módulos y dependencias.
* Escribir endpoints demasiado grandes y difíciles de mantener.

### En el sistema de gasolinera

Un endpoint mal diseñado puede provocar respuestas incorrectas, errores en registros de ventas o fallos de integridad en los datos. Por eso Node.js debe organizarse con separación clara de responsabilidades.

---

# 10. Relación con otras tecnologías del stack

Node.js es el punto de ejecución del backend y se relaciona con todo el stack:

* **JavaScript**: lenguaje base que ejecuta Node.
* **Express**: framework que corre sobre Node para crear APIs.
* **MongoDB**: base de datos conectada desde Node.
* **Mongoose**: ODM que simplifica el trabajo con MongoDB.
* **JWT**: autenticación y autorización en el backend.
* **dotenv**: carga de variables de entorno.
* **Axios**: el frontend consume las respuestas generadas por Node a través de Express.

Sin Node.js, el backend del sistema no existiría; es la base ejecutiva de toda la lógica del servidor.

---

# 11. Resumen técnico

Node.js es el runtime que permite ejecutar JavaScript en el servidor con un enfoque no bloqueante y basado en eventos. En el sistema de gasolinera, su función es sostener la API, procesar solicitudes, coordinar la lógica de negocio y conectar el frontend con la base de datos.

Su mayor valor está en la eficiencia para manejar múltiples operaciones simultáneas y en la coherencia tecnológica que aporta al usar JavaScript en todo el stack.
