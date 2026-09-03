# Frontend: guía técnica AS-IS

## Propósito

El frontend presenta la landing, captura credenciales, mantiene el estado de sesión y controla la navegación visible. No debe ser la autoridad final de permisos.

## Flujo real

`main.jsx` monta React; `App.jsx` registra providers y rutas; `LoginRegisterPage` llama a `AuthContext`; el contexto usa `apiClient`/Axios; `ProtectedRoute` consulta token, usuario y rol; el backend decide definitivamente en cada endpoint.

Al recargar, `AuthContext` obtiene el access token de `localStorage` y llama `/auth/me`. Si falla, limpia el token. Axios envía cookies y tiene fallback entre URLs, pero no implementa refresh automático ante 401.

## Organización

`features` agrupa auth, home y dashboard. `components` contiene layout, UI y menú de usuario. `contexts` centraliza auth, `hooks` contiene tema, `services` contiene API y `styles` separa estilos globales/páginas.

## Estado y límites

Landing y auth están conectadas a API; dashboard existe como vista visual con datos estáticos. No hay features de inventario, combustible, ventas, turnos ni contabilidad. El build pasa y lint requiere trabajo.
