# Base de datos y persistencia

## Qué problema resuelve

MongoDB conserva el estado durable del sistema; Mongoose añade esquema, validaciones, hooks y métodos para que Node trabaje con documentos de manera consistente.

## Implementación actual

`config/database.js` lee `MONGODB_URI` y ejecuta `mongoose.connect`. El único modelo es `Usuario`. Su esquema tiene email único, roles y estados enumerados, timestamps, hashing previo a save y serialización que elimina password y refresh token.

No existen aún colecciones de inventario, combustibles, productos, ventas, empleados, turnos, cierres, contabilidad, reportes o auditoría. No se observaron índices adicionales, referencias ni documentos embebidos.

## Flujo de persistencia

Una petición llega a Express, pasa validación/middleware, el servicio consulta o crea un modelo Mongoose, Mongoose valida y ejecuta hooks, MongoDB persiste, y la respuesta serializa solo datos públicos.

## Decisión y trade-offs

MongoDB facilita iterar con documentos flexibles y encaja con Node/Mongoose. Frente a una relacional, exige diseñar con cuidado consistencia, relaciones, transacciones e índices cuando ventas, stock y contabilidad deban mantenerse sincronizados.

## Futuro

Definir límites de agregados, índices basados en consultas reales, estrategia transaccional, retención de auditoría y pruebas con una base aislada antes de escalar.
