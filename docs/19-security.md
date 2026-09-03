# Seguridad: estado y superficie de riesgo

## Implementado

Passwords con bcrypt, JWT firmado, validación de entrada, cookies HttpOnly para refresh en login, CORS con origen configurado, middleware de autenticación, bloqueo de cuentas suspendidas/eliminadas y autorización puntual por roles.

## Flujo de confianza

El backend es la autoridad: verifica firma, busca el usuario y comprueba su estado. El frontend solo controla navegación y experiencia; `ProtectedRoute` no reemplaza `authenticate` ni `authorize`.

## Observaciones

- El access token se guarda en `localStorage`, decisión que aumenta impacto potencial de XSS.
- El registro acepta un rol enviado por el cliente; la política para roles privilegiados requiere definición.
- No se observan rate limiting, auditoría, rotación automática ante 401 ni monitoreo.
- La configuración real depende de secretos y URLs de entorno; no deben versionarse.

## Clasificación

Lo anterior son observaciones verificadas del código, no correcciones aplicadas. Son recomendaciones futuras: política de asignación de roles, defensa contra abuso, rotación de refresh, gestión de secretos, logging seguro, pruebas de autorización y revisión de dependencias.

## Entrevista

“La seguridad no se delega al frontend. El cliente mejora la navegación, pero cada operación sensible pasa por JWT y autorización en backend; la sesión combina access token y refresh token persistido, con mejoras de producción todavía identificadas.”
