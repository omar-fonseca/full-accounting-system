# Roles y permisos: estado actual

Un rol declarado no equivale a un sistema completo de permisos. Esta matriz refleja solo reglas conectadas al código.

| Rol | Existe | Backend | Frontend | Permisos verificables | Dashboard | Estado |
|---|---|---|---|---|---|---|
| ADMIN | Sí | Sí | Sí | Consultar/actualizar usuarios; eliminar usuarios | `/admindashboard` | Parcial |
| PROPIETARIO | Sí | Sí | Sí | Consultar/actualizar usuarios | `/admindashboard` | Parcial |
| OPERARIO | Sí | Definido, sin ruta específica | Definido en registro | Ninguno adicional verificable | No | Estructurado sin lógica |
| CONTADOR | Sí | Definido, sin ruta específica | Definido en registro | Ninguno adicional verificable | No | Estructurado sin lógica |
| CLIENTE | Sí | Valor por defecto del modelo | Definido en registro | Ninguno adicional verificable | No | Parcial como identidad |

## Reglas observadas

- `GET` y `PUT /auth/usuario/:id`: `ADMIN` o `PROPIETARIO`.
- `DELETE /auth/usuario/:id`: solo `ADMIN`.
- `/admindashboard`: `ADMIN` o `PROPIETARIO` desde `ProtectedRoute`.
- El resto de roles es redirigido a `/` si intenta esa ruta desde el frontend.
- El modelo restringe el valor a los cinco roles declarados.

No existe aún una matriz por módulo ni endpoints para inventario, combustible, ventas, turnos o contabilidad.

## Aprendizaje y futuro

Un enum es una taxonomía; RBAC requiere recursos, acciones, políticas ejecutadas en fronteras concretas y pruebas de cada combinación relevante. Antes de producción debe decidirse si el registro público puede elegir roles privilegiados. Esta es una recomendación, no un cambio aplicado.
