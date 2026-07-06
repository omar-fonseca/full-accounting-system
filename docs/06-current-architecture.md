# 06. Current Architecture (AS-IS)

## 1. Introducción

### Objetivo del documento

Este documento describe la arquitectura actual del proyecto Full Accounting System antes de iniciar la fase de reestructuración arquitectónica.

Su propósito es servir como línea base técnica (AS-IS), permitiendo comprender cómo se encuentra organizado el sistema actualmente, identificar fortalezas, detectar oportunidades de mejora y facilitar la evolución hacia una arquitectura más modular y escalable.

No pretende proponer cambios, sino documentar de forma precisa el estado actual del proyecto.

---

## 2. Visión General

Actualmente el proyecto está dividido en dos aplicaciones independientes:

- Frontend
- Backend

Ambas aplicaciones se comunican mediante una API REST desarrollada con Express.

La persistencia de datos se realiza utilizando MongoDB Atlas mediante Mongoose.

La autenticación utiliza JSON Web Tokens (JWT).

La comunicación entre frontend y backend se realiza mediante Axios.

La estructura general es la siguiente:

full-accounting-system/
│
├── backend/
└── frontend/

---

## 3. Arquitectura General

[Diagrama en texto]

Usuario

↓

Frontend React

↓

Axios

↓

Express API

↓

Controllers

↓

Models (Mongoose)

↓

MongoDB Atlas

---

## 4. Arquitectura Actual del Backend

### 4.1 Descripción general

Actualmente el backend utiliza una arquitectura sencilla basada en capas.

Su organización es la siguiente:

backend/

app.js

controllers/

models/

routes/

package.json

Aunque esta estructura funciona correctamente para proyectos pequeños, aún no separa completamente las responsabilidades del negocio, acceso a datos y configuración del sistema.

---

## 4.2 app.js

Responsabilidad

Es el punto de entrada del backend.

Funciones

• Inicializa Express

• Configura middleware

• Conecta MongoDB

• Registra rutas

• Inicia el servidor

¿Por qué existe?

Todo servidor necesita un punto de inicio desde donde se configure la aplicación.

---

## 4.3 controllers/

Responsabilidad

Implementan la lógica de negocio de cada petición HTTP.

Actualmente contiene:

authController.js

usuarioController.js

Funciones

• Registrar usuarios

• Iniciar sesión

• Validaciones

• Respuestas HTTP

Observación

Actualmente mezclan lógica de negocio con acceso a datos.

En futuras fases esta responsabilidad será separada.

---

## 4.4 models/

Responsabilidad

Define la estructura de los documentos almacenados en MongoDB.

Actualmente:

usuario.js

Contiene

Schema

Validaciones

Modelo Mongoose

---

## 4.5 routes/

Responsabilidad

Define las rutas públicas de la API.

Actualmente:

authUsuarios.js

Aquí solamente se definen endpoints y el controlador correspondiente.

---

## 4.6 package.json

Gestiona:

Dependencias

Scripts

Versión del proyecto

Información del paquete

---

## 5. Arquitectura Actual del Frontend

### 5.1 Descripción general

El frontend fue reorganizado recientemente siguiendo un enfoque de separación inicial de responsabilidades.

Actualmente dispone de una estructura más organizada que la versión original.

---

## 5.2 src/

Representa el código fuente principal de la aplicación React.

---

## 5.3 app/

Responsabilidad

Contiene la aplicación principal.

Actualmente:

App.jsx

Es el componente raíz del sistema.

---

## 5.4 pages/

Responsabilidad

Agrupa las páginas principales del sistema.

Actualmente existen:

HomePage

LoginRegisterPage

AdminDashboardPage

Cada carpeta representa una pantalla completa.

---

## 5.5 HomePage/components/

Responsabilidad

Componentes exclusivos de Home.

Header

Hero

Footer

Info

Testimonials

AdminSection

CrearCuenta

Estos componentes no deberían reutilizarse fuera de Home.

---

## 5.6 services/

Responsabilidad

Centraliza la comunicación con el backend.

Actualmente:

api.js

Aquí se configura Axios.

---

## 5.7 hooks/

Preparada para futuros Hooks personalizados.

Actualmente vacía.

---

## 5.8 contexts/

Preparada para Context API.

Actualmente vacía.

---

## 5.9 features/

Preparada para organizar funcionalidades de negocio.

Actualmente vacía.

---

## 5.10 layouts/

Preparada para layouts reutilizables.

Actualmente vacía.

---

## 5.11 styles/

Centraliza los estilos del sistema.

pages/

shared/

---

## 5.12 utils/

Preparada para funciones auxiliares.

---

## 5.13 config/

Reservada para configuración de la aplicación.

---

## 5.14 constants/

Reservada para constantes globales.

---

## 6. Flujo Actual de una Petición

Usuario

↓

HomePage

↓

Axios

↓

Express

↓

Controller

↓

Model

↓

MongoDB

↓

Respuesta JSON

↓

React

---

## 7. Fortalezas de la Arquitectura Actual

• Proyecto modularizado parcialmente.

• Separación inicial entre frontend y backend.

• Comunicación mediante API REST.

• MongoDB desacoplado del frontend.

• Axios centralizado.

• React organizado por páginas.

• Documentación técnica consolidada.

---

## 8. Debilidades Identificadas

Backend aún concentra demasiadas responsabilidades.

No existe separación entre servicios y controladores.

No existe capa de middleware.

No existe capa de validaciones.

No existe carpeta config.

No existe manejo global de errores.

No existe estructura basada en dominios.

---

## 9. Deuda Técnica

Lista detallada de los puntos que deberán corregirse durante la migración arquitectónica.

---

## 10. Conclusiones

La arquitectura actual representa una base estable y funcional para un proyecto en crecimiento.

Las recientes tareas de estabilización, reorganización del frontend y consolidación de la documentación han reducido significativamente la deuda técnica inicial y preparado el sistema para una evolución controlada.

Sin embargo, antes de incorporar nuevos módulos funcionales (inventario, combustible, ventas, turnos, reportes, etc.), es necesario realizar una reestructuración arquitectónica que fortalezca especialmente el backend y consolide una organización por dominios.

Este documento constituye la referencia oficial del estado actual (AS-IS) del proyecto y servirá como punto de comparación para la futura arquitectura objetivo (TO-BE), documentada en el archivo `07-target-architecture.md`.