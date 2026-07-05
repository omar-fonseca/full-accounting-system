# 📘 Vite

---

# 1. Definición técnica

Vite es una herramienta de build y desarrollo frontend moderna que actúa como servidor de desarrollo y bundler optimizado para aplicaciones web. Está diseñada para ofrecer arranque extremadamente rápido y actualizaciones instantáneas mediante **ES Modules nativos** y un sistema de hot module replacement (HMR).

Vite reemplaza configuraciones tradicionales más pesadas como Webpack en muchos proyectos modernos debido a su simplicidad y rendimiento.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, Vite cumple el rol de **entorno de desarrollo del frontend React**.

Su propósito es:

* Acelerar el desarrollo de la interfaz.
* Proveer recarga instantánea de cambios (HMR).
* Optimizar el empaquetado de producción.
* Simplificar la configuración del frontend.

Desde ingeniería de software, Vite reduce la fricción entre desarrollo y despliegue, permitiendo ciclos de iteración más rápidos en la capa de UI.

---

# 3. Problema que resuelve

Antes de Vite, herramientas como Webpack requerían configuraciones complejas y procesos de build lentos.

Problemas típicos que Vite resuelve:

* Arranque lento del servidor de desarrollo.
* Builds pesados y lentos en proyectos grandes.
* Configuración compleja de bundlers.
* Actualización de cambios lenta en el navegador.
* Alto consumo de recursos durante desarrollo.

En el sistema de gasolinera, esto es crítico porque la interfaz (ventas, inventario, dashboards) cambia constantemente durante el desarrollo.

---

# 4. Cómo funciona internamente (conceptual)

Vite se basa en dos sistemas principales:

## 1. Servidor de desarrollo (dev server)

* Usa ES Modules nativos del navegador.
* No agrupa todo el código al inicio.
* Sirve módulos bajo demanda.

Esto permite que el servidor arranque casi instantáneamente.

## 2. Build de producción

* Utiliza Rollup para empaquetar la aplicación.
* Optimiza, minifica y agrupa los módulos.
* Genera archivos estáticos listos para deploy.

## Hot Module Replacement (HMR)

Vite actualiza únicamente el módulo que cambia sin recargar toda la aplicación.

### Flujo conceptual:

1. El archivo cambia.
2. Vite detecta el cambio.
3. Envía actualización vía WebSocket.
4. El navegador reemplaza solo ese módulo.
5. El estado de la app se mantiene.

Esto es clave para desarrollo rápido en React.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Vite se utiliza para:

* Ejecutar el entorno de desarrollo del frontend React.
* Optimizar la carga de módulos de la interfaz.
* Facilitar pruebas rápidas de componentes.
* Construir la versión de producción del sistema.
* Gestionar variables de entorno del frontend.

### Ejemplo práctico

Cuando se modifica un componente de ventas, Vite actualiza solo ese módulo en el navegador sin recargar todo el sistema, permitiendo iteración inmediata.

---

# 6. Dónde se usa en el stack

Vite se ubica exclusivamente en la capa de frontend:

* **React (interfaz del sistema de gasolinera)**.
* Servidor de desarrollo local.
* Sistema de build de producción.
* Gestión de assets (CSS, imágenes, JS).
* Variables de entorno del frontend (`.env`).

Vite no participa en backend ni base de datos, pero es esencial para la experiencia de desarrollo del frontend.

---

# 7. Implementación básica

## Crear proyecto con Vite + React

```bash
npm create vite@latest gasolinera-frontend
cd gasolinera-frontend
npm install
npm run dev
```

---

## Estructura básica

```text
src/
 ├── main.jsx
 ├── App.jsx
 ├── components/
 ├── pages/
```

---

## Entry point

```jsx id="vite-main-01"
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## Variables de entorno

```env id="vite-env-01"
VITE_API_URL=http://localhost:3000
```

```javascript id="vite-env-use-01"
const apiUrl = import.meta.env.VITE_API_URL;
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, Vite debe usarse para mantener un frontend rápido y limpio:

* Mantener estructura clara de carpetas (`components`, `pages`, `services`).
* Usar variables de entorno para URLs de API.
* Evitar lógica de negocio dentro de configuración de Vite.
* Separar build de producción del entorno de desarrollo.
* Mantener dependencias actualizadas.
* Optimizar assets (imágenes y estilos).
* No sobrecargar el entry point (`main.jsx`).
* Usar HMR para iteración rápida en desarrollo.

### Aplicado al sistema de gasolinera

El rendimiento del entorno de desarrollo es clave porque el sistema incluye módulos complejos como ventas, inventario y reportes. Vite permite iterar sobre estos módulos sin interrupciones.

---

# 9. Errores comunes

Los errores más frecuentes con Vite son de configuración y entorno:

* Confundir variables de entorno (`VITE_` prefix obligatorio).
* Mezclar lógica de backend en el frontend.
* No estructurar correctamente el proyecto React.
* Importaciones incorrectas de módulos ES.
* No separar build de desarrollo.
* No optimizar assets grandes.
* Usar rutas absolutas sin configuración.

### En el sistema de gasolinera

Un error en variables de entorno puede apuntar la API al backend incorrecto, rompiendo completamente el flujo de ventas o inventario en desarrollo.

---

# 10. Relación con otras tecnologías del stack

Vite se integra directamente con el frontend del sistema:

* **React**: framework que Vite ejecuta y optimiza.
* **JavaScript**: lenguaje base del frontend.
* **Axios**: consumo de API backend.
* **React Router**: navegación entre vistas.
* **Node.js / Express**: backend al que Vite conecta.
* **dotenv (frontend env)**: configuración del entorno.
* **MongoDB**: fuente indirecta de datos consumidos.

Vite no es parte de la lógica del sistema, pero sí del flujo de desarrollo y construcción.

---

# 11. Resumen técnico

Vite es el entorno de desarrollo y build system del frontend del sistema de gasolinera. Su función es acelerar el desarrollo de React, optimizar la construcción del proyecto y mejorar la experiencia de desarrollo mediante HMR y un sistema moderno basado en módulos ES.

En este proyecto, Vite permite iteración rápida, estructura limpia y despliegue optimizado de la interfaz del sistema.
