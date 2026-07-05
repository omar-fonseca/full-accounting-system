# 📘 React Router

---

# 1. Definición técnica

React Router es una librería de enrutamiento para aplicaciones React que permite gestionar la navegación entre vistas sin recargar la página. Se basa en el concepto de **Single Page Application (SPA)**, donde el contenido cambia dinámicamente en el cliente sin hacer solicitudes completas al servidor para cada navegación.

React Router controla qué componente se renderiza en función de la URL actual del navegador.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, React Router cumple el rol de **gestor de navegación del frontend**. Su propósito es estructurar la aplicación en módulos visuales (pantallas) como ventas, inventario, usuarios y reportes, permitiendo una experiencia fluida sin recargas.

Desde una perspectiva de ingeniería, permite:

* Separar la interfaz en rutas funcionales.
* Organizar el frontend como un sistema modular.
* Simular navegación tradicional en una SPA.
* Mantener sincronización entre URL y estado visual.

---

# 3. Problema que resuelve

Antes de React Router, las aplicaciones React no tenían una forma estándar de gestionar navegación entre vistas.

Esto generaba problemas como:

* Navegación manual compleja.
* Recarga completa de la aplicación para cambiar de vista.
* Falta de persistencia de estado entre páginas.
* Dificultad para estructurar aplicaciones grandes.

React Router resuelve esto proporcionando un sistema de rutas declarativas que mapean URLs a componentes.

En el sistema de gasolinera, esto permite moverse entre módulos como ventas, inventario y administración sin interrumpir el flujo operativo.

---

# 4. Cómo funciona internamente (conceptual)

React Router funciona interceptando los cambios de URL en el navegador y sincronizándolos con el árbol de componentes de React.

## Conceptos clave

### Router

Es el contenedor principal que habilita el sistema de navegación.

### Route

Define qué componente se debe renderizar para una URL específica.

### Link

Permite navegar entre rutas sin recargar la página.

### History API

React Router utiliza la API del navegador para modificar la URL sin hacer refresh.

### Matching de rutas

El sistema compara la URL actual con las rutas definidas y renderiza el componente correspondiente.

## Flujo conceptual

1. Usuario cambia de URL o hace clic en un Link.
2. React Router intercepta el cambio.
3. Se actualiza el estado interno de navegación.
4. Se renderiza el componente correspondiente.
5. La aplicación no se recarga.

---

# 5. Casos de uso reales

En el sistema de gasolinera, React Router se usa para:

* Navegar entre el dashboard y módulos operativos.
* Cambiar entre vistas de ventas, inventario y usuarios.
* Acceder a páginas de reportes y análisis.
* Proteger rutas según autenticación de usuario.
* Manejar páginas de login y acceso.
* Estructurar el sistema en módulos independientes.

### Ejemplo práctico

Un usuario autenticado entra al sistema y navega desde el dashboard hacia el módulo de ventas sin recargar la aplicación. React Router cambia la vista manteniendo el estado general de la aplicación.

---

# 6. Dónde se usa en el stack

React Router se encuentra en la capa de frontend:

* **Interfaz del sistema de gasolinera (React)**.
* **Navegación entre módulos funcionales**.
* **Gestión de vistas protegidas (auth routes)**.
* **Organización de páginas del sistema**.
* **Integración con autenticación JWT para rutas privadas**.

React Router no interactúa directamente con el backend, pero define cómo el usuario accede a las funcionalidades expuestas por él.

---

# 7. Implementación básica

```jsx id="router-basic-01"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ventas" element={<Ventas />} />
        <Route path="/inventario" element={<Inventario />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Sintaxis importante

### BrowserRouter

```jsx id="router-browser-01"
<BrowserRouter>
```

Activa el sistema de rutas basado en la History API del navegador.

---

### Routes y Route

```jsx id="router-routes-01"
<Routes>
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
```

Define el mapeo entre URL y componente.

---

### Link

```jsx id="router-link-01"
import { Link } from "react-router-dom";

<Link to="/ventas">Ir a Ventas</Link>
```

Permite navegación sin recarga.

---

### Rutas dinámicas

```jsx id="router-dynamic-01"
<Route path="/usuario/:id" element={<Usuario />} />
```

Permite capturar parámetros desde la URL.

---

# 8. Buenas prácticas

En el sistema de gasolinera, React Router debe usarse con una estructura clara de módulos y responsabilidades.

* Definir rutas por módulos funcionales (ventas, inventario, usuarios).
* Separar rutas públicas y privadas.
* Usar rutas protegidas para autenticación.
* Evitar lógica de negocio dentro de rutas.
* Mantener estructura de navegación consistente.
* Usar rutas dinámicas solo cuando sea necesario.
* Centralizar la configuración de rutas en un solo archivo.
* Asegurar que cada ruta represente una vista clara del sistema.

### Aplicado al sistema de gasolinera

El módulo de ventas no debe mezclarse con inventario o usuarios en la misma ruta. Cada uno debe ser una entidad independiente dentro del sistema de navegación para evitar confusión operativa.

---

# 9. Errores comunes

Los errores más frecuentes en React Router son de diseño de arquitectura de navegación.

* No estructurar rutas por módulos.
* Mezclar rutas públicas y privadas sin control.
* No manejar rutas inexistentes (404).
* Usar navegación con recarga en lugar de `Link`.
* No proteger rutas sensibles.
* Crear estructuras de rutas demasiado profundas.
* No mantener coherencia entre URL y estado de la app.
* Hardcodear rutas en múltiples archivos.

### En el sistema de gasolinera

Una mala estructura de rutas puede hacer que el sistema sea confuso para el usuario operativo, especialmente en módulos críticos como ventas o inventario.

---

# 10. Relación con otras tecnologías del stack

React Router se integra con varias partes del sistema:

* **React**: base de componentes visuales.
* **JavaScript**: lógica de navegación.
* **Node.js / Express**: backend que provee datos según la ruta.
* **JWT**: control de acceso a rutas privadas.
* **Axios**: consumo de datos al cambiar de vistas.
* **MongoDB / Mongoose**: origen de datos mostrados en cada ruta.
* **Vite**: entorno de desarrollo del frontend.

React Router no es independiente; organiza cómo el frontend consume toda la arquitectura del sistema.

---

# 11. Resumen técnico

React Router es el sistema de navegación del frontend del sistema de gasolinera. Permite estructurar la aplicación en módulos visuales, gestionar rutas sin recarga y sincronizar la URL con la interfaz.

En este proyecto, su función es transformar la aplicación en una experiencia tipo sistema operativo web, donde cada módulo (ventas, inventario, usuarios) funciona como una unidad independiente dentro de una arquitectura SPA coherente.
