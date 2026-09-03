# Testing y evidencia de calidad

## Propósito

Separar lo que está escrito como prueba de lo que fue ejecutado y de lo que realmente cubre el sistema.

## Stack y pruebas existentes

El backend usa Jest como runner y Supertest para realizar solicitudes HTTP contra la instancia Express. `backend/tests/auth.test.js` contiene dos casos: login con payload inválido, que espera `400`, y `/auth/me` sin token, que espera `401`.

## Resultado observado

Ejecutado desde `backend/` con `npm test`: **1 suite, 2 tests, 2 pasan**. El entorno de prueba evita la conexión a MongoDB porque `app.js` detecta `NODE_ENV=test`.

El frontend no tiene suite automatizada declarada en su `package.json`. `npm run build` pasa, pero `npm run lint` falla con 4 errores y muestra 2 advertencias.

## Qué no está probado

No hay evidencia automatizada de registro real, login contra MongoDB, hashing, refresh rotation, logout persistente, autorización positiva/negativa por cada rol, CRUD de usuarios completo, navegación de navegador ni flujo end-to-end frontend → backend → base de datos.

## Aprendizaje

Una prueba verde demuestra el comportamiento de ese caso, no la funcionalidad completa del producto. La cobertura debe crecer junto con el riesgo: primero contratos HTTP y servicios de auth, después invariantes de inventario/ventas y finalmente flujos end-to-end.

## Próximos pasos recomendados

Añadir pruebas de servicio y API para estados, duplicados, tokens, roles y CRUD; incorporar una base de datos de prueba aislada; medir cobertura; y definir pruebas de integración antes de conectar métricas reales al dashboard.
