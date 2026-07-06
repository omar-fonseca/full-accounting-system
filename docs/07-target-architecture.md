# 07. Target Architecture (TO-BE)

# Arquitectura Objetivo del Proyecto

---

# Introducción

Este documento define la arquitectura objetivo (TO-BE) del proyecto **Full Accounting System**.

Su propósito es establecer la organización oficial del frontend y del backend, definiendo la responsabilidad de cada carpeta y cada archivo principal.

A diferencia del documento **06-current-architecture.md**, que describe cómo está construido actualmente el sistema (AS-IS), este documento representa la arquitectura sobre la cual evolucionará el proyecto durante todas sus fases de desarrollo.

Esta arquitectura fue diseñada siguiendo principios de ingeniería de software moderna, priorizando:

- Escalabilidad.
- Modularidad.
- Bajo acoplamiento.
- Alta cohesión.
- Separación de responsabilidades.
- Facilidad de mantenimiento.
- Facilidad de aprendizaje.
- Evolución incremental sin romper funcionalidades existentes.

---

# Filosofía de la Arquitectura

El proyecto se organiza siguiendo una arquitectura modular basada en dominios funcionales (Feature-Based Architecture) combinada con una arquitectura en capas para el backend.

Esto significa que cada módulo del negocio será prácticamente independiente de los demás.

Por ejemplo:

Inventario podrá evolucionar sin afectar Ventas.

Turnos podrá evolucionar sin afectar Reportes.

Combustible podrá evolucionar sin afectar Usuarios.

Esta separación reduce la deuda técnica y facilita el mantenimiento del sistema.

---

# Arquitectura General

```

Full Accounting System

├── frontend/
├── backend/
├── docs/
└── README.md

```

Cada una de estas carpetas tiene una responsabilidad completamente distinta.

---

# README.md

## ¿Qué significa?

README significa literalmente:

"Read Me"

"Léeme"

Es la puerta de entrada al proyecto.

## Responsabilidad

Presentar el proyecto.

No contiene documentación técnica profunda.

Debe responder preguntas como:

- ¿Qué es este proyecto?
- ¿Qué problema resuelve?
- ¿Qué tecnologías utiliza?
- ¿Cómo ejecutarlo?
- ¿Dónde está la documentación?

---

# docs/

## ¿Qué significa?

Documentation

Documentación.

Aquí vive todo el conocimiento técnico del proyecto.

La documentación nunca debe mezclarse con el código.

Su función es explicar:

- decisiones
- arquitectura
- roadmap
- errores
- aprendizajes

---

# Frontend

## Objetivo

El frontend es responsable exclusivamente de la experiencia del usuario.

Nunca debe contener lógica del negocio compleja.

Su responsabilidad consiste en:

- mostrar información
- capturar datos
- comunicarse con el backend
- actualizar la interfaz

Toda la lógica importante pertenece al backend.

---

# Arquitectura del Frontend

```

frontend

src

App.jsx

main.jsx

assets/

components/

config/

contexts/

features/

hooks/

routes/

services/

styles/

utils/

```

---

# main.jsx

## Función

Es el punto de entrada de React.

Es el primer archivo que ejecuta Vite.

Su responsabilidad es montar la aplicación dentro del navegador.

Nunca contendrá lógica del negocio.

---

# App.jsx

## Función

Es el corazón del frontend.

Define la estructura principal de la aplicación.

Aquí se cargan:

- rutas
- proveedores (Providers)
- contexto global
- layout principal

No debe contener lógica específica de módulos.

---

# routes/

## ¿Qué significa?

Routes

Rutas.

Aquí vive toda la navegación del sistema.

Responsabilidad:

- registrar rutas
- proteger rutas privadas
- controlar acceso

Ejemplo:

```

/

/login

/dashboard

/inventory

/fuel

/reports

```

---

# features/

## ¿Qué significa?

Features

Funcionalidades.

Es la carpeta más importante del frontend.

Cada módulo del negocio vive aquí.

Ejemplo:

```

features

auth/

dashboard/

inventory/

fuel/

employees/

sales/

reports/

settings/

```

Cada carpeta contiene TODO lo relacionado con ese módulo.

Esto evita mezclar archivos de distintos dominios.

---

# components/

## ¿Qué significa?

Componentes reutilizables.

Aquí solamente viven componentes genéricos.

Ejemplos:

Button

Input

Modal

Card

Spinner

Navbar

Sidebar

Estos componentes pueden ser utilizados por cualquier módulo.

Nunca contienen lógica del negocio.

---

# contexts/

## ¿Qué significa?

Context API.

Aquí vive el estado global de la aplicación.

Por ejemplo:

AuthContext

ThemeContext

NotificationContext

Su responsabilidad es compartir información entre múltiples componentes sin necesidad de pasar propiedades manualmente.

---

# hooks/

## ¿Qué significa?

Hooks personalizados.

Aquí se encapsula lógica reutilizable.

Ejemplo:

useAuth()

useForm()

usePagination()

useFetch()

Evitan repetir código.

---

# services/

## ¿Qué significa?

Servicios.

Contienen toda la comunicación con el backend.

Nunca se hacen llamadas Axios directamente desde una página.

Ejemplo:

```

authService.js

inventoryService.js

salesService.js

fuelService.js

```

Cada servicio conoce únicamente cómo comunicarse con la API.

---

# styles/

## ¿Qué significa?

Estilos.

Aquí vive únicamente CSS.

Se organiza por módulos.

Ejemplo:

```

styles

global/

pages/

components/

```

---

# assets/

Recursos estáticos.

Ejemplo:

- imágenes
- iconos
- logos
- fuentes

---

# config/

Configuraciones generales del frontend.

Ejemplo:

URL de la API.

Configuración de Axios.

Variables públicas.

---

# utils/

Funciones auxiliares.

Ejemplo:

formatear fechas

validaciones simples

formatos monetarios

convertidores

No contienen lógica del negocio.

---

# Backend

## Objetivo

El backend concentra toda la lógica del negocio.

Es el cerebro del sistema.

Toda decisión importante ocurre aquí.

---

# Arquitectura del Backend

```

backend

src

index.js

app.js

config/

routes/

controllers/

services/

repositories/

models/

middlewares/

validations/

utils/

constants/

modules/

```

---

# index.js

Responsabilidad:

Iniciar el servidor.

Es el punto de entrada del backend.

---

# app.js

Construye la aplicación Express.

Aquí se registran:

middlewares

CORS

rutas

manejo de errores

No inicia el servidor.

---

# config/

Configuraciones internas.

Ejemplo:

MongoDB

JWT

Variables de entorno

---

# routes/

Define los endpoints.

Ejemplo:

```

POST /auth/login

POST /auth/register

GET /users

```

No contienen lógica.

Solo redireccionan peticiones.

---

# controllers/

Reciben la petición HTTP.

Validan.

Llaman al Service.

Devuelven la respuesta.

No implementan reglas del negocio.

---

# services/

Es la capa más importante del backend.

Aquí vive la lógica del negocio.

Ejemplo:

Registrar usuario.

Cerrar turno.

Calcular inventario.

Generar reporte.

Los Services nunca conocen Express.

---

# repositories/

Comunicación con MongoDB.

Aquí se realizan:

find()

save()

update()

delete()

Esto desacopla la base de datos del negocio.

---

# models/

Modelos Mongoose.

Representan las colecciones de MongoDB.

No contienen lógica compleja.

---

# middlewares/

Procesos automáticos ejecutados antes del controlador.

Ejemplos:

Autenticación.

Validaciones.

Logs.

Control de permisos.

Manejo de errores.

---

# validations/

Validaciones del sistema.

Ejemplo:

correo válido

contraseña segura

campos obligatorios

Evitan duplicar validaciones.

---

# utils/

Funciones reutilizables.

Ejemplo:

Generar tokens.

Formatear respuestas.

Generar fechas.

---

# constants/

Constantes del sistema.

Ejemplo:

Roles.

Estados.

Mensajes.

Códigos HTTP.

---

# modules/

Representa la evolución futura hacia una arquitectura completamente modular.

Aquí podrán existir módulos independientes como:

Inventory

Sales

Fuel

Reports

Employees

Cada módulo podrá contener su propio:

- controller
- service
- repository
- routes
- validations

Esto permitirá escalar el sistema sin afectar el resto del proyecto.

---

# Flujo General del Sistema

Frontend

↓

React Router

↓

Página

↓

Service

↓

Axios

↓

API REST

↓

Routes

↓

Controllers

↓

Services

↓

Repositories

↓

MongoDB

Este flujo garantiza una separación clara de responsabilidades.

---

# Principios Arquitectónicos Adoptados

Durante toda la evolución del proyecto se seguirán los siguientes principios:

- Arquitectura modular.
- Alta cohesión.
- Bajo acoplamiento.
- Separación de responsabilidades.
- Código reutilizable.
- Escalabilidad horizontal.
- Mantenibilidad.
- Seguridad desde el diseño.
- Documentación continua.
- Evolución incremental.

Estos principios servirán como guía para cualquier nueva funcionalidad incorporada al sistema.

---

# Conclusión

La arquitectura objetivo establece la organización oficial del proyecto y define la responsabilidad de cada componente antes de desarrollar nuevas funcionalidades.

Seguir esta arquitectura permitirá que el sistema pueda crecer de forma ordenada, reduciendo deuda técnica, facilitando el mantenimiento y haciendo posible la incorporación de nuevos módulos sin afectar los existentes.

Este documento constituye el manual de referencia arquitectónica del proyecto y deberá actualizarse únicamente cuando se produzcan cambios estructurales relevantes.