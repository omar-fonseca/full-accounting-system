# 📘 CORS (Cross-Origin Resource Sharing)

---

# 1. Definición técnica

CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado por los navegadores que controla cómo los recursos de un servidor pueden ser solicitados desde un origen diferente al dominio del servidor.

En términos técnicos, CORS es un sistema basado en **cabeceras HTTP** que permite o restringe solicitudes cross-origin entre cliente y servidor.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, CORS cumple el rol de **controlador de acceso entre frontend (React) y backend (Node.js + Express)** cuando ambos están en orígenes distintos.

Su propósito es:

* Permitir comunicación segura entre frontend y backend.
* Definir qué dominios pueden consumir la API.
* Proteger el backend de accesos no autorizados desde orígenes externos.
* Controlar métodos HTTP permitidos (GET, POST, PUT, DELETE).
* Gestionar headers personalizados como JWT.

Desde ingeniería de software, CORS es una capa de seguridad a nivel de navegador que protege la integridad del backend.

---

# 3. Problema que resuelve

Por defecto, los navegadores aplican la política de **Same-Origin Policy**, que bloquea solicitudes entre dominios distintos.

Esto genera problemas como:

* Frontend y backend no pueden comunicarse si están en puertos diferentes.
* APIs bloqueadas por el navegador.
* Dificultad en arquitecturas separadas (SPA + API REST).
* Restricciones en desarrollo local (localhost diferentes puertos).

En el sistema de gasolinera, esto es crítico porque:

* Frontend (React) corre en Vite (ej: `localhost:5173`)
* Backend (Express) corre en otro puerto (ej: `localhost:3000`)

Sin CORS, no habría comunicación entre ambos.

---

# 4. Cómo funciona internamente (conceptual)

CORS funciona mediante el intercambio de **cabeceras HTTP específicas** entre cliente y servidor.

## Flujo básico

1. El frontend envía una solicitud al backend.
2. El navegador detecta que es cross-origin.
3. Si es necesario, envía una solicitud previa (preflight OPTIONS).
4. El backend responde con cabeceras CORS.
5. El navegador valida si la respuesta es permitida.
6. Si es válido, se permite la petición real.

---

## Cabeceras principales

### Access-Control-Allow-Origin

Define qué dominios pueden acceder a la API.

### Access-Control-Allow-Methods

Define métodos HTTP permitidos.

### Access-Control-Allow-Headers

Define headers permitidos (ej: Authorization).

### Access-Control-Allow-Credentials

Permite envío de cookies o credenciales.

---

## Preflight request (OPTIONS)

Es una solicitud automática del navegador para validar permisos antes de ejecutar la petición real.

---

# 5. Casos de uso reales

En el sistema de gasolinera, CORS se utiliza para:

* Permitir comunicación entre React y Express.
* Autorizar consumo de API desde el frontend.
* Habilitar envío de JWT en headers.
* Controlar acceso desde entornos de desarrollo.
* Gestionar integración entre módulos frontend/backend.

### Ejemplo práctico

Cuando el frontend intenta registrar una venta, el navegador verifica CORS antes de permitir que Axios envíe la petición al backend.

---

# 6. Dónde se usa en el stack

CORS se aplica principalmente en el backend:

* **Node.js / Express**: configuración de middleware CORS.
* **React (frontend)**: origen de solicitudes.
* **Axios**: cliente HTTP que dispara requests cross-origin.
* **JWT**: tokens enviados en headers controlados por CORS.
* **Vite**: servidor frontend en desarrollo.

CORS no es lógica de negocio, es configuración de seguridad de comunicación.

---

# 7. Implementación básica

## Instalación

```bash id="cors-install-01"
npm install cors
```

---

## Configuración básica en Express

```javascript id="cors-basic-01"
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(3000);
```

---

## Configuración controlada

```javascript id="cors-config-01"
const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors(corsOptions));
```

---

## CORS con credenciales

```javascript id="cors-credentials-01"
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, CORS debe configurarse con enfoque de seguridad estricta:

* No usar `*` en producción.
* Limitar orígenes permitidos explícitamente.
* Permitir solo métodos necesarios.
* Controlar headers sensibles como Authorization.
* Separar configuraciones por entorno.
* Activar credentials solo si es necesario.
* Mantener configuración centralizada en backend.
* Revisar CORS antes de despliegue.

### Aplicado al sistema de gasolinera

Solo el frontend oficial del sistema debe poder consumir la API de ventas e inventario para evitar accesos externos no autorizados.

---

# 9. Errores comunes

Los errores más frecuentes con CORS son de configuración:

* Usar `origin: *` en sistemas con autenticación.
* No permitir headers como Authorization.
* Olvidar configurar CORS en producción.
* Confundir error CORS con error de backend.
* No manejar preflight requests correctamente.
* Bloquear métodos necesarios (PUT, DELETE).
* No sincronizar puertos entre frontend y backend.

### En el sistema de gasolinera

Un error de CORS puede bloquear completamente la interfaz de ventas, impidiendo operaciones críticas.

---

# 10. Relación con otras tecnologías del stack

CORS se integra con toda la arquitectura:

* **Express**: middleware de configuración.
* **React**: origen de solicitudes.
* **Axios**: cliente HTTP afectado por CORS.
* **JWT**: autenticación protegida por headers.
* **Node.js**: servidor que aplica políticas.
* **Vite**: entorno de desarrollo frontend.
* **MongoDB**: indirectamente afectado vía API.

CORS es el guardián de la comunicación frontend-backend.

---

# 11. Resumen técnico

CORS es el sistema de control de acceso entre dominios del sistema de gasolinera. Permite que el frontend en React consuma de forma segura la API en Node.js y Express, controlando qué orígenes, métodos y headers están autorizados.

En este proyecto, CORS es esencial para habilitar la comunicación entre capas sin comprometer la seguridad del backend.
