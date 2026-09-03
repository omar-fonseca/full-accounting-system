# Inventario documental completo

**Fecha de revisión:** 2026-09-03  
**Cantidad:** 43 archivos Markdown bajo `docs/` después de esta ampliación.

## Criterio de organización

Los documentos numerados `01` a `10` forman la serie principal existente. La biblioteca `05-learning-notes/` mantiene su numeración propia por tecnología. Los documentos `auth.md`, `auth-commit-notes.md`, `dashboard.md` y `roles-and-permissions.md` conservan sus nombres porque ya pueden estar enlazados; no se renombraron. Esta excepción queda registrada en vez de romper referencias.

## Inventario

| Nº lógico | Archivo | Tema | Estado | Acción |
|---:|---|---|---|---|
| 01 | `01-project-overview.md` | Visión y alcance | Histórico con partes actuales | Conservar; contrastar con auditoría |
| 02 | `02-development-roadmap.md` | Hoja de ruta | Actualizado | Mantener actualización de estado |
| 03 | `03-engineering-journal.md` | Bitácora | Histórico | Conservar como historia |
| 04 | `04-bug-history.md` | Incidentes | Histórico | Conservar; no reescribir soluciones pasadas |
| 05 | `05-learning-notes.md` | Índice de escuela | Actual | Enlazar nuevas lecciones |
| 05.01 | `05-learning-notes/01-javascript.md` | JavaScript | Educativo general | Conservar; ampliar cuando cambie código |
| 05.02 | `05-learning-notes/02-nodejs.md` | Node.js | Educativo general | Conservar |
| 05.03 | `05-learning-notes/03-express.md` | Express | Educativo general | Conservar |
| 05.04 | `05-learning-notes/04-react.md` | React | Educativo general | Conservar |
| 05.05 | `05-learning-notes/05-react-router.md` | Router | Educativo general | Conservar |
| 05.06 | `05-learning-notes/06-react-hooks.md` | Hooks | Educativo general | Conservar |
| 05.07 | `05-learning-notes/07-vite.md` | Vite | Educativo general | Conservar |
| 05.08 | `05-learning-notes/08-axios.md` | Axios | Educativo general | Conservar |
| 05.09 | `05-learning-notes/09-mongodb.md` | MongoDB | Educativo general | Contrastar con modelo actual |
| 05.10 | `05-learning-notes/10-mongoose.md` | Mongoose | Educativo general | Contrastar con modelo actual |
| 05.11 | `05-learning-notes/11-jwt.md` | JWT | Educativo general | Contrastar con auth actual |
| 05.12 | `05-learning-notes/12-dotenv.md` | Configuración | Educativo general | Conservar |
| 05.13 | `05-learning-notes/13-cors.md` | CORS | Educativo general | Conservar |
| 05.14 | `05-learning-notes/14-git.md` | Git | Educativo general | Contrastar con ramas actuales |
| 05.15 | `05-learning-notes/15-eslint.md` | ESLint | Educativo general | Actualizar con errores actuales |
| 05.16 | `05-learning-notes/16-architecture.md` | Arquitectura | Educativo y actualizado | Conservar ampliación AS-IS |
| 05.17 | `05-learning-notes/17-debugging.md` | Depuración | Educativo general | Conservar |
| 05.18.01 | `05-learning-notes/18-auth/01-introduccion.md` | Introducción auth | Educativo histórico | Conservar |
| 05.18.02 | `05-learning-notes/18-auth/02-flujo-auth.md` | Flujo auth | Educativo histórico | Conservar; enlazar auditoría |
| 05.18.03 | `05-learning-notes/18-auth/03-errores-y-soluciones.md` | Errores auth | Histórico | Conservar |
| 06 | `06-current-architecture.md` | Arquitectura AS-IS | Histórico actualizado | Conservar y referenciar auditoría |
| 07 | `07-target-architecture.md` | Arquitectura TO-BE | Objetivo | Conservar como futuro |
| 08 | `08-decision-log.md` | Decisiones | Vacío | Pendiente de registrar ADRs |
| 09 | `09-landing-home.md` | Landing | Histórico técnico | Conservar |
| 10 | `10-project-audit.md` | Auditoría maestra | Actual | Documento central |
| 11 | `11-documentation-inventory.md` | Inventario documental | Actual | Índice y mapa de lectura |
| -- | `auth.md` | Autenticación | Actualizado | Conservar nombre para no romper enlaces |
| -- | `auth-commit-notes.md` | Notas de commits auth | Histórico breve | Conservar como registro |
| -- | `dashboard.md` | Dashboard | Actual | Conservar nombre; plan de siguiente fase |
| -- | `roles-and-permissions.md` | Roles | Actual | Conservar nombre; matriz actual |
| 12 | `12-testing.md` | Pruebas | Nuevo | Referencia verificable |
| 13 | `13-backend.md` | Backend | Nuevo | Guía técnica |
| 14 | `14-frontend.md` | Frontend | Nuevo | Guía técnica |
| 15 | `15-database.md` | Persistencia | Nuevo | Guía técnica |
| 16 | `16-api.md` | Contrato observado | Nuevo | Inventario de endpoints |
| 17 | `17-dependencies.md` | Dependencias | Nuevo | Versiones y uso |
| 18 | `18-git-workflow.md` | Git/GitHub | Nuevo | Estado y flujo recomendado |
| 19 | `19-security.md` | Seguridad | Nuevo | Riesgos y futuro |

## Mapa de documentación

`01` presenta el problema; `06` explica el AS-IS; `07` explica el TO-BE; `10` consolida la auditoría; `11` explica cómo leer el conjunto. `auth.md` y `roles-and-permissions.md` describen seguridad funcional; `15`, `13`, `14` y `16` explican las capas; `12`, `17`, `18` y `19` cubren calidad, dependencias, evolución y seguridad. `05-learning-notes/` explica los conceptos con finalidad educativa. `02`, `03`, `04` y `09` conservan planificación e historia.

## Documentos que no necesitaron cambio

Los 20 archivos de aprendizaje numerados que no fueron modificados se mantienen porque su función es explicar conceptos generales y no declarar el estado exacto de una funcionalidad. La auditoría y los documentos técnicos nuevos son la fuente de verdad para el estado actual. `03-engineering-journal.md`, `04-bug-history.md`, `07-target-architecture.md`, `09-landing-home.md` y `auth-commit-notes.md` se conservan como historia o diseño objetivo.
