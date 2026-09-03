# Auth milestone notes

## Estado actual
- El flujo de autenticación básico ya está funcional y validado.
- Se añadió un entorno de pruebas mínimo para cubrir casos de login inválido y acceso a ruta protegida sin token.
- La aplicación backend ya puede arrancar en modo test sin intentar conectar a MongoDB.

## Variables de entorno recomendadas
- PORT=5000
- NODE_ENV=development
- MONGODB_URI=...
- FRONTEND_URL=http://localhost:5173
- JWT_SECRET=...
- JWT_EXPIRES_IN=1h
- JWT_REFRESH_EXPIRES_IN=7d

## Verificación
- Ejecutar: npm test
- Ejecutar: npm start
