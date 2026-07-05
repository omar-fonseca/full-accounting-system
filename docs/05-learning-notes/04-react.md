# 📘 React

---

# 1. Definición técnica

React es una biblioteca de JavaScript para construir interfaces de usuario basadas en componentes. Fue diseñada para crear vistas declarativas, reactivas y reutilizables, especialmente en aplicaciones de una sola página o interfaces dinámicas con alto nivel de interacción.

React no es un framework completo de backend ni una solución de base de datos. Su foco está en la capa de presentación: cómo se ve la aplicación, cómo responde a los eventos del usuario y cómo se actualiza la interfaz cuando cambian los datos.

---

# 2. Propósito en ingeniería de software

En este proyecto, React cumple el rol de **capa de interfaz de usuario** del sistema de gasolinera. Su propósito es mostrar información operativa de forma clara, interactiva y mantenible, permitiendo que el usuario trabaje con formularios, tablas, paneles y estados visuales sin recargar constantemente la página.

React ayuda a construir una interfaz modular, donde cada parte del sistema puede encapsularse como componente reutilizable. Eso reduce duplicación, mejora la organización y facilita escalar la aplicación cuando aumentan los módulos funcionales.

---

# 3. Problema que resuelve

Antes de React, las interfaces web solían depender de manipulación manual del DOM, lo que generaba código más frágil, menos predecible y difícil de mantener cuando la aplicación crecía.

React resuelve problemas como:

* Actualización manual y compleja de la interfaz.
* Dificultad para mantener estados sincronizados.
* Reutilización limitada de componentes visuales.
* Mezcla excesiva entre lógica de UI y DOM.
* Interfaces poco escalables para aplicaciones grandes.

En el sistema de gasolinera, React permite representar en pantalla ventas, inventarios, usuarios, reportes y formularios de forma ordenada, reactiva y consistente.

---

# 4. Cómo funciona internamente (conceptual)

React se basa en una forma declarativa de trabajar con interfaces. El desarrollador describe el estado deseado de la UI, y React se encarga de calcular qué cambios debe aplicar en la pantalla.

## Conceptos internos clave

### Componentes

La interfaz se divide en piezas reutilizables llamadas componentes. Cada componente representa una porción funcional de la UI.

### Virtual DOM

React mantiene una representación virtual de la interfaz. Cuando el estado cambia, React compara la versión anterior con la nueva para decidir qué actualizar.

### Reconciliación

Es el proceso mediante el cual React determina las diferencias entre el estado anterior y el nuevo, aplicando solo los cambios necesarios.

### Renderizado declarativo

En vez de manipular el DOM paso a paso, React permite declarar cómo debe verse la interfaz en función de los datos.

### Flujo de datos unidireccional

Los datos fluyen de componentes padres a hijos mediante props, lo que hace el sistema más predecible.

Este modelo hace que React sea especialmente útil en aplicaciones con muchas interacciones y cambios de estado, como dashboards, formularios o paneles operativos.

---

# 5. Casos de uso reales

En el sistema de gasolinera, React se utiliza para:

* Mostrar paneles de control con información operativa.
* Renderizar formularios de ventas, usuarios e inventario.
* Listar registros de combustible, transacciones y reportes.
* Actualizar datos en pantalla sin recargar la página.
* Manejar interacción del usuario con la interfaz.
* Organizar componentes reutilizables para distintas vistas.

### Ejemplo práctico

Un operador ingresa una venta de combustible. React puede mostrar el total calculado, validar campos, actualizar el listado y reflejar el resultado en la interfaz sin necesidad de recargar todo el sistema.

---

# 6. Dónde se usa en el stack

React ocupa la capa de frontend del proyecto:

* **Interfaz principal** del sistema de gasolinera.
* **Presentación de datos** provenientes de la API.
* **Gestión de formularios** y estados visuales.
* **Renderizado de componentes** reutilizables.
* **Navegación de vistas** mediante React Router.
* **Consumo de servicios backend** mediante Axios.

React es la cara visible del sistema, donde el usuario interactúa con la lógica operativa del negocio.

---

# 7. Implementación básica

```jsx id="react-basic-01"
function App() {
  return (
    <main>
      <h1>Sistema de Gasolinera</h1>
      <p>Interfaz principal del proyecto</p>
    </main>
  );
}

export default App;
```

## Sintaxis importante

### Componente funcional

```jsx id="react-func-01"
function Saludo() {
  return <h2>Hola React</h2>;
}
```

### JSX

```jsx id="react-jsx-01"
const titulo = <h1>Panel de Control</h1>;
```

### Props

```jsx id="react-props-01"
function Boton({ texto }) {
  return <button>{texto}</button>;
}
```

### Renderizado condicional

```jsx id="react-cond-01"
{isLoggedIn ? <Dashboard /> : <Login />}
```

### Listado de elementos

```jsx id="react-list-01"
{ventas.map((venta) => (
  <li key={venta.id}>{venta.total}</li>
))}
```

Estas construcciones son centrales para cualquier aplicación React real.

---

# 8. Buenas prácticas

En el proyecto de gasolinera, React debe usarse con una organización estricta para que la interfaz no se convierta en un bloque difícil de mantener.

* Dividir la UI en componentes pequeños y reutilizables.
* Mantener la lógica de negocio fuera de la vista cuando sea posible.
* Separar formularios, listas, botones, layouts y módulos por responsabilidad.
* Usar props de forma clara y consistente.
* Controlar el estado de forma centralizada cuando el dato sea compartido.
* Evitar componentes demasiado grandes.
* Usar nombres descriptivos para componentes y variables.
* Renderizar listas con `key` estable.
* Validar datos antes de mostrarlos.
* Mantener la UI alineada con los datos reales del backend.

### Aplicado al sistema de gasolinera

Un módulo de ventas no debería mezclar el formulario, la lista de ventas, la lógica de cálculo y la navegación en un solo componente. React permite separarlo en piezas más limpias: formulario, resumen, tabla, acciones y contenedor principal.

---

# 9. Errores comunes

Los errores más frecuentes al trabajar con React suelen estar relacionados con estado, renderizado y estructura.

* Crear componentes demasiado grandes.
* Mutar estado directamente.
* No usar `key` en listas.
* Mezclar lógica de negocio con visualización.
* No controlar correctamente los formularios.
* Re-renderizados innecesarios por mala organización.
* Usar props de manera confusa.
* No dividir la interfaz por módulos.
* No mantener consistencia entre estado local y datos remotos.
* Olvidar manejar estados de carga y error.

### En el sistema de gasolinera

Si una tabla de ventas no maneja bien su estado, puede mostrar datos incompletos, duplicados o desactualizados. En un sistema operativo real, eso afecta la confiabilidad de la interfaz.

---

# 10. Relación con otras tecnologías del stack

React se conecta con casi todo el ecosistema del proyecto:

* **JavaScript**: base sintáctica de React.
* **Node.js / Express**: backend que sirve los datos.
* **Axios**: cliente HTTP para consumir la API.
* **React Router**: navegación entre vistas.
* **JWT**: autenticación y control de acceso.
* **MongoDB / Mongoose**: origen de los datos que se muestran.
* **Vite**: herramienta de desarrollo y bundling del frontend.

React no funciona aislado; forma la capa de interacción visible sobre la arquitectura completa del sistema.

---

# 11. Resumen técnico

React es la biblioteca de interfaz del sistema de gasolinera. Su función es construir una experiencia de usuario modular, reactiva y escalable, basada en componentes y actualización eficiente de la interfaz.

En este proyecto, React permite representar procesos operativos de forma clara, conectarse al backend mediante APIs y organizar el frontend para que sea mantenible, profesional y fácil de evolucionar.
