# 📘 React Hooks

---

# 1. Definición técnica

React Hooks son funciones especiales introducidas en React que permiten utilizar estado, ciclo de vida y otras características de React dentro de componentes funcionales.

Antes de Hooks, estas capacidades solo estaban disponibles en componentes de clase. Con Hooks, React unifica el modelo hacia funciones, haciendo el código más modular, reutilizable y legible.

Hooks fundamentales incluyen: `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef` y `useContext`.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, React Hooks permiten manejar **estado y lógica reactiva de la interfaz** sin necesidad de componentes de clase.

Su propósito es:

* Controlar el estado de la UI (formularios, tablas, filtros).
* Manejar efectos secundarios (llamadas a APIs, sincronización de datos).
* Optimizar rendimiento de la interfaz.
* Compartir lógica entre componentes sin duplicación.

Desde una perspectiva de ingeniería, Hooks permiten separar lógica funcional de la estructura visual, lo cual mejora mantenibilidad y escalabilidad del frontend.

---

# 3. Problema que resuelve

Antes de Hooks, React presentaba problemas estructurales con componentes de clase:

* Código más verboso y difícil de mantener.
* Lógica duplicada entre métodos de ciclo de vida.
* Difícil reutilización de lógica entre componentes.
* Alto acoplamiento entre estado y UI.

Hooks resuelven esto permitiendo:

* Funciones más limpias y reutilizables.
* Encapsulación de lógica en funciones personalizadas.
* Mejor separación de responsabilidades.
* Simplificación del flujo de datos en la UI.

En el sistema de gasolinera, esto evita componentes complejos para formularios de ventas, inventario o autenticación.

---

# 4. Cómo funciona internamente (conceptual)

React Hooks funcionan mediante un sistema interno de **registro de llamadas ordenadas** dentro del ciclo de renderizado.

## Principio clave

React asocia cada Hook con una posición específica dentro del componente. Por eso:

* Los Hooks deben ejecutarse siempre en el mismo orden.
* No pueden estar dentro de condicionales o bucles.

## Modelo conceptual

### useState

Mantiene un estado interno asociado al componente.

### useEffect

Ejecuta efectos secundarios después del renderizado.

### useRef

Mantiene referencias mutables sin causar re-render.

### useMemo

Memoiza cálculos costosos para evitar recomputación.

### useCallback

Memoiza funciones para evitar recreaciones innecesarias.

## Ciclo general

1. Render del componente.
2. Ejecución de Hooks en orden.
3. React almacena estado asociado.
4. Actualización de UI si el estado cambia.
5. Re-render controlado.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Hooks se utilizan en múltiples escenarios:

* Manejo de formularios de ventas de combustible.
* Control de estado de inventario en tiempo real.
* Consumo de API de backend.
* Autenticación de usuarios.
* Filtros dinámicos en tablas de datos.
* Control de loaders y estados de carga.
* Optimización de renders en dashboards.

### Ejemplo práctico

Un operador ingresa litros de combustible en un formulario. `useState` guarda el valor, `useEffect` valida el cálculo del total, y la interfaz se actualiza automáticamente sin recargar la página.

---

# 6. Dónde se usa en el stack

React Hooks se utilizan exclusivamente en la capa de frontend:

* **React (UI del sistema de gasolinera)**.
* Manejo de estado local y global.
* Integración con APIs mediante Axios.
* Control de navegación con React Router.
* Gestión de autenticación JWT en frontend.
* Optimización de rendimiento de componentes.

Hooks son el núcleo funcional de la lógica en React.

---

# 7. Implementación básica

## useState

```jsx id="hooks-usestate-01"
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => setContador(contador + 1)}>
      Valor: {contador}
    </button>
  );
}
```

---

## useEffect

```jsx id="hooks-useeffect-01"
import { useEffect, useState } from "react";

function Ventas() {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    fetch("/api/ventas")
      .then(res => res.json())
      .then(data => setVentas(data));
  }, []);

  return <div>Total ventas: {ventas.length}</div>;
}
```

---

## useRef

```jsx id="hooks-useref-01"
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const enfocar = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={enfocar}>Focus</button>
    </>
  );
}
```

---

## useMemo

```jsx id="hooks-usememo-01"
import { useMemo } from "react";

function Total({ ventas }) {
  const total = useMemo(() => {
    return ventas.reduce((acc, v) => acc + v.total, 0);
  }, [ventas]);

  return <div>Total: {total}</div>;
}
```

---

## useCallback

```jsx id="hooks-usecallback-01"
import { useCallback } from "react";

function Boton({ onClick }) {
  const handler = useCallback(() => {
    onClick();
  }, [onClick]);

  return <button onClick={handler}>Ejecutar</button>;
}
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, el uso de Hooks debe seguir principios de claridad y control de estado:

* Usar `useState` solo para estado local necesario.
* Evitar lógica compleja dentro de componentes.
* Centralizar lógica reutilizable en hooks personalizados.
* Usar `useEffect` solo para efectos secundarios reales.
* Evitar dependencias incorrectas en arrays de `useEffect`.
* Optimizar renders con `useMemo` y `useCallback` solo cuando sea necesario.
* Mantener hooks personalizados para lógica de negocio del frontend.
* No mezclar UI con lógica de API.

### Aplicado al sistema de gasolinera

La lógica de cálculo de ventas, filtros de inventario y autenticación no debe duplicarse en múltiples componentes. Hooks permiten encapsular esa lógica de forma reutilizable.

---

# 9. Errores comunes

Los errores más frecuentes con Hooks son estructurales y de rendimiento:

* Usar Hooks dentro de condicionales o bucles.
* Dependencias incorrectas en `useEffect`.
* Sobreuso de `useMemo` o `useCallback`.
* Mezclar lógica compleja dentro del componente.
* Mutar estado directamente.
* Crear efectos infinitos.
* No limpiar efectos cuando es necesario.
* Duplicar lógica en múltiples componentes.

### En el sistema de gasolinera

Un `useEffect` mal configurado puede generar múltiples llamadas innecesarias a la API de ventas, afectando rendimiento y consistencia de datos.

---

# 10. Relación con otras tecnologías del stack

React Hooks se integran con todo el frontend del sistema:

* **React**: base de ejecución de Hooks.
* **JavaScript**: lenguaje que implementa la lógica.
* **React Router**: Hooks como `useNavigate` o `useParams`.
* **Axios**: consumo de APIs dentro de `useEffect`.
* **Node.js / Express**: backend que responde a los Hooks.
* **JWT**: gestión de autenticación desde hooks de estado.
* **MongoDB / Mongoose**: origen de los datos consumidos.

Hooks son el puente entre la lógica de backend y la experiencia del usuario.

---

# 11. Resumen técnico

React Hooks son el mecanismo principal para gestionar estado, efectos y lógica en componentes funcionales de React. En el sistema de gasolinera permiten construir una interfaz reactiva, modular y optimizada, donde la lógica de negocio del frontend se encapsula de forma reutilizable y controlada.

Su uso correcto define directamente la calidad arquitectónica del frontend.
