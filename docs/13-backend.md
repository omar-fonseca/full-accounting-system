# Backend: guía técnica AS-IS

## Propósito y problema

El backend expone una API HTTP que centraliza autenticación, autorización, validación y persistencia. Evita que el navegador sea la autoridad de seguridad y concentra las reglas que deben protegerse.

## Flujo y capas

`app.js` configura Express y registra `/auth`. La ruta decide endpoint y middleware; el controlador traduce HTTP; `authService` ejecuta la lógica de autenticación; Mongoose persiste `Usuario`; el middleware de errores normaliza fallos.

La separación es real en auth. En `usuarioController.js` todavía hay acceso directo al modelo, por lo que la separación servicio/repositorio no está completa.

## Tecnologías

Node.js ejecuta JavaScript en servidor. Express resuelve routing y middleware. `express-validator` filtra entrada. Mongoose modela documentos. `bcrypt` protege passwords. `jsonwebtoken` firma identidad. `cookie-parser`, CORS y dotenv conectan transporte, navegador y configuración.

## Estado y limitaciones

Implementados: app, auth, usuario, errores y configuración. Pendientes: módulos de negocio, repositorios, DTOs explícitos, contratos versionados, observabilidad y cobertura amplia.

## Entrevista

“El backend usa una API REST Express y una separación route-controller-service-model especialmente visible en autenticación. La separación reduce acoplamiento, aunque todavía identifico como evolución pendiente aislar persistencia y casos de uso de todos los módulos.”
