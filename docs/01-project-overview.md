# 01. Project Overview

# Full Accounting System
## Visión General del Proyecto


# 1. Introducción

Full Accounting System es un sistema de información empresarial desarrollado como proyecto de aprendizaje y portafolio profesional, cuyo propósito es administrar los procesos operativos y administrativos de una estación de servicio (EDS) mediante una arquitectura moderna basada en tecnologías JavaScript.

Este proyecto nace con dos objetivos principales:

- Construir un sistema de software que represente una solución real para un negocio.
- Aprender de manera práctica cómo diseñar, desarrollar, documentar y mantener una aplicación Full Stack siguiendo buenas prácticas de ingeniería de software.

A diferencia de un proyecto académico tradicional, este proyecto busca simular el ciclo de vida de un producto profesional, desde la planeación hasta la documentación técnica y el control de versiones.


# 2. Contexto del problema

Las estaciones de servicio administran diariamente grandes cantidades de información relacionada con:

- Ventas de combustible.
- Inventario.
- Lubricantes.
- Repuestos.
- Turnos de empleados.
- Clientes.
- Reportes administrativos.
- Indicadores financieros.

En muchos casos estos procesos se realizan utilizando múltiples herramientas independientes, hojas de cálculo o sistemas que no se encuentran integrados.

Esto genera problemas como:

- Duplicidad de información.
- Mayor probabilidad de errores humanos.
- Dificultad para obtener indicadores de gestión.
- Baja trazabilidad de las operaciones.
- Poca escalabilidad del sistema.

El proyecto busca demostrar cómo una arquitectura moderna puede centralizar todos estos procesos dentro de una sola plataforma.


# 3. Justificación del proyecto

Este sistema no fue concebido inicialmente como un producto comercial.

Su principal propósito consiste en servir como proyecto insignia (Flagship Project) dentro del portafolio profesional del desarrollador.

Durante su desarrollo se busca fortalecer conocimientos en:

- Ingeniería de Software.
- Arquitectura Full Stack.
- React.
- Node.js.
- Express.
- MongoDB Atlas.
- Git.
- GitHub.
- Documentación técnica.
- Resolución de problemas.
- Buenas prácticas de desarrollo.

Cada módulo desarrollado representa una oportunidad para aprender tecnologías utilizadas actualmente por la industria del software.


# 4. Objetivo General

Diseñar e implementar una aplicación Full Stack que permita gestionar los procesos administrativos principales de una estación de servicio utilizando tecnologías modernas del ecosistema JavaScript y siguiendo principios básicos de arquitectura de software.


# 5. Objetivos Específicos

- Implementar autenticación segura de usuarios.
- Gestionar información mediante una base de datos en MongoDB Atlas.
- Construir una interfaz moderna utilizando React.
- Diseñar una API REST utilizando Express.
- Aplicar buenas prácticas de organización del código.
- Mantener un historial de cambios mediante Git y GitHub.
- Documentar todas las decisiones técnicas tomadas durante el desarrollo.
- Registrar los errores encontrados y las soluciones implementadas.
- Convertir el proyecto en un recurso de aprendizaje continuo.


# 6. Alcance del proyecto

Actualmente el sistema contempla el desarrollo de los siguientes módulos:

## Módulos implementados

- Autenticación de usuarios.
- Registro de usuarios.
- Inicio de sesión.
- Integración con MongoDB Atlas.
- Arquitectura inicial del frontend.
- Comunicación entre frontend y backend.

## Módulos planificados

- Dashboard administrativo.
- Gestión de inventarios.
- Gestión de combustibles.
- Gestión de empleados.
- Gestión de turnos.
- Gestión de ventas.
- Reportes administrativos.
- Indicadores (KPIs).
- Auditoría de acciones.


# 7. Tecnologías seleccionadas

El proyecto utiliza tecnologías ampliamente adoptadas por la industria.

## Frontend

- React
- React Router
- Axios
- Vite

### ¿Por qué React?

React permite construir interfaces reutilizables mediante componentes independientes, facilitando el mantenimiento y la escalabilidad de la aplicación.


## Backend

- Node.js
- Express.js

### ¿Por qué Express?

Express proporciona una estructura sencilla para construir APIs REST de forma rápida, organizada y escalable.


## Base de datos

- MongoDB Atlas
- Mongoose

### ¿Por qué MongoDB?

El proyecto maneja información flexible que puede evolucionar durante el desarrollo.

MongoDB facilita este tipo de escenarios gracias a su modelo documental.

Mongoose añade una capa de validación y modelado sobre MongoDB.


## Control de versiones

- Git
- GitHub

### ¿Por qué?

Permiten mantener un historial completo del proyecto, colaborar de forma organizada y recuperar versiones anteriores cuando sea necesario.


## Herramientas adicionales

- ESLint
- dotenv
- JWT
- CORS
- npm

Cada una de estas herramientas cumple una función específica que será documentada en el archivo **05-learning-notes.md**.


# 8. Usuarios objetivo

Aunque el proyecto tiene un enfoque educativo, está diseñado pensando en usuarios reales.

Los principales perfiles contemplados son:

- Administrador de estación de servicio.
- Auxiliares administrativos.
- Personal operativo.
- Supervisor.
- Gerencia.

Cada perfil tendrá permisos diferentes dentro del sistema.


# 9. Beneficios esperados

La implementación del sistema busca proporcionar:

- Centralización de la información.
- Mayor control administrativo.
- Mejor seguimiento del inventario.
- Reducción de errores operativos.
- Acceso rápido a indicadores.
- Mejor experiencia para los usuarios.
- Escalabilidad futura.


# 10. Estado actual del proyecto

Actualmente el proyecto se encuentra en una fase de estabilización técnica.

Se han completado tareas importantes como:

- Organización inicial del frontend.
- Conexión con MongoDB Atlas.
- Configuración de variables de entorno.
- Integración entre React y Express.
- Corrección de errores de navegación.
- Eliminación de dependencias innecesarias del repositorio.
- Implementación de buenas prácticas para archivos `.env`.
- Validación mediante ESLint y compilación con Vite.

El proyecto continúa evolucionando de manera incremental, priorizando primero la estabilidad de la arquitectura antes de incorporar nuevas funcionalidades.


# 11. Próximas fases

Las siguientes etapas del proyecto serán:

1. Consolidación definitiva de la arquitectura.
2. Desarrollo del Dashboard Administrativo.
3. Gestión de Inventarios.
4. Gestión de Combustibles.
5. Gestión de Empleados.
6. Gestión de Turnos.
7. Gestión de Ventas.
8. Reportes.
9. Optimización de rendimiento.
10. Pruebas finales.


# Conclusión

Full Accounting System representa mucho más que un ejercicio de programación.

Es un proyecto construido con el propósito de aprender ingeniería de software de forma práctica, documentar cada decisión tomada y demostrar la capacidad de diseñar, desarrollar y mantener una aplicación Full Stack siguiendo un proceso organizado y profesional.

# Lecciones de Ingeniería

Durante esta etapa se aprendió que:

- Antes de escribir código es necesario comprender el problema del negocio.
- Una buena arquitectura comienza con una correcta definición del alcance.
- La documentación es parte del desarrollo, no una actividad opcional.
- Las decisiones tecnológicas deben justificarse por el problema que resuelven y no por popularidad.