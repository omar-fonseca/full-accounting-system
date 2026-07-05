# 📘 Axios

---

# 1. Definición técnica

Axios es una librería cliente HTTP basada en promesas que permite realizar peticiones asincrónicas desde el navegador o Node.js hacia servidores backend o APIs externas.

Funciona como una abstracción sobre `XMLHttpRequest` (en navegador) y `http` (en Node.js), simplificando la comunicación HTTP mediante una API más limpia, consistente y fácil de manejar.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, Axios cumple el rol de **puente de comunicación entre frontend (React) y backend (Node.js + Express)**.

Su propósito es:

* Consumir APIs REST del sistema.
* Enviar datos desde formularios al backend.
* Recibir información de ventas, inventario y usuarios.
* Centralizar la comunicación HTTP del frontend.
* Manejar respuestas asincrónicas de forma estructurada.

Desde ingeniería de software, Axios permite desacoplar la lógica de interfaz de la lógica de comunicación, haciendo el frontend más limpio y mantenible.

---

# 3. Problema que resuelve

Antes de Axios, la comunicación HTTP en frontend dependía de APIs nativas como `fetch`, que aunque funcionales, son más verbosas y requieren más manejo manual.

Axios resuelve problemas como:

* Manejo complejo de JSON manual.
* Falta de interceptores para requests/responses.
* Configuración repetitiva de headers.
* Manejo inconsistente de errores.
* Dificultad para centralizar llamadas HTTP.

En el sistema de gasolinera, esto es crítico para evitar duplicación de lógica al consumir endpoints de ventas, inventario o autenticación.

---

# 4. Cómo funciona internamente (conceptual)

Axios funciona como una capa intermedia entre la aplicación y el protocolo HTTP.

## Flujo general

1. El frontend crea una petición (GET, POST, PUT, DELETE).
2. Axios la intercepta y la configura.
3. Se envía la solicitud al servidor backend.
4. El servidor responde con datos JSON.
5. Axios procesa la respuesta.
6. Devuelve una promesa resuelta o rechazada.

## Características internas clave

### Promesas

Axios utiliza promesas para manejar asincronía de forma estructurada.

### Interceptores

Permiten modificar requests o responses antes de que lleguen al destino.

### Transformación automática

Convierte automáticamente JSON entre cliente y servidor.

### Manejo de errores

Centraliza errores HTTP (4xx, 5xx) en un solo flujo.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Axios se utiliza para:

* Autenticación de usuarios (login/logout).
* Registro de ventas de combustible.
* Consulta de inventario.
* Obtención de reportes operativos.
* Gestión de usuarios y roles.
* Comunicación con endpoints del backend.

### Ejemplo práctico

Cuando un operador registra una venta, Axios envía los datos al backend, recibe la confirmación y actualiza la interfaz sin recargar la página.

---

# 6. Dónde se usa en el stack

Axios se utiliza exclusivamente en el frontend:

* **React (interfaz del sistema de gasolinera)**.
* Comunicación con **API REST en Express**.
* Envío de datos desde formularios.
* Recepción de información de MongoDB vía backend.
* Manejo de autenticación con JWT.

Axios es el canal oficial de comunicación entre frontend y backend.

---

# 7. Implementación básica

## Instalación

```bash id="axios-install-01"
npm install axios
```

---

## GET request

```javascript id="axios-get-01"
import axios from "axios";

axios.get("http://localhost:3000/api/ventas")
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error("Error al obtener ventas:", error);
  });
```

---

## POST request

```javascript id="axios-post-01"
import axios from "axios";

const nuevaVenta = {
  producto: "Gasolina Extra",
  galones: 10,
  total: 150000
};

axios.post("http://localhost:3000/api/ventas", nuevaVenta)
  .then(response => {
    console.log("Venta registrada:", response.data);
  })
  .catch(error => {
    console.error("Error al registrar venta:", error);
  });
```

---

## Instancia configurada (recomendado)

```javascript id="axios-instance-01"
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
});

export default api;
```

---

## Uso con async/await

```javascript id="axios-async-01"
import api from "./api";

async function obtenerVentas() {
  try {
    const response = await api.get("/ventas");
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, Axios debe usarse de forma centralizada y consistente:

* Crear una instancia global de Axios.
* Centralizar baseURL en variables de entorno.
* Manejar errores de forma uniforme.
* Usar `async/await` en lugar de `.then()` en lógica compleja.
* Evitar llamadas HTTP directamente en múltiples componentes.
* Separar servicios de API en módulos (`services/`).
* Usar interceptores para autenticación JWT.
* Controlar timeouts en solicitudes críticas.
* Validar respuestas antes de usarlas en UI.

### Aplicado al sistema de gasolinera

Las llamadas a ventas, inventario y usuarios deben estar centralizadas en servicios como `ventasService`, `authService`, etc., para evitar duplicación y errores de consistencia.

---

# 9. Errores comunes

Los errores más frecuentes al usar Axios son de arquitectura y manejo de asincronía:

* Hacer llamadas HTTP directamente en componentes React.
* No manejar errores de red o servidor.
* No centralizar configuración de Axios.
* Repetir baseURL en múltiples archivos.
* No usar interceptores para tokens JWT.
* Ignorar estados de carga y error.
* No cancelar requests innecesarias.
* Mezclar lógica de UI con lógica de API.

### En el sistema de gasolinera

Un error en la comunicación con el backend puede generar inconsistencias en ventas registradas o datos de inventario desactualizados.

---

# 10. Relación con otras tecnologías del stack

Axios conecta el frontend con el resto del sistema:

* **React**: usa Axios para consumir datos.
* **Node.js / Express**: backend que responde a las peticiones.
* **JavaScript**: lenguaje base de ejecución.
* **JWT**: autenticación mediante headers.
* **MongoDB / Mongoose**: origen de datos consumidos.
* **React Router**: navegación que dispara peticiones.
* **Vite**: entorno donde se ejecuta el frontend.

Axios es el canal principal de comunicación entre capas.

---

# 11. Resumen técnico

Axios es la librería de comunicación HTTP del sistema de gasolinera. Permite realizar peticiones al backend de forma estructurada, manejando asincronía, errores y configuración de forma centralizada.

En este proyecto, Axios es fundamental para conectar la interfaz React con la API construida en Node.js y Express, garantizando flujo de datos consistente entre frontend y backend.
