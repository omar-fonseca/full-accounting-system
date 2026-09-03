# API observada

## Convenciones

La API usa JSON y respuestas exitosas con `{ success, message, data }`. El access token viaja como `Authorization: Bearer ...`; el refresh token se gestiona principalmente mediante cookie.

## Endpoints actuales

| Método | Ruta | Protección | Propósito |
|---|---|---|---|
| POST | `/auth/register` | Pública + validación | Crear usuario |
| POST | `/auth/login` | Pública + validación | Autenticar usuario |
| POST | `/auth/logout` | JWT | Invalidar refresh persistido |
| POST | `/auth/refresh` | Refresh token | Emitir tokens renovados |
| GET | `/auth/me` | JWT | Obtener usuario actual |
| GET | `/auth/usuario/:id` | JWT + ADMIN/PROPIETARIO | Consultar usuario |
| PUT | `/auth/usuario/:id` | JWT + ADMIN/PROPIETARIO | Actualizar usuario |
| DELETE | `/auth/usuario/:id` | JWT + ADMIN | Eliminar usuario |

No existen endpoints de negocio para dashboard, inventario, combustibles, ventas, turnos o contabilidad.

## Errores y límites

Se manejan validación, JSON inválido, Mongoose, JWT y errores operacionales. No hay contrato OpenAPI, versionado de API ni documentación generada. Los códigos observados deben respaldarse con pruebas adicionales antes de tratarlos como contrato estable.
