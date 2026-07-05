# 04 - Bug History

# Historial Técnico de Errores

# Introducción

Durante el desarrollo de cualquier sistema de software es normal encontrar errores. Sin embargo, la diferencia entre un desarrollo improvisado y uno profesional radica en la manera en que esos errores son investigados, documentados y solucionados.

Este documento registra los principales incidentes técnicos encontrados durante el desarrollo del proyecto **Full Accounting System**.

Cada error documentado incluye:

- Contexto.
- Síntomas.
- Diagnóstico.
- Causa raíz.
- Solución implementada.
- Validación.
- Conceptos aprendidos.
- Estrategias de prevención.

El objetivo principal es construir una base de conocimiento que permita comprender el comportamiento del sistema y reducir el tiempo necesario para resolver problemas similares en el futuro.


# ¿Qué es un Bug?

Un **Bug** es un defecto o comportamiento inesperado del software que impide que el sistema funcione como fue diseñado.

Un bug puede tener múltiples causas:

- Error humano.
- Mala configuración.
- Problemas de infraestructura.
- Errores de programación.
- Errores de integración.
- Cambios en dependencias.
- Problemas de red.

En ingeniería de software no basta con corregir el síntoma; es necesario identificar la **causa raíz (Root Cause)** para evitar que el problema vuelva a ocurrir.


# Metodología de Investigación

Para todos los errores del proyecto se aplicó el siguiente proceso de análisis:

1. Identificación del síntoma.
2. Recolección de información.
3. Formulación de hipótesis.
4. Validación de cada hipótesis.
5. Identificación de la causa raíz.
6. Aplicación de la solución.
7. Verificación del funcionamiento.
8. Documentación del aprendizaje.

Este procedimiento reduce el riesgo de aplicar soluciones incorrectas o temporales.


# BUG-001

## Nombre

Navegación incorrecta entre Login y Register.


## Fecha

Junio de 2026.



## Módulo afectado

Frontend.

React Router.


## Síntomas

Al hacer clic en "Iniciar Sesión" se abría la vista de registro.

Al hacer clic en "Crear Cuenta" también se abría la vista de registro.

El usuario no podía acceder correctamente al formulario de Login.



## Mensajes de error

No existía un mensaje explícito.

El problema era de comportamiento.


## Diagnóstico

Se revisaron las rutas configuradas en React Router.

Posteriormente se verificó la navegación implementada mediante `navigate()`.

Finalmente se comprobó que ambas opciones estaban enviando al mismo destino.


## Causa raíz

Las rutas utilizaban una combinación de:

```
/LoginRegister
```

mientras que React Router estaba definido con:

```
/loginregister
```

Además no existía ningún mecanismo para diferenciar el modo Login del modo Register.

---

## Solución aplicada

Se implementó el uso de parámetros de consulta:

```
/loginregister?mode=login
```

```
/loginregister?mode=register
```

Posteriormente se utilizó `useSearchParams()` para controlar el estado del formulario.



## Validación

Se comprobó que:

- Login abre Login.
- Register abre Register.
- La URL representa correctamente el estado.


## Conceptos aprendidos

- React Router.
- Query Parameters.
- useSearchParams().
- Navegación declarativa.



## Prevención

Nunca depender únicamente del estado interno cuando la URL puede representar el estado de la aplicación.



# BUG-002

## Nombre

node_modules versionado en Git.



## Módulo afectado

Repositorio Git.



## Síntomas

Git detectaba miles de archivos modificados.

Los commits eran extremadamente grandes.

El repositorio aumentaba innecesariamente de tamaño.



## Diagnóstico

Se revisó el contenido del repositorio.

Se identificó que la carpeta:

```
backend/node_modules
```

estaba siendo rastreada por Git.



## Causa raíz

El archivo `.gitignore` no incluía correctamente la carpeta `node_modules`.



## Solución aplicada

Se agregó

```
node_modules
```

al `.gitignore`.

Posteriormente se eliminó la carpeta del índice de Git sin borrar los archivos locales.


## Validación

Git dejó de rastrear las dependencias.

El repositorio redujo más de 300.000 líneas innecesarias.


## Conceptos aprendidos

- Git Ignore.
- Git Index.
- Versionado de dependencias.


## Prevención

Nunca subir `node_modules` al repositorio.

Las dependencias deben instalarse mediante:

```
npm install
```


# BUG-003

## Nombre

Configuración incorrecta del archivo .gitignore.


## Síntomas

Git seguía detectando archivos que deberían ignorarse.


## Diagnóstico

Se revisó la configuración del archivo `.gitignore`.


## Causa raíz

Las reglas de exclusión eran incompletas.


## Solución

Actualizar `.gitignore` con las reglas necesarias para el proyecto.


## Conceptos aprendidos

- Funcionamiento interno de Git Ignore.
- Diferencia entre ignorar archivos nuevos y dejar de rastrear archivos ya versionados.


# BUG-004

## Nombre

MongoParseError.


## Módulo afectado

Backend.

MongoDB Atlas.


## Síntomas

El servidor no iniciaba.

Mongoose lanzaba:

```
MongoParseError
```


## Diagnóstico

Se inspeccionó el archivo `.env`.


## Causa raíz

La variable estaba duplicada.

Ejemplo:

```
MONGODB_URI=MONGODB_URI=...
```

Lo que producía una URI inválida.


## Solución aplicada

Corrección manual del archivo `.env`.


## Validación

MongoDB volvió a conectarse correctamente.


## Conceptos aprendidos

- dotenv.
- Variables de entorno.
- Parsing de configuración.


## Prevención

Revisar cuidadosamente el formato de las variables de entorno antes de iniciar la aplicación.


# BUG-005

## Nombre

Puerto ocupado (EADDRINUSE).


## Síntomas

El servidor Express no podía iniciar.

Mensaje:

```
EADDRINUSE
```


## Diagnóstico

Existía un proceso Node.js ejecutándose en segundo plano utilizando el puerto 5000.


## Causa raíz

El servidor anterior no había sido detenido correctamente.


## Solución aplicada

Identificar el PID.

Finalizar el proceso.

Reiniciar el servidor.


## Validación

El backend inició correctamente.


## Conceptos aprendidos

- Gestión de procesos.
- Puertos TCP.
- Ciclo de vida de un servidor Express.


## Prevención

Cerrar correctamente los procesos antes de iniciar una nueva instancia.


# BUG-006

## Nombre

ETIMEOUT al conectar con MongoDB Atlas.


## Síntomas

El backend no lograba conectarse al clúster.


## Mensaje

```
queryTxt ETIMEOUT
```


## Diagnóstico

Se verificó:

- Usuario.
- Contraseña.
- Cluster.
- Firewall.
- DNS.
- Network Access.


## Causa raíz

Problema de resolución DNS para conexiones `mongodb+srv://`.


## Solución

Reconfiguración de la conexión y validación del entorno de red.


## Validación

Conexión exitosa con MongoDB Atlas.


## Conceptos aprendidos

- DNS.
- Registros SRV.
- MongoDB Atlas.


## Prevención

Verificar primero la infraestructura antes de modificar el código.


# BUG-007

## Nombre

Duplicación de variables en el archivo .env.


## Síntomas

Configuraciones inválidas.

Errores de conexión.


## Diagnóstico

Variables repetidas y mal escritas.


## Solución

Reescribir completamente el archivo `.env`.


## Aprendizaje

Los archivos de configuración forman parte crítica del sistema.


# BUG-008

## Nombre

Advertencias de ESLint.


## Síntomas

El proyecto compilaba, pero mostraba múltiples advertencias.


## Diagnóstico

Se identificaron:

- Imports sin utilizar.
- Comillas sin escapar.
- Configuración incompleta para Vite.


## Solución

- Eliminar imports innecesarios.
- Escapar caracteres JSX.
- Ajustar `eslint.config.js`.


## Conceptos aprendidos

- Calidad del código.
- Linting.
- Buenas prácticas.


# BUG-009

## Nombre

Uso incorrecto de window.location.href.


## Síntomas

La navegación recargaba completamente la aplicación.


## Diagnóstico

Se utilizaba navegación tradicional en una SPA.


## Causa raíz

No se estaba utilizando React Router.


## Solución

Reemplazar:

```
window.location.href
```

por:

```
navigate()
```


## Conceptos aprendidos

- SPA.
- React Router.
- Navegación del lado del cliente.


# BUG-010

## Nombre

Imports innecesarios de React.


## Síntomas

Advertencias de ESLint.


## Diagnóstico

React 17+ ya no requiere importar React para utilizar JSX.


## Solución

Eliminar todos los imports innecesarios.


## Conceptos aprendidos

- Nuevo transformador JSX.
- React moderno.
- Optimización del código.


# Estadísticas del Historial de Errores

## Total de bugs documentados

10


## Áreas más afectadas

- Frontend React
- Configuración del proyecto
- MongoDB Atlas
- Git
- Variables de entorno
- Calidad del código


## Principales aprendizajes

Durante el desarrollo del proyecto se reforzaron conocimientos relacionados con:

- React Router.
- React Hooks.
- Git y GitHub.
- MongoDB Atlas.
- Express.
- Variables de entorno.
- Configuración de proyectos.
- Arquitectura de frontend.
- Depuración sistemática (Debugging).
- Análisis de causa raíz (Root Cause Analysis).


# Conclusiones

La documentación de errores representa una herramienta fundamental para el mantenimiento del software y el crecimiento profesional del desarrollador.

Cada bug resuelto incrementó el conocimiento técnico adquirido durante el proyecto y fortaleció la capacidad para diagnosticar problemas de manera sistemática.

Más allá de corregir errores, este historial demuestra un proceso disciplinado de investigación, validación y mejora continua, principios esenciales en la ingeniería de software profesional.