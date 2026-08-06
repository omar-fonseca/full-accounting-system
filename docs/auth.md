# Autenticación del proyecto Full Accounting System

# 1. Propósito del documento

Este documento recoge de forma técnica, ordenada y profesional todo lo que se ha aprendido, implementado y validado alrededor del módulo de autenticación del proyecto Full Accounting System.

Su objetivo es servir como:

- referencia técnica del sistema de autenticación,
- material de aprendizaje para el desarrollador,
- base de documentación para GitHub,
- registro del estado actual del módulo y de los problemas encontrados.

No pretende reemplazar el código fuente ni el historial de Git, sino complementar ambos con contexto, decisiones técnicas y razonamiento de ingeniería.

---

# 2. Visión general del módulo de autenticación

La autenticación del proyecto se diseñó como una capa fundamental para proteger el acceso a recursos del sistema y garantizar que solo usuarios autorizados puedan interactuar con funcionalidades sensibles.

El módulo incluye:

- registro de usuarios,
- inicio de sesión,
- cierre de sesión,
- renovación de tokens,
- recuperación del usuario autenticado,
- protección de rutas con autenticación y roles,
- validación de entrada,
- manejo centralizado de errores.

El diseño actual busca un equilibrio entre:

- funcionalidad,
- seguridad básica,
- claridad de arquitectura,
- mantenibilidad,
- y aprendizaje progresivo.

---

# 3. Objetivos del módulo

El módulo de autenticación busca cumplir con los siguientes objetivos:

1. Identificar y autenticar usuarios mediante credenciales válidas.
2. Emitir tokens de acceso para autorizar peticiones posteriores.
3. Mantener un mecanismo de refresh token para renovar sesiones.
4. Proteger rutas del backend según rol y estado del usuario.
5. Separar la lógica de negocio del manejo HTTP.
6. Crear una base sólida para futuras mejoras de seguridad.

---

# 4. Arquitectura del módulo

El módulo de autenticación se organizó en capas para mantener el código más claro y profesional.

## 4.1 Capas del diseño

### Capa de rutas
Ubicada en:
- backend/src/routes/authUsuarios.js

Responsable de definir los endpoints expuestos por la API.

### Capa de controladores
Ubicada en:
- backend/src/controllers/authController.js

Responsable de recibir solicitudes HTTP, delegar la lógica y devolver respuestas estructuradas.

### Capa de servicios
Ubicada en:
- backend/src/services/authService.js

Responsable de la lógica de negocio del módulo: registro, login, logout, refresh y obtención del usuario actual.

### Capa de middlewares
Ubicada en:
- backend/src/middlewares/authMiddleware.js

Responsable de verificar autenticación y autorización por roles.

### Capa de modelos
Ubicada en:
- backend/src/models/usuario.js

Responsable de definir el esquema del usuario, sus validaciones y sus métodos de negocio.

### Capa de utilidades
Ubicada en:
- backend/src/utils/response.js

Responsable de estandarizar respuestas HTTP del sistema.

### Capa de validación
Ubicada en:
- backend/src/validators/authValidator.js

Responsable de validar entradas del usuario antes de procesarlas.

---

# 5. Flujo de autenticación

## 5.1 Registro

Flujo:

1. El cliente envía nombre, email y contraseña.
2. El backend valida la información.
3. Se verifica que el email no exista previamente.
4. Se crea el usuario con estado inicial y rol asignado.
5. Se generan access token y refresh token.
6. El refresh token se almacena en el usuario.
7. Se responde al cliente con la información del usuario y los tokens.

## 5.2 Login

Flujo:

1. El cliente envía email y contraseña.
2. El backend valida el formato de entrada.
3. Se busca el usuario por email.
4. Se valida que el usuario no esté suspendido ni eliminado.
5. Se compara la contraseña usando bcrypt.
6. Si es correcta, se generan nuevos tokens.
7. Se actualiza el refresh token almacenado.
8. Se devuelve el access token y la información del usuario.

## 5.3 Logout

Flujo:

1. El cliente envía una petición autenticada.
2. El backend identifica al usuario por el token JWT.
3. Se limpia el refresh token del usuario.
4. Se responde con una sesión cerrada correctamente.

## 5.4 Refresh token

Flujo:

1. El cliente envía un refresh token.
2. El backend valida la firma y la estructura del token.
3. Se verifica que el refresh token coincida con el almacenado en la base de datos.
4. Si es válido, se emite un nuevo access token y un nuevo refresh token.
5. El usuario mantiene la sesión activa sin necesidad de volver a autenticarse completamente.

## 5.5 Obtener perfil autenticado

Flujo:

1. El cliente envía un access token en el header Authorization.
2. El middleware authenticate valida la identidad del usuario.
3. Se recupera el usuario desde la base de datos.
4. Se devuelve el perfil sin información sensible como password o refresh token.

---

# 6. Componentes técnicos implementados

## 6.1 Modelo de usuario

El modelo de usuario incluye:

- nombre,
- email,
- password,
- role,
- estado,
- isEmailVerified,
- lastLoginAt,
- refreshToken,
- timestamps.

Se implementó hashing de contraseñas antes de guardar el documento mediante bcrypt.

## 6.2 JWT

La autenticación utiliza JSON Web Tokens para:

- identificar al usuario,
- proteger rutas,
- autorizar acciones según rol,
- validar sesiones.

## 6.3 Middleware de autenticación

El middleware authenticate se encarga de:

- leer el token de la cabecera Authorization,
- verificarlo,
- recuperar al usuario,
- validar que el usuario siga activo,
- adjuntar el usuario al request para las capas posteriores.

## 6.4 Middleware de autorización

El middleware authorize restringe el acceso según roles permitidos como:

- ADMIN,
- PROPIETARIO,
- OPERARIO,
- CONTADOR,
- CLIENTE.

## 6.5 Validaciones

Se agregaron validaciones para:

- nombre obligatorio,
- email válido,
- contraseña mínima de 8 caracteres,
- contraseña obligatoria en login,
- formato correcto de entrada.

## 6.6 Respuestas estándar

Se implementó una utilidad para estandarizar respuestas del backend con estructura consistente:

- success,
- message,
- data.

---

# 7. Seguridad aplicada hasta este punto

La implementación actual incorpora varias buenas prácticas básicas:

- hash de contraseñas con bcrypt,
- uso de JWT para autenticación,
- control de acceso por roles,
- protección de rutas,
- manejo centralizado de errores,
- validación de entrada,
- separación entre lógica y controladores,
- uso de cookies para refresh token.

Aunque todavía no se ha alcanzado un nivel de producción completo, esta base es suficientemente sólida para seguir evolucionando.

---

# 8. Problemas encontrados y cómo se resolvieron

## 8.1 Error de manejo de errores

Se detectó que ciertos errores operacionales estaban terminando en respuestas genéricas 500, lo que ocultaba la causa real.

### Solución

Se reforzó el middleware centralizado para preservar correctamente los errores del sistema y devolver respuestas más precisas.

## 8.2 Problemas de parsing JSON

En algunas pruebas se observó que las solicitudes con payload mal formateado generaban errores de parseo y devolvían respuestas ambiguas.

### Solución

Se ajustó el manejo del flujo de requests y se documentó la importancia de enviar el cuerpo en formato JSON válido.

## 8.3 Problemas de refresh token

Se detectó que el endpoint de refresh no estaba manejando de forma robusta los tokens entrantes desde diferentes fuentes.

### Solución

Se hizo el controlador más tolerante para aceptar el refresh token desde:

- cuerpo,
- cookies,
- query,
- headers.

## 8.4 Dependencias faltantes

El proyecto mostró errores por dependencias incompletas, por ejemplo con express-validator y lucide-react.

### Solución

Se instalaron las dependencias necesarias y se verificó la compilación del frontend y el arranque del backend.

---

# 9. Validaciones realizadas

Durante el proceso de desarrollo se verificó lo siguiente:

- compilación del frontend con Vite,
- arranque del backend,
- respuesta del endpoint de login,
- correcta recepción de autenticación en rutas protegidas,
- estabilidad del flujo básico de auth.

---

# 10. Estado actual del módulo

El módulo de autenticación se encuentra en un estado funcional y mejorado, con una arquitectura más clara que la inicial.

Se puede considerar en una etapa de:

- funcionalidad básica operativa,
- mejor organización de código,
- mayor claridad de lógica,
- base sólida para futuras mejoras de seguridad y escalabilidad.

---

# 11. Qué falta para un nivel más profesional

Aunque el módulo ya está funcionando, todavía quedan mejoras importantes para acercarlo a un estándar verdaderamente profesional de producción:

1. mover la lógica de refresh token a un flujo más explícito y seguro,
2. usar cookies HttpOnly para refresh tokens,
3. implementar refresh rotation,
4. agregar pruebas automáticas de auth,
5. separar mejor los servicios de negocio y persistencia,
6. agregar logs y monitoreo,
7. implementar rate limiting,
8. preparar un entorno de producción con variables de entorno sólidas y separación de configuración.

---

# 12. Lecciones aprendidas

Este ejercicio de autenticación enseñó varias lecciones importantes:

- La autenticación no debe implementarse como una lógica rápida en controladores.
- La seguridad debe pensarse desde el inicio del proyecto.
- Un sistema de auth bien diseñado mejora toda la arquitectura.
- La documentación técnica es parte esencial del aprendizaje.
- Resolver problemas reales enseña más que escribir código perfecto desde el inicio.

---

# 13. Conclusión

El módulo de autenticación del proyecto Full Accounting System ha pasado de una implementación básica a una base más estructurada, clara y profesional.

Este avance no solo mejora la seguridad y la organización del proyecto, sino que también convierte la autenticación en un excelente ejemplo de aprendizaje para construir software con criterio de ingeniería.
