# Diagnóstico profesional del estado actual

**Fecha de corte:** 2026-09-03  
**Rama observada:** `feature/auth-profesional`  
**Alcance:** auditoría y documentación; no se modificó código.

## A. Resumen ejecutivo

El repositorio contiene dos aplicaciones independientes: un frontend React/Vite y un backend Node.js/Express. Lo implementado se concentra en autenticación de usuarios, consulta y CRUD puntual de usuarios, landing pública y una vista preliminar de dashboard.

La descripción profesional correcta es: **aplicación web full stack con frontend organizado por features y backend modular por capas, persistencia MongoDB mediante Mongoose y autenticación JWT**. No es Clean Architecture completa ni DDD formal: hay separación de responsabilidades e influencias conceptuales, pero no existen todavía dominio aislado, casos de uso, repositorios ni módulos de negocio completos.

## B. Evidencia verificable

- Backend: `npm test`, ejecutado desde `backend/`: 1 suite y 2 pruebas pasan.
- Frontend: `npm run build`, ejecutado desde `frontend/`: compilación exitosa; Vite advierte un chunk superior a 500 kB.
- Frontend: `npm run lint`: 4 errores y 2 advertencias.
- No se ejecutó una prueba end-to-end contra MongoDB Atlas ni una prueba manual de navegador.

Por tanto, “el código existe”, “compila” y “las pruebas básicas pasan” son afirmaciones respaldadas; “todo el flujo funciona end-to-end” no está demostrado por esta auditoría.

## C. Inventario real

### Backend

| Ubicación | Responsabilidad y estado |
|---|---|
| `src/app.js` | Express, CORS, JSON, cookies, rutas, errores y arranque con fallback de puerto. Implementado. |
| `config/env.js` | Carga `.env` mediante dotenv. Implementado. |
| `config/database.js` | Conecta Mongoose a `MONGODB_URI`; si falta, advierte y continúa. Implementado. |
| `config/jwt.js` | Genera y verifica access/refresh JWT. Implementado. |
| `src/routes/authUsuarios.js` | Rutas de auth y CRUD de usuario con validación/autorización. Implementado para este alcance. |
| `src/controllers/` | Traduce HTTP a servicio o modelo y construye respuestas. La auth usa servicio; usuario accede al modelo mediante helper local. |
| `src/services/authService.js` | Registro, login, logout, refresh y `getMe`. Implementado. |
| `src/models/usuario.js` | Esquema, validaciones, roles/estados, hashing y serialización pública. Implementado. |
| `src/middlewares/` | Autenticación JWT, autorización por roles y errores. Implementado. |
| `src/validators/authValidator.js` | Validación de registro y login. Implementado. |
| `src/utils/response.js` | Respuestas `{ success, message, data }`. Implementado. |
| `tests/auth.test.js` | Solo payload de login inválido y `/auth/me` sin token. Parcial. |

No hay modelos ni endpoints de inventario, combustible, productos, ventas, empleados, turnos, cierres, contabilidad, reportes o auditoría. Tampoco hay una implementación de dominio/repositorios en `backend/src`.

### Frontend

- `main.jsx` monta React en `StrictMode`.
- `App.jsx` registra `AuthProvider`, `BrowserRouter`, lazy loading, ruta pública y ruta protegida.
- `features/home/` contiene la landing y sus secciones.
- `features/auth/LoginRegisterPage.jsx` contiene login/registro y navegación por rol.
- `features/dashboard/AdminDashboardPage.jsx` contiene una sola pantalla administrativa visual.
- `contexts/AuthContext.jsx` mantiene usuario, token, carga, login, registro y logout.
- `components/ProtectedRoute.jsx` exige token y roles permitidos.
- `services/apiClient.js` configura Axios, `withCredentials` y fallback de URLs/puertos.
- `hooks/useTheme.jsx` y `components/ui/` aportan infraestructura visual reutilizable.

## D. Flujo técnico real

### Login

`LoginRegisterPage` → `AuthContext.login` → Axios `POST /auth/login` → ruta → validator → `authController` → `authService.login` → `Usuario.findOne` + `bcrypt.compare` → access/refresh JWT → cookie de refresh y respuesta → `localStorage` y estado del contexto → `/admindashboard` para `ADMIN`/`PROPIETARIO`, `/` para los demás.

### Petición protegida

El frontend envía `Authorization: Bearer <accessToken>` → `authenticate` verifica JWT y busca el usuario en MongoDB → rechaza cuentas eliminadas/suspendidas → asigna `req.user` → controlador/servicio responde.

### Sesión

`AuthContext` consulta `/auth/me` al iniciar si encuentra el access token en `localStorage`. Si falla, elimina el token local. El refresh token se guarda en cookie HttpOnly durante login, pero no se observó renovación automática ante un 401.

## E. Arquitectura real

Sí existe separación frontend/backend, API REST, backend por capas, frontend por features y componentes compartidos, y separación conceptual entre autenticación y autorización.

No debe afirmarse que exista Clean Architecture completa: no hay casos de uso independientes del framework, puertos/adaptadores ni dominio aislado. Tampoco hay DDD formal: no se observan bounded contexts, agregados o entidades de dominio. “DDD-Lite” es una referencia histórica/conceptual, no una arquitectura demostrada por el código actual.

La frase adecuada para entrevista es: “Construí una aplicación full stack con backend modular por capas y frontend organizado por features. Apliqué validación, middleware, separación de responsabilidades y JWT; Clean Architecture y DDD son líneas de evolución, no implementaciones formales del estado actual”.

## F. Roles y permisos

Los cinco roles están definidos en el modelo. `ADMIN` y `PROPIETARIO` acceden al dashboard. En backend, ambos pueden consultar y actualizar usuarios; solo `ADMIN` puede eliminarlos. `OPERARIO`, `CONTADOR` y `CLIENTE` están declarados, pero no tienen rutas de negocio específicas. La matriz completa está en [roles-and-permissions.md](roles-and-permissions.md).

## G. Base de datos

Se usa MongoDB mediante Mongoose 8, con Atlas cuando `MONGODB_URI` apunta a ese servicio. El único modelo implementado es `Usuario`; incluye nombre, email único, password, role, estado, verificación de email, último login, refresh token y timestamps. Hay validaciones de esquema, pero no se observaron índices adicionales, referencias o documentos embebidos.

MongoDB es razonable como decisión inicial por flexibilidad documental y velocidad de iteración con Node/Mongoose. El compromiso futuro será diseñar índices, transacciones, consistencia de stock/ventas y límites de agregados antes de escalar.

## H. Dependencias

Backend: Express (HTTP), Mongoose (ODM), bcrypt (hash), jsonwebtoken (tokens), express-validator (entrada), cors, cookie-parser, dotenv, Jest y Supertest.

Frontend: React/React DOM, Vite, React Router, Axios, Material UI/Emotion, Recharts, Framer Motion, icon libraries, react-modal, PropTypes y ESLint. La presencia en `package.json` no demuestra uso amplio de cada dependencia; queda pendiente una revisión de uso y bundle.

## I. Estado del producto

| Área | Estado |
|---|---|
| Landing pública | Implementado visualmente |
| Login/registro | Implementado y conectado a API |
| Dashboard shell | Parcial: vista protegida con datos estáticos |
| Usuarios | Parcial: modelo y CRUD limitado |
| Roles/permisos | Parcial: enum y guardas puntuales |
| Empleados | Pendiente |
| Inventarios | Pendiente |
| Combustibles | Pendiente |
| Productos | Pendiente |
| Ventas | Pendiente |
| Turnos y cierres | Pendiente |
| Contabilidad | Pendiente |
| Reportes | Pendiente; solo existe visualización de ejemplo |
| Configuración/perfil | Pendiente como módulo |
| Auditoría | Pendiente |

El dashboard no representa métricas reales: sus tarjetas, gráficas y actividades son constantes locales y no provienen de la API. El detalle está en [dashboard.md](dashboard.md).

## J. Hallazgos sin modificación

### DEFECTO VERIFICADO

- `npm run lint` falla con cuatro errores de props/variables no usadas y dos advertencias.
- El dashboard usa datos estáticos.
- README y documentos históricos describen algunas carpetas o estados que ya no coinciden con el árbol actual.

### OBSERVACIÓN

- El registro público permite enviar un `role`; el servicio usa `CLIENTE` solo si el campo falta. La política de privilegios queda pendiente.
- El access token se almacena en `localStorage`; el refresh token se almacena en cookie.
- Si falta `MONGODB_URI`, el backend puede continuar sin conexión, lo que no demuestra persistencia disponible.

### MEJORA RECOMENDADA

- Ampliar pruebas de auth, autorización, refresh, cookies, estados y CRUD.
- Definir contratos de API y permisos antes de construir módulos.
- Conectar el dashboard a endpoints verificables.

### DEUDA TÉCNICA

- Completar separación servicio/repositorio y módulos de negocio.
- Resolver lint y revisar tamaño del bundle.
- Añadir rate limiting, observabilidad y controles de producción.

## K. Git

La rama observada es `feature/auth-profesional`, alineada con `origin/feature/auth-profesional`. El remoto es `https://github.com/omar-fonseca/full-accounting-system.git`. El último commit es `d84388f`, sobre rol por defecto y acceso al dashboard. Existen ramas `main`, `feature/landing-home` y ramas auxiliares `agents/...`; `main` apunta a `origin/main`. El estado de trabajo no mostró archivos modificados al inspeccionar Git. No se hicieron operaciones de historia.

## L. Nombres y branding

El nombre técnico y documental predominante es **Full Accounting System**. El nombre visible en el frontend actual es **KORE Station**, presente en landing, login, footer y dashboard. `Core Station` no aparece como marca vigente en el código observado; si existe en material anterior debe conservarse como contexto histórico. Hay una diferencia entre nombre del repositorio/producto técnico y marca visible. No se cambiaron nombres.

## M. Inventario y combustibles: alcance futuro

No existen actualmente entidades, modelos ni endpoints para inventario o combustibles. Conceptualmente, inventario deberá representar productos, cantidades, unidades, mínimos y movimientos; sus operaciones CRUD deberán autorizarse en backend y relacionarse con ventas y reportes. Combustibles requerirá definir tipos reales, precio, volumen, tanques, lecturas, movimientos y relación con ventas. La asignación de qué rol crea, edita, elimina o consulta es recomendada y pendiente, no una capacidad actual.

## N. Siguiente fase

Construir el dashboard profesional por incrementos: contratos y permisos, usuarios/empleados, productos e inventario, combustibles, ventas, turnos/cierres, contabilidad, reportes, configuración y auditoría. Cada incremento debe incluir modelo, API, autorización, interfaz, pruebas y documentación.
