# Full Accounting System | Gestión Integral de Estaciones de Servicio

## 🚀 Visión del Proyecto

**Full Accounting System** es una plataforma web orientada a la gestión integral de estaciones de servicio, diseñada para centralizar los procesos operativos, administrativos y contables dentro de una arquitectura moderna, modular y escalable.

El objetivo principal del sistema es permitir la administración eficiente de áreas críticas como:

* Gestión de usuarios y autenticación.
* Control de inventarios.
* Administración de combustibles.
* Registro de ventas.
* Gestión de turnos de empleados.
* Control operativo de la estación.
* Reportes e indicadores de negocio.

El proyecto está construido con principios de ingeniería de software profesional, aplicando separación de responsabilidades, modularidad, documentación técnica continua y evolución incremental.

Este repositorio representa no solamente una aplicación funcional, sino también un proceso completo de aprendizaje y construcción de software bajo buenas prácticas profesionales.

### Documentación relevante

- Documentación técnica general: [docs/auth.md](docs/auth.md)
- Notas de aprendizaje: [docs/05-learning-notes.md](docs/05-learning-notes.md)
- Diagnóstico verificable del estado actual: [docs/10-project-audit.md](docs/10-project-audit.md)
- Roles y permisos: [docs/roles-and-permissions.md](docs/roles-and-permissions.md)
- Diagnóstico y plan del dashboard: [docs/dashboard.md](docs/dashboard.md)

---

# 🎯 Objetivo General

Diseñar e implementar un sistema web especializado para estaciones de servicio que permita administrar sus operaciones principales mediante una solución:

* Segura.
* Escalable.
* Mantenible.
* Modular.
* Preparada para crecimiento futuro.

La visión del proyecto es evolucionar hacia una plataforma tipo ERP especializada para el sector de estaciones de servicio, donde cada módulo pueda crecer independientemente sin afectar el funcionamiento general del sistema.

---

# 🏗️ Arquitectura General del Sistema

> Estado real a 2026-09-03: la autenticación y la base inicial del dashboard están implementadas; inventario, combustibles, ventas, turnos, contabilidad y reportes operativos siguen pendientes.

El sistema está compuesto por tres capas principales:

```
                 Usuario

                    │

                    ▼

          Frontend - React

                    │

          HTTP / REST API
              Axios

                    │

                    ▼

          Backend - Node.js
              Express

                    │

                    ▼

             MongoDB Atlas
```

## Frontend

Responsable de:

* Interfaz gráfica.
* Experiencia del usuario.
* Navegación.
* Gestión del estado.
* Comunicación con la API.

Tecnología principal:

* React.

---

## Backend

Responsable de:

* Reglas de negocio.
* Autenticación.
* Seguridad.
* Procesamiento de información.
* Comunicación con la base de datos.

Tecnologías principales:

* Node.js.
* Express.

---

## Base de Datos

Responsable de:

* Persistencia de información.
* Usuarios.
* Inventarios.
* Ventas.
* Historial operativo.

Tecnologías:

* MongoDB Atlas.
* Mongoose.

---

# 🧱 Enfoque Arquitectónico

El proyecto actual utiliza una arquitectura modular por capas, inspirada parcialmente en principios de:

* Clean Architecture, como referencia futura, no como implementación completa.
* Domain Driven Design, como influencia conceptual, no como DDD formal.
* Separación de responsabilidades.
* Bajo acoplamiento.
* Alta cohesión.

El objetivo es evitar una aplicación difícil de mantener y construir una base preparada para agregar nuevos módulos.

Ejemplo de crecimiento futuro:

```
modules/

├── authentication
├── inventory
├── fuel
├── sales
├── employees
├── reports
└── billing
```

Cada módulo tendrá sus propias responsabilidades sin depender directamente de otros componentes.

---

# 🛠️ Stack Tecnológico

## Frontend

### React

Biblioteca utilizada para construir interfaces modernas mediante componentes reutilizables.

Responsabilidades:

* Creación de pantallas.
* Componentización.
* Manejo del estado.
* Actualización dinámica de información.

### React Router

Gestiona la navegación interna de la aplicación.

Uso:

* Rutas públicas.
* Rutas privadas.
* Navegación entre módulos.

### React Hooks

Permiten manejar:

* Estado.
* Ciclos de vida.
* Lógica reutilizable.

### Vite

Herramienta de construcción del frontend.

Proporciona:

* Desarrollo rápido.
* Compilación optimizada.
* Configuración moderna.

### Axios

Cliente HTTP utilizado para comunicación entre frontend y backend.

Uso:

* Login.
* Registro.
* Consultas.
* Envío de información.

---

# Backend

## Node.js

Entorno de ejecución utilizado para desarrollar el servidor utilizando JavaScript.

Responsabilidades:

* Ejecución del backend.
* Manejo de procesos.
* Comunicación con servicios externos.

## Express

Framework utilizado para construir la API REST.

Responsabilidades:

* Creación de rutas.
* Middleware.
* Manejo de solicitudes.
* Respuestas HTTP.

## JWT

Sistema de autenticación basado en tokens.

Uso:

* Identificación de usuarios.
* Protección de rutas.
* Control de acceso.

## bcrypt

Biblioteca utilizada para proteger contraseñas mediante hashing seguro.

## dotenv

Manejo de variables de entorno.

Ejemplo:

* Credenciales.
* Claves privadas.
* Configuración del sistema.

## CORS

Controla la comunicación segura entre frontend y backend.

---

# Base de Datos

## MongoDB Atlas

Base de datos NoSQL utilizada para almacenar información del sistema.

Ejemplos:

* Usuarios.
* Productos.
* Combustibles.
* Movimientos.
* Ventas.

## Mongoose

ODM utilizado para trabajar MongoDB desde Node.js.

Permite:

* Crear modelos.
* Validar datos.
* Gestionar consultas.

---

# Calidad y Herramientas

## Git

Sistema de control de versiones utilizado para:

* Historial del proyecto.
* Control de cambios.
* Trabajo profesional.

## GitHub

Plataforma utilizada para:

* Repositorio remoto.
* Gestión del código.
* Seguimiento del desarrollo.

## ESLint

Herramienta de calidad de código.

Permite:

* Detectar errores.
* Mantener estándares.
* Mejorar legibilidad.

---

# 📂 Estructura General del Proyecto

```
## 📁 Estructura General del Repositorio

full-accounting-system/
├── README.md
│
├── docs/
│   ├── 01-project-overview.md
│   ├── 02-development-roadmap.md
│   ├── 03-engineering-journal.md
│   ├── 04-bug-history.md
│   ├── 05-learning-notes/
│   ├── 06-current-architecture.md
│   ├── 07-target-architecture.md
│   └── images/
│
├── frontend/
│   ├── src/
│   │   ├── features/
│   │   ├── components/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── contexts/
│   │   ├── routes/
│   │   ├── styles/
│   │   ├── config/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── public/
│
└── backend/
    ├── src/
    │   ├── config/
    │   ├── routes/
    │   ├── controllers/
    │   ├── services/
    │   ├── repositories/
    │   ├── models/
    │   ├── middlewares/
    │   ├── validations/
    │   ├── utils/
    │   ├── constants/
    │   ├── modules/
    │   ├── app.js
    │   └── index.js
    └── package.json

---

# 📚 Documentación Técnica

La documentación del proyecto se encuentra dentro de la carpeta:

docs/
    │
    ├── 01-project-overview.md
    ├── 02-development-roadmap.md
    ├── 03-engineering-journal.md
    ├── 04-bug-history.md
    │
    ├── 05-learning-notes/
    │
    ├── 06-current-architecture.md
    └── 07-target-architecture.md

Su propósito es registrar:

* Decisiones técnicas.
* Arquitectura.
* Errores encontrados.
* Soluciones aplicadas.
* Conocimiento adquirido.

## Documentos principales

| Documento                  | Propósito                             |
| -------------------------- | ------------------------------------- |
| 01-project-overview.md     | Descripción general del proyecto      |
| 02-development-roadmap.md  | Plan de desarrollo                    |
| 03-engineering-journal.md  | Registro técnico del desarrollo       |
| 04-bug-history.md          | Historial de errores y soluciones     |
| 05-learning-notes          | Biblioteca de aprendizaje tecnológico |
| 06-current-architecture.md | Arquitectura actual AS-IS             |
| 07-target-architecture.md  | Arquitectura objetivo TO-BE           |

---

# 📖 Biblioteca de Aprendizaje

La carpeta:

```
docs/05-learning-notes/
```

contiene documentación técnica de cada tecnología utilizada.

Incluye conceptos sobre:

* JavaScript.
* Node.js.
* Express.
* React.
* React Router.
* React Hooks.
* Vite.
* Axios.
* MongoDB.
* Mongoose.
* JWT.
* dotenv.
* CORS.
* Git.
* ESLint.
* Arquitectura.
* Debugging.

Cada documento explica:

* Definición técnica.
* Propósito.
* Problema que resuelve.
* Funcionamiento interno.
* Casos reales.
* Implementación.
* Buenas prácticas.
* Errores comunes.
* Relación con el proyecto.

---

# 🧭 Roadmap del Proyecto

## Fase 0 — Estabilización y Diagnóstico

Estado:

✅ Completada

Logros:

* Recuperación del proyecto.
* Instalación de dependencias.
* Limpieza del repositorio.
* Configuración Git.
* Corrección Login/Register.
* Corrección React Router.
* Corrección ESLint.
* Validación del build.
* Validación del backend.
* Recuperación conexión MongoDB.
* Documentación técnica inicial.

---

# Fase 1 — Arquitectura

Estado:

✅ Completada

Objetivos:

* Reestructuración profesional del frontend.
* Reestructuración profesional del backend.
* Separación por responsabilidades.
* Implementación de servicios.
* Middleware global.
* Validaciones.
* Configuración profesional.

---

# Fase 2 — Autenticación

Estado:

🚧 En desarrollo

Incluye:

* Login.
* Registro.
* JWT profesional.
* Roles de usuario.
* Protección de rutas.
* Auditoría de accesos.

---

# Fases Futuras

## Dashboard

* Indicadores KPI.
* Ventas.
* Alertas.
* Actividad reciente.

## Inventario

* Productos.
* Repuestos.
* Aceites.
* Kardex.
* Alertas.

## Combustible

* Inventario volumétrico.
* Entradas.
* Ventas.
* Movimientos.

## Turnos

* Empleados.
* Apertura.
* Cierre.
* Caja.

## Reportes

* Reportes administrativos.
* Exportación PDF.
* Exportación Excel.
* Análisis financiero.

---

# 🚀 Visión Futura

El sistema está preparado para evolucionar hacia funcionalidades avanzadas como:

* Inteligencia de negocio.
* Predicción de demanda.
* Automatización de alertas.
* Integración con facturación electrónica.
* Analítica operacional.
* Reportes avanzados.

---

# 🧠 Filosofía de Ingeniería

Este proyecto sigue una filosofía basada en:

* Código limpio.
* Arquitectura mantenible.
* Documentación continua.
* Aprendizaje aplicado.
* Mejora incremental.
* Calidad antes que velocidad.

La ingeniería de software no consiste únicamente en escribir código.

También implica comprender:

* Por qué existe una tecnología.
* Qué problema resuelve.
* Cómo debe utilizarse.
* Qué decisiones permiten construir sistemas sostenibles.

---

# 📌 Estado General

**Proyecto en desarrollo activo.**

Actualmente cuenta con:

✅ Base funcional estable.
✅ Documentación técnica estructurada.
✅ Arquitectura definida.
✅ Roadmap de evolución.
✅ Biblioteca de aprendizaje.

El siguiente objetivo es continuar la evolución arquitectónica e iniciar la implementación progresiva de los módulos principales del sistema.

---
