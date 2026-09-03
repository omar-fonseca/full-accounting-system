# 📘 ESLint

---

# 1. Definición técnica

ESLint es una herramienta de análisis estático de código para JavaScript y TypeScript que identifica patrones problemáticos, errores potenciales y desviaciones de estilo antes de ejecutar el código.

Funciona mediante reglas configurables que analizan el código fuente sin ejecutarlo, detectando problemas de sintaxis, calidad y consistencia.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, ESLint cumple el rol de **sistema automatizado de control de calidad del código fuente**.

Su propósito es:

* Mantener consistencia en el estilo del código.
* Detectar errores antes de runtime.
* Evitar malas prácticas de programación.
* Estandarizar el trabajo entre múltiples desarrolladores.
* Mejorar la mantenibilidad del sistema.

Desde ingeniería de software, ESLint actúa como una capa de validación preventiva dentro del ciclo de desarrollo.

---

# 3. Problema que resuelve

Sin herramientas como ESLint, los proyectos enfrentan problemas como:

* Inconsistencia en el estilo de código entre desarrolladores.
* Errores de sintaxis no detectados hasta ejecución.
* Código difícil de leer y mantener.
* Prácticas inseguras o ineficientes.
* Dificultad para escalar equipos de desarrollo.

En el sistema de gasolinera, esto es crítico porque múltiples módulos (ventas, inventario, usuarios) deben mantener coherencia estructural.

---

# 4. Cómo funciona internamente (conceptual)

ESLint analiza el código fuente mediante un proceso de **parsing y evaluación de reglas**.

## Flujo interno

1. ESLint recibe el archivo de código.
2. Convierte el código en un **AST (Abstract Syntax Tree)**.
3. Aplica reglas definidas sobre el AST.
4. Detecta violaciones de estilo o errores.
5. Reporta advertencias o errores.

---

## AST (Árbol de Sintaxis Abstracta)

Representa el código como una estructura jerárquica:

* Funciones
* Variables
* Expresiones
* Condicionales

Esto permite analizar el código sin ejecutarlo.

---

## Reglas

ESLint funciona mediante reglas como:

* `no-unused-vars`
* `no-undef`
* `semi`
* `eqeqeq`
* `no-console`

Estas reglas pueden ser estándar o personalizadas.

---

# 5. Casos de uso reales

En el sistema de gasolinera, ESLint se utiliza para:

* Validar código del frontend (React).
* Validar lógica del backend (Node.js).
* Detectar errores antes de ejecutar el sistema.
* Mantener consistencia en módulos de ventas e inventario.
* Evitar variables o funciones no utilizadas.
* Estandarizar estilo de código entre desarrolladores.

### Ejemplo práctico

Un desarrollador crea una función en el módulo de ventas pero olvida usar una variable. ESLint detecta el problema antes de ejecutar la aplicación.

---

# 6. Dónde se usa en el stack

ESLint se aplica en toda la capa de desarrollo JavaScript:

* **React (frontend)**: validación de componentes.
* **Node.js / Express (backend)**: validación de lógica de servidor.
* **Vite**: integración en el entorno de desarrollo.
* **Git workflow**: pre-commit hooks.
* **CI/CD pipelines**: validación automática antes de deploy.

ESLint no es parte del runtime, sino del proceso de desarrollo.

---

# 7. Implementación básica

## Instalación

```bash id="eslint-install-01"
npm install eslint --save-dev
```

---

## Inicialización

```bash id="eslint-init-01"
npx eslint --init
```

---

## Configuración básica

```javascript id="eslint-config-01"
module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: "eslint:recommended",
  rules: {
    semi: ["error", "always"],
    "no-unused-vars": "warn",
    eqeqeq: "error"
  }
};
```

---

## Uso en archivo

```javascript id="eslint-example-01"
function sumar(a, b) {
  return a + b;
}

sumar(5, 3);
```

---

## Ejecución

```bash id="eslint-run-01"
npx eslint .
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, ESLint debe ser un estándar obligatorio:

* Usar configuración compartida en todo el proyecto.
* Activar reglas estrictas en producción.
* Integrar ESLint con el editor (VS Code).
* Ejecutar ESLint antes de commits.
* Mantener reglas consistentes entre frontend y backend.
* Evitar desactivar reglas sin justificación.
* Usar presets como Airbnb o Standard si es necesario.
* Automatizar linting en CI/CD.

### Aplicado al sistema de gasolinera

Todos los módulos (ventas, inventario, autenticación) deben cumplir las mismas reglas de calidad para evitar inconsistencias estructurales.

---

# 9. Errores comunes

Los errores más frecuentes con ESLint son de configuración:

* Ignorar ESLint en partes del proyecto.
* Desactivar reglas sin criterio técnico.
* No integrarlo en el flujo de desarrollo.
* Configuración inconsistente entre entornos.
* No corregir warnings recurrentes.
* Usar ESLint solo al final del proyecto.
* Confundir errores de lint con errores de runtime.

### En el sistema de gasolinera

Un mal uso de ESLint puede permitir que código inconsistente llegue a producción, afectando módulos críticos como ventas o inventario.

---

# 10. Relación con otras tecnologías del stack

ESLint se integra con todo el ecosistema:

* **JavaScript**: lenguaje que analiza.
* **React**: componentes frontend validados.
* **Node.js / Express**: backend validado.
* **Vite**: entorno de desarrollo.
* **Git**: hooks de pre-commit.
* **CI/CD**: validación automática.
* **Axios / MongoDB logic**: código analizado indirectamente.

---

# 11. Estado verificado en este proyecto

Al ejecutar `npm run lint` desde `frontend/`, ESLint reportó 4 errores y 2 advertencias. Los errores corresponden a validación de props ausente en `ProtectedRoute` y `AuthContext`, y a variables no utilizadas en `AuthContext` y `apiClient`. Las advertencias corresponden a dependencias de `useMemo` y a la regla de Fast Refresh.

Esto enseña una distinción importante: que ESLint esté configurado no significa que el código esté libre de incidencias. En esta auditoría se documentó el resultado, pero no se modificó código.

ESLint actúa como guardián de calidad del código.

---

# 11. Resumen técnico

ESLint es la herramienta de análisis estático del sistema de gasolinera. Permite detectar errores, estandarizar código y mejorar la calidad del desarrollo antes de la ejecución.

En este proyecto, ESLint garantiza que tanto frontend como backend mantengan consistencia, legibilidad y buenas prácticas de ingeniería de software en todos los módulos del sistema.
