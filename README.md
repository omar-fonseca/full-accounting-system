# Full Accounting System | Gestión de Estaciones de Servicio

## 🚀 Visión del Proyecto

Full Accounting System es una plataforma integral para la gestión operativa y contable de estaciones de servicio. Su objetivo es centralizar el control de inventarios, la supervisión de turnos de personal, la administración de ventas y el análisis operativo en una solución escalable, segura y modular.

El proyecto está diseñado con enfoque en arquitectura limpia, separación de responsabilidades y evolución progresiva hacia un sistema robusto de nivel profesional.

---

## 🎯 Objetivo General

Construir un sistema web que permita administrar de forma eficiente las operaciones críticas de una estación de servicio, incluyendo autenticación, control de inventario, registro de ventas, gestión de turnos y análisis de información para la toma de decisiones.

---

## 🛠️ Stack Tecnológico

### Frontend

* React
* React Router
* React Hooks
* Vite
* Axios

### Backend

* Node.js
* Express
* JWT
* dotenv
* CORS

### Base de Datos

* MongoDB Atlas
* Mongoose

### Calidad y Control

* Git
* GitHub
* ESLint

---

## 🧭 Estado Actual del Proyecto

### Fase 0 — Estabilización y Diagnóstico

Estado: **Completada parcialmente**

* [x] Recuperación del proyecto desde GitHub.
* [x] Instalación y verificación de dependencias en frontend y backend.
* [x] Limpieza del repositorio.
* [x] Configuración correcta de `.gitignore`.
* [x] Corrección del flujo Login/Register mediante parámetros en la URL.
* [x] Corrección de rutas en React Router.
* [x] Corrección de errores de ESLint.
* [x] Verificación de compilación con `npm run build`.
* [x] Verificación de calidad del código con `npm run lint`.
* [x] Diagnóstico completo del backend.
* [x] Recuperación y validación de la conexión con MongoDB Atlas.
* [ ] Revisión completa de seguridad: JWT, variables de entorno y autenticación.
* [ ] Documentación de la arquitectura actual del sistema.
* [ ] Elaboración del mapa del proyecto (AS-IS).

### Fase 1 — Reestructuración de Arquitectura

Estado: **Pendiente**

* [ ] Diseño de la nueva arquitectura DDD-Lite.
* [ ] Reorganización del backend.
* [ ] Reorganización del frontend por funcionalidades.
* [ ] Middleware global de manejo de errores.
* [ ] Sistema de validaciones.
* [ ] Configuración profesional de variables de entorno.

### Fase 2 — Autenticación

Estado: **En progreso**

* [x] Login/Register.
* [ ] JWT profesional.
* [ ] Roles: Administrador, Propietario, Empleado.
* [ ] Protección de rutas.
* [ ] Auditoría de accesos.

### Fase 3 — Dashboard

Estado: **Pendiente**

* [ ] Dashboard administrativo.
* [ ] Indicadores (KPIs).
* [ ] Resumen de ventas.
* [ ] Alertas.
* [ ] Actividad reciente.

### Fase 4 — Inventario

Estado: **Pendiente**

* [ ] CRUD de aceites.
* [ ] CRUD de filtros.
* [ ] CRUD de repuestos.
* [ ] Kardex de movimientos.
* [ ] Alertas de inventario bajo.

### Fase 5 — Combustible

Estado: **Pendiente**

* [ ] Control de inventario volumétrico.
* [ ] Entradas de carrotanques.
* [ ] Registro de ventas por combustible.
* [ ] Descuento automático de inventario.
* [ ] Historial de movimientos.

### Fase 6 — Turnos

Estado: **Pendiente**

* [ ] Gestión de empleados.
* [ ] Inicio de turno.
* [ ] Finalización de turno.
* [ ] Cierre de caja.
* [ ] Historial de turnos.

### Fase 7 — Calidad del Proyecto

Estado: **Pendiente**

* [ ] Refactorización general.
* [ ] Optimización de rendimiento.
* [ ] Documentación técnica.

---

## 📚 Documentación del Proyecto

La documentación técnica detallada se encuentra en la carpeta `docs/` y está organizada de la siguiente forma:

* `docs/01-project-overview.md`
* `docs/02-development-roadmap.md`
* `docs/03-engineering-journal.md`
* `docs/04-bug-history.md`
* `docs/05-learning-notes/`

La carpeta `docs/05-learning-notes/` contiene la biblioteca de aprendizaje del proyecto, con notas técnicas sobre las tecnologías usadas, su funcionamiento interno, buenas prácticas y relación con el sistema real.

---

## 💡 Próximas Funcionalidades

* Análisis predictivo de demanda de combustible.
* Sistema de alertas automáticas para inventario bajo.
* Integración con facturación electrónica.
* Reportes financieros avanzados.
* Exportación de información a PDF y Excel.

---

## 📁 Estructura General del Repositorio

```text
full-accounting-system/
├── README.md
├── docs/
│   ├── 01-project-overview.md
│   ├── 02-development-roadmap.md
│   ├── 03-engineering-journal.md
│   ├── 04-bug-history.md
│   └── 05-learning-notes/
├── frontend/
└── backend/
```

---

## 🧠 Enfoque de Ingeniería

Este proyecto no solo busca funcionalidad. También busca consolidar una arquitectura mantenible, una base de conocimiento técnica y una evolución controlada del sistema.

El enfoque está puesto en:

* Arquitectura limpia.
* Modularidad.
* Seguridad.
* Escalabilidad.
* Calidad de código.
* Trazabilidad técnica.
* Aprendizaje continuo aplicado al proyecto.

---

## 📌 Estado General

**En desarrollo activo**
Orientado a buenas prácticas de ingeniería de software, documentación técnica y evolución modular del sistema.
