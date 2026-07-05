# 📘 Git

---

# 1. Definición técnica

Git es un sistema de control de versiones distribuido (DVCS) diseñado para rastrear cambios en archivos de código fuente a lo largo del tiempo. Permite registrar estados del proyecto, trabajar en paralelo mediante ramas (branches) y colaborar sin sobrescribir el trabajo de otros desarrolladores.

Git almacena snapshots del estado del proyecto en forma de commits, no diferencias lineales, lo que lo hace altamente eficiente y robusto.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, Git cumple el rol de **sistema de control, trazabilidad y evolución del código fuente**.

Su propósito es:

* Registrar la evolución completa del sistema.
* Permitir desarrollo paralelo por módulos.
* Facilitar rollback a estados estables.
* Controlar versiones de backend y frontend.
* Habilitar colaboración estructurada.

Desde ingeniería de software, Git es una herramienta de gobernanza técnica del código.

---

# 3. Problema que resuelve

Antes de Git, el desarrollo de software enfrentaba problemas como:

* Pérdida de versiones anteriores del código.
* Conflictos al trabajar múltiples desarrolladores.
* Dificultad para experimentar sin riesgo.
* Falta de historial de cambios.
* Imposibilidad de revertir errores fácilmente.

Git resuelve esto mediante:

* Historial completo de cambios.
* Ramas independientes de desarrollo.
* Fusión controlada de código (merge).
* Identificación precisa de cambios por autor y fecha.

En el sistema de gasolinera, esto permite trabajar simultáneamente en módulos como ventas, inventario y autenticación sin conflictos.

---

# 4. Cómo funciona internamente (conceptual)

Git funciona como una base de datos de snapshots del proyecto.

## Elementos principales

### Working Directory

Archivos actuales en desarrollo.

### Staging Area

Área intermedia donde se preparan cambios.

### Repository

Historial completo de commits.

---

## Commit

Un commit es una captura del estado del proyecto en un momento específico.

Cada commit incluye:

* Identificador único (hash SHA-1)
* Autor
* Fecha
* Mensaje descriptivo
* Snapshot del proyecto

---

## Branching

Git permite crear ramas independientes del flujo principal:

* `main`: versión estable.
* `develop`: desarrollo general.
* `feature/*`: nuevas funcionalidades.
* `hotfix/*`: correcciones urgentes.

---

## Merge

Proceso de combinar cambios de diferentes ramas en una sola línea de desarrollo.

---

## Flujo conceptual

1. Modificación de archivos.
2. `git add` → staging.
3. `git commit` → snapshot.
4. `git push` → repositorio remoto.
5. Integración con otras ramas.

---

# 5. Casos de uso reales

En el sistema de gasolinera, Git se utiliza para:

* Desarrollo paralelo de frontend y backend.
* Control de versiones del sistema completo.
* Registro de cambios en módulos críticos.
* Implementación de nuevas funcionalidades.
* Corrección de bugs en producción.
* Auditoría de cambios en el sistema.

### Ejemplo práctico

Un desarrollador implementa el módulo de ventas en una rama `feature/ventas`, mientras otro trabaja en inventario sin interferir. Luego se integran mediante merge.

---

# 6. Dónde se usa en el stack

Git no pertenece al runtime del sistema, pero es esencial en todo el ciclo de desarrollo:

* **Frontend (React)**: control de versiones de UI.
* **Backend (Node.js / Express)**: control de API.
* **MongoDB schemas**: evolución de modelos de datos.
* **DevOps / Deploy**: integración continua (CI/CD).
* **Vite build system**: versiones del frontend.

Git es transversal a todo el sistema de gasolinera.

---

# 7. Implementación básica

## Inicializar repositorio

```bash id="git-init-01"
git init
```

---

## Clonar repositorio

```bash id="git-clone-01"
git clone https://github.com/usuario/gasolinera.git
```

---

## Ver estado

```bash id="git-status-01"
git status
```

---

## Añadir cambios

```bash id="git-add-01"
git add .
```

---

## Crear commit

```bash id="git-commit-01"
git commit -m "Implementación módulo de ventas"
```

---

## Enviar a remoto

```bash id="git-push-01"
git push origin main
```

---

## Crear rama

```bash id="git-branch-01"
git checkout -b feature/inventario
```

---

## Cambiar de rama

```bash id="git-checkout-01"
git checkout main
```

---

## Fusionar ramas

```bash id="git-merge-01"
git merge feature/ventas
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, Git debe utilizarse con disciplina arquitectónica:

* Usar ramas por funcionalidad (feature-based).
* Mantener `main` siempre estable.
* Escribir mensajes de commit descriptivos.
* Hacer commits pequeños y atómicos.
* Evitar commits con múltiples cambios no relacionados.
* Usar `.gitignore` correctamente.
* Revisar código antes de merge (pull requests).
* Sincronizar cambios frecuentemente.
* Documentar decisiones en commits o README.

### Aplicado al sistema de gasolinera

Cada módulo (ventas, inventario, usuarios) debe desarrollarse en ramas separadas para evitar conflictos y mantener trazabilidad clara.

---

# 9. Errores comunes

Los errores más frecuentes en Git son de flujo de trabajo:

* Trabajar directamente en `main`.
* Hacer commits demasiado grandes.
* Mensajes de commit poco descriptivos.
* No usar ramas para features.
* Resolver conflictos sin entender el origen.
* No sincronizar con el repositorio remoto.
* Ignorar archivos sensibles en `.gitignore`.
* No revisar cambios antes de hacer merge.

### En el sistema de gasolinera

Un mal uso de Git puede romper integración entre módulos críticos como ventas e inventario.

---

# 10. Relación con otras tecnologías del stack

Git es transversal a todo el sistema:

* **React**: versionado del frontend.
* **Node.js / Express**: versionado del backend.
* **MongoDB schemas**: control de evolución del modelo de datos.
* **Vite**: control del build frontend.
* **JWT / dotenv**: gestión de configuraciones sensibles (no versionadas).
* **CI/CD pipelines**: despliegue automático desde Git.

Git es la columna vertebral del ciclo de vida del software.

---

# 11. Resumen técnico

Git es el sistema de control de versiones del sistema de gasolinera. Permite gestionar la evolución del código, trabajar en paralelo y mantener trazabilidad completa de todos los cambios del sistema.

En este proyecto, Git garantiza orden, control y escalabilidad en el desarrollo de todos los módulos, desde frontend hasta backend y base de datos.
