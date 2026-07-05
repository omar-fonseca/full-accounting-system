# 03 - Engineering Journal

# Bitácora de Ingeniería del Proyecto

# Introducción

El desarrollo de software profesional no consiste únicamente en escribir código. Cada decisión técnica, cada problema resuelto y cada aprendizaje adquirido forman parte del proceso de construcción de un sistema.

Este documento registra cronológicamente la evolución del proyecto **Full Accounting System**, documentando las sesiones de trabajo realizadas durante su desarrollo.

Más que un historial de cambios, esta bitácora representa el razonamiento detrás de las decisiones tomadas, permitiendo comprender cómo evolucionó el sistema desde sus primeras versiones hasta su estado actual.


# ¿Qué es un Engineering Journal?

Un **Engineering Journal** (Bitácora de Ingeniería) es un documento utilizado para registrar el trabajo realizado durante el desarrollo de un proyecto de software.

Su objetivo principal es conservar el conocimiento adquirido durante el proceso de construcción del sistema.

No reemplaza al código fuente.

No reemplaza al historial de Git.

No reemplaza la documentación técnica.

Su función consiste en explicar:

- Qué se hizo.
- Por qué se hizo.
- Qué problemas aparecieron.
- Cómo fueron investigados.
- Cómo fueron solucionados.
- Qué se aprendió.

En proyectos profesionales este tipo de documentación facilita el mantenimiento del software y acelera la incorporación de nuevos desarrolladores al equipo.


# Objetivos del Journal

Esta bitácora tiene como objetivos:

- Registrar cada sesión de desarrollo.
- Documentar las decisiones técnicas importantes.
- Conservar el contexto de los cambios realizados.
- Registrar el tiempo invertido.
- Identificar problemas recurrentes.
- Servir como material de estudio y aprendizaje.
- Facilitar futuras mejoras del proyecto.


# Metodología de Registro

Cada sesión seguirá una estructura uniforme para facilitar su consulta.

Cada entrada incluirá:

- Fecha.
- Objetivo de la sesión.
- Estado inicial del proyecto.
- Actividades realizadas.
- Problemas encontrados.
- Diagnóstico técnico.
- Solución implementada.
- Validaciones realizadas.
- Commits realizados.
- Aprendizajes obtenidos.
- Próximos pasos.

Esta metodología permite reconstruir la evolución completa del proyecto en cualquier momento.


# Registro de Sesiones


# Sesión 1

## Fecha

Junio de 2026


## Objetivo

Recuperar el proyecto y estabilizar el entorno de desarrollo para continuar con la implementación de nuevas funcionalidades.


## Estado inicial

El proyecto presentaba diversos problemas que dificultaban su mantenimiento y evolución:

- Configuración inconsistente.
- Dependencias innecesarias en Git.
- Errores de navegación.
- Advertencias de ESLint.
- Problemas de autenticación.
- Organización limitada del frontend.


## Actividades realizadas

Durante esta sesión se realizaron las siguientes tareas:

- Limpieza del repositorio.
- Corrección del archivo `.gitignore`.
- Eliminación de `node_modules` del control de versiones.
- Creación de archivos `.env.example`.
- Corrección de imports innecesarios.
- Corrección de rutas Login/Register.
- Actualización de navegación con React Router.
- Corrección del flujo de registro.
- Validación mediante ESLint.
- Validación mediante Build.


## Problemas encontrados

Se identificaron diversos errores:

- Login y Register abrían la misma vista.
- Ruta incorrecta hacia Login.
- Uso de `window.location.href`.
- Imports innecesarios de React.
- Dependencias versionadas en Git.


## Diagnóstico

La mayoría de los problemas tenían un origen común:

Una organización inicial del proyecto poco estructurada, que fue creciendo sin aplicar una arquitectura claramente definida.


## Solución implementada

Se aplicaron diversas correcciones enfocadas en la estabilización del sistema:

- Separación entre configuración y código.
- Uso correcto de React Router.
- Limpieza del proyecto.
- Corrección de imports.
- Mejora del flujo de autenticación.


## Validaciones realizadas

Se verificó correctamente:

- npm run lint
- npm run build
- Navegación entre pantallas
- Registro de usuarios


## Resultado

El frontend quedó estable y preparado para continuar con nuevas mejoras.


## Commits relevantes

- chore: stop tracking backend dependencies
- chore: add env examples and stabilize frontend


## Aprendizajes

Durante esta sesión se comprendió la importancia de:

- Mantener limpio el repositorio.
- Separar configuración y código.
- Utilizar correctamente React Router.
- Validar el proyecto después de cada cambio.


## Tiempo aproximado invertido

5 horas.


# Sesión 2

## Fecha

Junio de 2026


## Objetivo

Recuperar completamente la conexión entre el backend y MongoDB Atlas.


## Estado inicial

El backend no conseguía establecer conexión con la base de datos.

La aplicación no podía iniciar correctamente debido a diversos errores relacionados con la configuración del entorno.


## Problemas encontrados

Durante esta sesión aparecieron varios errores críticos:

- Error ETIMEOUT.
- Error MongoParseError.
- Puerto 5000 ocupado.
- Configuración incorrecta del archivo `.env`.


## Investigación realizada

Antes de modificar código se analizaron las posibles causas.

Se verificó:

- Variables de entorno.
- Usuario de MongoDB Atlas.
- Contraseña.
- URI de conexión.
- DNS.
- Configuración del Cluster.
- Network Access.
- Firewall.
- Estado del servidor.


## Diagnóstico

Se concluyó que los problemas no tenían un único origen.

Existían errores tanto de infraestructura como de configuración local.


## Solución implementada

Se realizaron las siguientes acciones:

- Corrección de la URI.
- Corrección del archivo `.env`.
- Eliminación de variables duplicadas.
- Recuperación del acceso a Atlas.
- Reinicio del backend.
- Liberación del puerto 5000.


## Validaciones realizadas

Se comprobó correctamente:

- Conexión con MongoDB Atlas.
- Inicio del servidor Express.
- Comunicación mediante Mongoose.
- Funcionamiento del backend.


## Resultado

El backend volvió a conectarse correctamente con MongoDB Atlas.

La aplicación quedó nuevamente operativa.


## Commits relacionados

Se documentarán conforme avance el proyecto.


## Aprendizajes

Durante esta sesión se comprendió:

- Cómo funciona una conexión MongoDB Atlas.
- Diferencias entre `mongodb://` y `mongodb+srv://`.
- Importancia del archivo `.env`.
- Importancia del DNS.
- Manejo de errores de infraestructura.


## Tiempo aproximado invertido

3 horas.


# Sesión 3

## Fecha

Junio de 2026


## Objetivo

Reorganizar la arquitectura del frontend sin modificar su comportamiento.


## Estado inicial

El frontend funcionaba correctamente, pero la organización de archivos dificultaba su escalabilidad.


## Actividades realizadas

- Creación de una estructura modular.
- Separación entre páginas y componentes.
- Centralización de servicios.
- Reorganización de estilos.
- Eliminación de archivos duplicados.
- Validación completa del proyecto.


## Resultado

El proyecto quedó preparado para incorporar nuevos módulos de negocio sin afectar las funcionalidades existentes.


## Aprendizajes

Durante esta sesión se reforzaron conceptos relacionados con:

- Arquitectura Frontend.
- Separación de responsabilidades.
- Organización por capas.
- Escalabilidad.
- Mantenibilidad.


# Lecciones Generales Aprendidas

Hasta el momento, el desarrollo del proyecto ha permitido comprender que:

- La arquitectura debe construirse antes de añadir funcionalidades complejas.
- Un proyecto estable facilita el desarrollo futuro.
- La documentación reduce la pérdida de conocimiento.
- Git representa la historia del código; la bitácora representa la historia del razonamiento.
- Cada error resuelto incrementa la experiencia técnica del desarrollador.


# Próximas Sesiones

Las siguientes entradas documentarán:

- Refactorización del Dashboard.
- Implementación del módulo de Inventario.
- Gestión de Personal.
- Gestión de Combustible.
- Reportes.
- Optimización del Backend.
- Pruebas integrales.
- Preparación para producción.


# Conclusiones

Esta bitácora constituye el registro histórico del proyecto.

Cada sesión documentada refleja no solo los cambios realizados sobre el código, sino también el proceso de análisis, investigación y aprendizaje que permitió construir el sistema de manera progresiva.

El objetivo final no es únicamente desarrollar una aplicación funcional, sino formar una base sólida de conocimientos en desarrollo Full Stack, arquitectura de software, depuración de errores y buenas prácticas de ingeniería.