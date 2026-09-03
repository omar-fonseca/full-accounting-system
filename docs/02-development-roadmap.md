# 02 - Development Roadmap

# Hoja de Ruta de Desarrollo

# Introducción

El desarrollo de software profesional no consiste únicamente en escribir código. Un proyecto exitoso requiere una planificación clara, objetivos definidos y una evolución controlada.

Este documento describe la hoja de ruta (Roadmap) del proyecto **Full Accounting System**, estableciendo las diferentes fases de desarrollo, los objetivos de cada una, los resultados esperados y los criterios que determinan cuándo una etapa puede considerarse finalizada.

El propósito principal de este roadmap es servir como guía durante todo el ciclo de vida del proyecto, permitiendo mantener una visión clara del estado actual, reducir la incertidumbre y facilitar la toma de decisiones técnicas.


# ¿Qué es un Roadmap?

En Ingeniería de Software, un **Roadmap** es un documento de planificación que describe la evolución prevista de un proyecto.

No explica cómo está implementado el sistema ni contiene código fuente. Su función consiste en responder preguntas como:

- ¿Dónde estamos actualmente?
- ¿Qué etapas ya fueron completadas?
- ¿Qué problemas se resolvieron?
- ¿Qué funcionalidades faltan por implementar?
- ¿Cuál es el siguiente paso del proyecto?

En equipos profesionales, el Roadmap permite coordinar el trabajo entre desarrolladores, líderes técnicos y clientes, proporcionando una visión compartida del progreso del proyecto.


# Metodología de Trabajo

El desarrollo de este proyecto sigue una estrategia incremental.

En lugar de implementar todas las funcionalidades al mismo tiempo, el sistema evoluciona mediante pequeñas fases controladas.

Cada fase debe cumplir los siguientes principios:

- Resolver un problema específico.
- Mantener el sistema funcionando en todo momento.
- Validar cada cambio mediante pruebas.
- Documentar las decisiones tomadas.
- Consolidar el aprendizaje antes de avanzar.

Este enfoque reduce el riesgo de introducir errores y facilita el mantenimiento del proyecto.


# Estado General del Proyecto

Actualmente el proyecto se encuentra en una etapa de transición entre la estabilización técnica y la evolución funcional.

Hasta este punto ya se logró:

- Configuración inicial del entorno de desarrollo.
- Integración entre frontend y backend.
- Implementación de autenticación de usuarios.
- Conexión con MongoDB Atlas.
- Refactorización inicial del frontend.
- Organización de la documentación técnica.
- Uso de Git como sistema de control de versiones.

La siguiente etapa consiste en consolidar la arquitectura antes de incorporar nuevos módulos de negocio.


# Fase 0 — Recuperación y Estabilización del Proyecto

## Objetivo

Recuperar un proyecto que presentaba problemas de organización, configuración y funcionamiento, dejando una base estable para continuar el desarrollo.


## Problemas encontrados

Durante esta fase se identificaron diversos inconvenientes técnicos:

- Configuración incorrecta del archivo `.env`.
- Dependencias innecesarias versionadas en Git.
- Problemas de navegación entre Login y Register.
- Errores de ESLint.
- Imports innecesarios de React.
- Configuración incompleta del proyecto.
- Problemas de conexión con MongoDB Atlas.
- Conflictos con el puerto del servidor.


## Actividades realizadas

- Limpieza del repositorio.
- Configuración correcta del archivo `.gitignore`.
- Creación de archivos `.env.example`.
- Corrección de rutas del frontend.
- Corrección del flujo de autenticación.
- Recuperación de la conexión con MongoDB Atlas.
- Eliminación de errores de compilación.
- Validación mediante `npm run lint`.
- Validación mediante `npm run build`.


## Resultado

El proyecto volvió a un estado completamente funcional.

Actualmente:

- Backend operativo.
- Frontend compilando correctamente.
- MongoDB Atlas conectado.
- Git sincronizado.
- Arquitectura estable para continuar.


## Lecciones aprendidas

Durante esta fase se comprendió la importancia de:

- Configurar correctamente las variables de entorno.
- No subir dependencias al repositorio.
- Mantener el proyecto siempre compilando.
- Resolver primero la infraestructura antes de crear nuevas funcionalidades.


# Fase 1 — Consolidación de la Arquitectura

## Objetivo

Transformar la estructura del proyecto en una arquitectura más organizada, mantenible y preparada para crecer.


## Actividades previstas

- Reorganizar el frontend por responsabilidades.
- Separar páginas, componentes y servicios.
- Crear una estructura escalable.
- Documentar las decisiones de arquitectura.
- Eliminar duplicidades.
- Mantener un único origen para la configuración.


## Resultado esperado

Al finalizar esta fase el proyecto deberá:

- Tener una arquitectura clara.
- Facilitar el mantenimiento.
- Reducir el acoplamiento entre módulos.
- Permitir la incorporación de nuevas funcionalidades sin afectar las existentes.


# Fase 2 — Dashboard Administrativo

## Objetivo

Construir un panel administrativo funcional que centralice la información crítica de la estación de servicio.


## Funcionalidades previstas

- Indicadores principales (KPIs).
- Ventas del día.
- Inventario.
- Estado del combustible.
- Turnos activos.
- Alertas.
- Accesos rápidos.


## Resultado esperado

Disponer de una interfaz que permita visualizar el estado general del negocio desde un único lugar.


# Fase 3 — Gestión de Inventario

## Objetivo

Implementar el control de productos comercializados por la estación de servicio.


## Funcionalidades previstas

- CRUD de productos.
- Clasificación por categorías.
- Control de existencias.
- Alertas por stock mínimo.
- Historial de movimientos.


## Resultado esperado

Gestionar de forma eficiente aceites, filtros, repuestos y demás productos disponibles.


# Fase 4 — Gestión de Personal y Turnos

## Objetivo

Administrar la información de los empleados y controlar la asignación de turnos.


## Funcionalidades previstas

- Registro de empleados.
- Roles.
- Permisos.
- Horarios.
- Historial de turnos.


## Resultado esperado

Facilitar el control operativo del personal de la estación de servicio.

# Fase 5 — Gestión de Combustible

## Objetivo

Controlar el inventario volumétrico del combustible.


## Funcionalidades previstas

- Registro de tanques.
- Entradas de combustible.
- Salidas.
- Existencias.
- Alertas por nivel mínimo.


## Resultado esperado

Mantener un control preciso del combustible disponible.


# Fase 6 — Reportes y Analítica

## Objetivo

Proporcionar información útil para la toma de decisiones.

## Funcionalidades previstas

- Reportes financieros.
- Reportes de ventas.
- Reportes de inventario.
- Exportación de información.
- Indicadores gráficos.


## Resultado esperado

Convertir los datos operativos en información estratégica.


# Criterios para considerar una fase finalizada

Cada fase solo podrá marcarse como completada cuando cumpla los siguientes criterios:

- Funcionalidad implementada.
- Código revisado.
- Sin errores críticos.
- Documentación actualizada.
- Validación mediante pruebas.
- Commit realizado en Git.
- Cambios sincronizados con GitHub.


# Filosofía de Desarrollo del Proyecto

Este proyecto sigue una filosofía basada en la mejora continua.

Cada avance debe dejar el sistema en un mejor estado que el anterior.

Las prioridades siempre serán:

1. Comprender el problema.
2. Diseñar una solución.
3. Implementar.
4. Validar.
5. Documentar.
6. Aprender.
7. Continuar.

De esta forma, el proyecto no solo busca construir una aplicación funcional, sino también desarrollar competencias profesionales en arquitectura de software, desarrollo full-stack, control de versiones y buenas prácticas de ingeniería.


# Estado Actual

**Fase 0:** ✅ Completada

**Fase 1:** 🔄 En progreso

**Fase 2:** ⏳ Pendiente

**Fase 3:** ⏳ Pendiente

**Fase 4:** ⏳ Pendiente

**Fase 5:** ⏳ Pendiente

**Fase 6:** ⏳ Pendiente

---

# Conclusiones

El Roadmap constituye la guía estratégica del proyecto.

Más que una lista de tareas, representa la planificación de la evolución del sistema y permite desarrollar cada funcionalidad sobre una base técnica estable, reduciendo riesgos y favoreciendo la calidad del software.

Cada fase completada representa un incremento funcional del sistema y un nuevo aprendizaje adquirido durante el proceso de desarrollo.

---

# Actualización de estado verificado (2026-09-03)

La auditoría actualiza la clasificación de las fases:

- **Estabilización técnica:** parcialmente respaldada por historial y verificaciones previas; el lint actual todavía reporta errores.
- **Autenticación:** implementada en el código y con pruebas básicas pasando; falta cobertura end-to-end y de producción.
- **Dashboard administrativo:** parcial; existe la pantalla protegida, pero sus datos son estáticos y no hay módulos operativos conectados.
- **Inventario, combustible, personal, turnos, ventas, contabilidad y reportes:** pendientes como funcionalidades de negocio.

El siguiente incremento recomendado es el dashboard profesional, comenzando por contratos de usuarios/empleados y permisos, seguido por inventario y movimientos. El detalle está en [dashboard.md](dashboard.md) y [10-project-audit.md](10-project-audit.md).