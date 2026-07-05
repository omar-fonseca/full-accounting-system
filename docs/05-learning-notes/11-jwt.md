# 📘 JWT (JSON Web Token)

---

# 1. Definición técnica

JWT (JSON Web Token) es un estándar abierto (RFC 7519) utilizado para la transmisión segura de información entre dos partes como un objeto JSON compacto, autocontenido y firmado digitalmente.

Un JWT está compuesto por tres partes:

* **Header (cabecera)**
* **Payload (carga útil)**
* **Signature (firma digital)**

Estas partes están codificadas en Base64 y separadas por puntos (`.`).

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, JWT cumple el rol de **mecanismo de autenticación y autorización sin estado (stateless authentication)**.

Su propósito es:

* Validar identidad de usuarios en el sistema.
* Autorizar acceso a rutas protegidas.
* Evitar sesiones tradicionales en servidor.
* Mantener escalabilidad en arquitectura distribuida.
* Reducir dependencia de almacenamiento de sesiones en backend.

Desde ingeniería de software, JWT permite diseñar sistemas escalables donde el backend no necesita mantener estado de sesión.

---

# 3. Problema que resuelve

Antes de JWT, la autenticación basada en sesiones presentaba limitaciones:

* Dependencia de almacenamiento en servidor.
* Problemas de escalabilidad horizontal.
* Complejidad en sistemas distribuidos.
* Sincronización de sesiones entre múltiples instancias.
* Mayor carga en backend por gestión de estado.

JWT resuelve estos problemas permitiendo:

* Autenticación sin estado (stateless).
* Validación independiente en cada request.
* Escalabilidad horizontal simple.
* Reducción de carga en servidor.
* Integración sencilla con APIs REST.

En el sistema de gasolinera, esto permite que múltiples módulos (ventas, inventario, usuarios) validen acceso sin consultar continuamente una base de sesiones.

---

# 4. Cómo funciona internamente (conceptual)

JWT funciona mediante firma criptográfica.

## Estructura del token

```
HEADER.PAYLOAD.SIGNATURE
```

### Header

Contiene tipo de token y algoritmo de firma (ej: HS256).

### Payload

Contiene los datos del usuario (claims), como:

* userId
* rol
* permisos
* expiración (exp)

### Signature

Se genera combinando:

* Header codificado
* Payload codificado
* Clave secreta (secret key)

Esto garantiza integridad del token.

---

## Flujo de autenticación

1. Usuario inicia sesión.
2. Backend valida credenciales.
3. Se genera JWT.
4. El token se envía al cliente.
5. El cliente almacena el token.
6. En cada request, el token se envía en headers.
7. El backend valida la firma.
8. Si es válido, se permite acceso.

---

## Característica clave

JWT no se almacena en el servidor.
El servidor solo verifica la firma.

---

# 5. Casos de uso reales

En el sistema de gasolinera, JWT se utiliza para:

* Login de usuarios del sistema.
* Acceso a módulos protegidos (ventas, inventario).
* Control de roles (admin, operador, supervisor).
* Validación de sesiones en API REST.
* Protección de rutas en backend y frontend.

### Ejemplo práctico

Un operador de estación de servicio inicia sesión y recibe un token JWT. Cada vez que registra una venta, ese token valida su identidad sin necesidad de volver a iniciar sesión.

---

# 6. Dónde se usa en el stack

JWT se utiliza en múltiples capas del sistema:

* **Node.js / Express**: generación y validación del token.
* **MongoDB / Mongoose**: almacenamiento de usuarios.
* **React**: almacenamiento del token en cliente.
* **Axios**: envío del token en headers.
* **React Router**: protección de rutas privadas.
* **Middleware backend**: verificación de autenticación.

JWT conecta frontend y backend en términos de seguridad.

---

# 7. Implementación básica

## Instalación

```bash id="jwt-install-01"
npm install jsonwebtoken
```

---

## Generar token

```javascript id="jwt-sign-01"
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: user._id,
    role: user.role
  },
  "SECRET_KEY",
  { expiresIn: "1h" }
);

console.log(token);
```

---

## Verificar token

```javascript id="jwt-verify-01"
const jwt = require("jsonwebtoken");

function verificarToken(token) {
  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    return decoded;
  } catch (error) {
    console.error("Token inválido");
    return null;
  }
}
```

---

## Middleware de autenticación (Express)

```javascript id="jwt-middleware-01"
const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("Acceso denegado");
  }

  try {
    const verified = jwt.verify(token, "SECRET_KEY");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Token inválido");
  }
}
```

---

## Uso en rutas protegidas

```javascript id="jwt-route-01"
app.get("/api/ventas", authMiddleware, (req, res) => {
  res.send("Acceso autorizado a ventas");
});
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, JWT debe manejarse con criterios de seguridad estrictos:

* Usar claves secretas seguras y externas (`.env`).
* Definir expiración corta de tokens.
* No almacenar datos sensibles en payload.
* Usar HTTPS en producción.
* Implementar middleware centralizado.
* Validar token en cada request protegida.
* Separar lógica de autenticación del negocio.
* Usar roles y permisos dentro del payload.
* Renovar tokens mediante refresh tokens si es necesario.

### Aplicado al sistema de gasolinera

El acceso a ventas e inventario debe estar estrictamente protegido para evitar operaciones no autorizadas en el sistema.

---

# 9. Errores comunes

Los errores más frecuentes con JWT son de seguridad y arquitectura:

* Usar secretos débiles o hardcodeados.
* No definir expiración de tokens.
* Almacenar datos sensibles en el payload.
* No validar token en backend.
* Confiar solo en frontend para seguridad.
* No manejar expiración correctamente.
* No usar middleware centralizado.
* Exponer tokens en logs o URLs.

### En el sistema de gasolinera

Un fallo en JWT puede permitir acceso no autorizado a módulos críticos como ventas o administración.

---

# 10. Relación con otras tecnologías del stack

JWT se integra con todo el sistema:

* **Node.js / Express**: generación y verificación.
* **MongoDB / Mongoose**: almacenamiento de usuarios.
* **React**: almacenamiento del token en cliente.
* **Axios**: envío automático en headers.
* **React Router**: protección de rutas privadas.
* **JavaScript**: implementación de lógica.
* **Vite**: entorno del frontend.

JWT es el núcleo de seguridad del sistema de gasolinera.

---

# 11. Resumen técnico

JWT es el sistema de autenticación basado en tokens del sistema de gasolinera. Permite validar usuarios de forma stateless, segura y escalable, protegiendo el acceso a módulos críticos del sistema.

En este proyecto, JWT garantiza que solo usuarios autorizados puedan acceder a funcionalidades como ventas, inventario y administración, manteniendo integridad y seguridad en toda la arquitectura.
