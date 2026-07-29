# Informe técnico de refactorización del módulo Landing/Home

## 1. Objetivo de la refactorización

La refactorización del módulo Landing/Home tuvo como propósito principal corregir y estabilizar la experiencia inicial del sistema, transformando una implementación preliminar poco estructurada en una base frontend más modular, mantenible y alineada con los principios de arquitectura de software esperados para un proyecto escalable.

### Problemas de la versión anterior

La versión anterior presentaba varios problemas técnicos y de diseño:

- La interfaz de la landing estaba funcional, pero su estructura era limitada y poco escalable.
- El código estaba concentrado en una lógica visual poco desacoplada, dificultando mantenimiento.
- La organización de estilos no estaba bien separada entre tema global y estilos específicos de página.
- El tema claro/oscuro no estaba suficientemente formalizado ni centralizado.
- El componente de cabecera y el footer estaban fuertemente acoplados al flujo visual de la landing.
- Existían riesgos de duplicación de lógica y de pérdida de coherencia cuando se incorporaran nuevos módulos.
- No existía una separación clara entre layout compartido, secciones de la landing y componentes reutilizables.

### Objetivos buscados

Los objetivos de la refactorización fueron:

- Mejorar la arquitectura frontend sin romper el funcionamiento existente.
- Separar responsabilidades entre layout, secciones, componentes UI y estilos.
- Introducir un modelo de tema global consistente para soporte claro/oscuro.
- Reducir el acoplamiento entre componentes y facilitar la evolución futura.
- Preparar la base para integrar módulos adicionales como autenticación, servicios, contacto y dashboard.
- Mejorar la calidad de la experiencia visual y la mantenibilidad del código.
- Garantizar estabilidad mediante validaciones de compilación y lint.

---

## 2. Arquitectura antes (AS-IS)

Antes de iniciar la refactorización, la landing se encontraba implementada de forma básica dentro del frontend React/Vite. La organización estaba orientada a una estructura inicial simple y funcional, pero no todavía suficientemente modular para crecer.

### Estructura previa relevante

La estructura inicial del frontend se organizaba de la siguiente manera:

- frontend/src/
  - App.jsx
  - main.jsx
  - features/
    - auth/
    - dashboard/
    - home/
  - styles/
    - pages/

### Archivos predominantes en la landing previa

Los archivos relacionados con la landing se concentraban principalmente en:

- frontend/src/features/home/HomePage.jsx
- frontend/src/features/home/components/*
- frontend/src/styles/pages/HomeInicial.css
- frontend/src/styles/pages/HomePage.css

### Responsabilidades previas

- HomePage asumía la responsabilidad de montar la landing como una composición directa de varias secciones.
- Los componentes visuales se encargaban de renderizar contenido estático y de llamar a navegación básica.
- Los estilos estaban dispersos entre CSS generales y CSS de página.
- El tema visual estaba implementado de manera limitada y no estaba centralizado como una infraestructura reusable.
- El layout no estaba aislado del contenido de la landing.

### Flujo anterior

El flujo inicial era relativamente simple:

1. React arrancaba desde App.
2. App renderizaba la página principal.
3. HomePage ensamblaba la landing mediante varios componentes de sección.
4. La navegación ocurría mediante botones y enlaces directos.
5. El estilo se aplicaba desde hojas CSS separadas, pero sin una división muy estricta entre theme y layout.

Este modelo permitía ver la landing, pero no ofrecía una base de escalabilidad suficiente para nuevos módulos o cambios frecuentes.

---

## 3. Arquitectura después (TO-BE)

La arquitectura después de la refactorización fue reorganizada para mejorar modularidad, reutilización de componentes y separación de responsabilidades.

### Principios de diseño aplicados

La nueva estructura buscó:

- Separación entre layout general, páginas y componentes de UI.
- Reutilización de componentes de interfaz.
- Centralización del tema visual.
- Organización de estilos por responsabilidad.
- Mejor claridad para futuras extensiones.

### Árbol completo de carpetas resultante

```text
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   ├── layouts/
│   │   │   └── MainLayout.jsx
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── IconButton.jsx
│   │       └── ThemeToggle.jsx
│   ├── features/
│   │   ├── auth/
│   │   │   └── LoginRegisterPage.jsx
│   │   ├── dashboard/
│   │   │   └── AdminDashboardPage.jsx
│   │   └── home/
│   │       ├── HomePage.jsx
│   │       └── components/
│   │           ├── AdminSection.jsx
│   │           ├── CrearCuenta.jsx
│   │           ├── Footer.jsx
│   │           ├── Header.jsx
│   │           ├── Hero.jsx
│   │           ├── Info.jsx
│   │           └── Testimonials.jsx
│   ├── hooks/
│   │   └── useTheme.jsx
│   ├── services/
│   │   └── apiClient.js
│   └── styles/
│       ├── pages/
│       │   ├── AdminDashboard.css
│       │   ├── App.css
│       │   ├── HomeInicial.css
│       │   ├── HomePage.css
│       │   └── LoginRegister.css
│       └── theme.css
```

### Archivos nuevos

Los archivos nuevos creados o incorporados de forma estructural fueron:

- frontend/src/components/layouts/MainLayout.jsx
- frontend/src/components/ui/Badge.jsx
- frontend/src/components/ui/Button.jsx
- frontend/src/components/ui/Card.jsx
- frontend/src/components/ui/IconButton.jsx
- frontend/src/components/ui/ThemeToggle.jsx
- frontend/src/hooks/useTheme.jsx
- frontend/src/styles/theme.css
- frontend/src/styles/pages/HomePage.css
- docs/09-landing-home.md

### Archivos modificados

Los archivos modificados para dar soporte a la refactorización fueron:

- frontend/src/App.jsx
- frontend/src/features/home/HomePage.jsx
- frontend/src/features/home/components/Hero.jsx
- frontend/src/features/home/components/AdminSection.jsx
- frontend/src/features/home/components/CrearCuenta.jsx
- frontend/src/features/home/components/Info.jsx
- frontend/src/features/home/components/Testimonials.jsx
- frontend/src/features/home/components/Header.jsx
- frontend/src/features/home/components/Footer.jsx
- frontend/src/features/auth/LoginRegisterPage.jsx
- frontend/src/features/dashboard/AdminDashboardPage.jsx
- frontend/src/styles/pages/LoginRegister.css
- frontend/src/styles/pages/AdminDashboard.css
- frontend/src/styles/pages/HomeInicial.css
- frontend/package.json
- frontend/package-lock.json

### Archivos eliminados o descontinuados

No se eliminó ningún archivo fuente principal del proyecto durante la refactorización; sin embargo, se dejó de utilizar de forma activa el enfoque anterior de estilos dispersos y se redujo la dependencia directa de estilos heredados. En la práctica, se produjo una reorganización funcional más que una eliminación masiva de archivos.

### Motivo de cada cambio

- Se creó `MainLayout` para centralizar el encabezado y el footer compartidos.
- Se creó `useTheme` para unificar el soporte de tema global.
- Se incorporaron componentes UI reutilizables para disminuir duplicación.
- Se reorganizaron los estilos para separar tema global de estilos específicos de página.
- Se mejoró la estructura de `HomePage` para dejar la landing como un orquestador claro de secciones.

---

## 4. Cambios realizados archivo por archivo

### frontend/src/App.jsx

- Responsabilidad: punto de entrada central de la aplicación React.
- Qué hacía antes: montaba la navegación y renderizaba la landing directamente con un modelo simple.
- Qué hace ahora: carga rutas de forma diferida, integra el tema global y usa `MainLayout` para envolver las páginas públicas.
- Por qué se modificó: para introducir mejor organización y mejorar rendimiento con lazy loading.
- Principio arquitectónico mejorado: separación de responsabilidades y escalabilidad.

### frontend/src/components/layouts/MainLayout.jsx

- Responsabilidad: encapsular el shell común de la interfaz pública.
- Qué hacía antes: no existía un layout compartido formal para la landing.
- Qué hace ahora: muestra `Header`, `Footer` y el contenido de la página actual de forma consistente.
- Por qué se modificó: para evitar duplicación y garantizar consistencia visual entre todas las páginas públicas.
- Principio mejorado: reutilización y cohesión.

### frontend/src/hooks/useTheme.jsx

- Responsabilidad: controlar el estado del tema claro/oscuro.
- Qué hacía antes: no existía una abstracción formal para el tema.
- Qué hace ahora: gestiona el tema desde un hook reusable y persiste la preferencia en el almacenamiento local.
- Por qué se modificó: para centralizar la gestión del tema y evitar dispersión de lógica.
- Principio mejorado: reutilización y mantenimiento.

### frontend/src/features/home/HomePage.jsx

- Responsabilidad: concentrar las secciones que componen la landing.
- Qué hacía antes: presentaba la landing con una composición simple y directa.
- Qué hace ahora: se convierte en un orquestador claro de componentes de sección, reduciendo complejidad.
- Por qué se modificó: para hacer la landing más modular y preparada para crecer.
- Principio mejorado: cohesión y separación de responsabilidades.

### frontend/src/features/home/components/Hero.jsx

- Responsabilidad: renderizar la sección hero principal.
- Qué hacía antes: contenía la composición visual de la parte introductoria de la landing.
- Qué hace ahora: sigue cumpliendo esa función, pero con mejor organización visual y llamadas a componentes UI reutilizables.
- Por qué se modificó: para mejorar la consistencia visual y simplificar la estructura.
- Principio mejorado: cohesión y reutilización.

### frontend/src/features/home/components/AdminSection.jsx

- Responsabilidad: mostrar los beneficios y capacidades del producto.
- Qué hacía antes: renderizaba tarjetas estáticas sin una abstracción de estilo y UI clara.
- Qué hace ahora: conserva la misma función pero con un enfoque más limpio y consistente.
- Por qué se modificó: para consolidar la experiencia visual de la landing.
- Principio mejorado: mantenibilidad.

### frontend/src/features/home/components/CrearCuenta.jsx

- Responsabilidad: mostrar la sección de registro rápido.
- Qué hacía antes: tenía un bloque visual más básico.
- Qué hace ahora: presenta una estructura más profesional y facilita la integración con futuras acciones de autenticación.
- Por qué se modificó: para mejorar la calidad visual y prepararla para navegación de auth.
- Principio mejorado: claridad de propósito.

### frontend/src/features/home/components/Info.jsx

- Responsabilidad: explicar los beneficios del producto desde una perspectiva visual.
- Qué hacía antes: mostraba contenido estático con menos estructura.
- Qué hace ahora: se encaja dentro de una composición más ordenada y consistente.
- Por qué se modificó: para reforzar coherencia visual y escalabilidad.
- Principio mejorado: organización.

### frontend/src/features/home/components/Testimonials.jsx

- Responsabilidad: mostrar testimonios de usuarios.
- Qué hacía antes: se encontraba dentro de una estructura simple.
- Qué hace ahora: mantiene la sección pero con una distribución más cuidada y consistente.
- Por qué se modificó: para mejorar la presentación final de la landing.
- Principio mejorado: diseño de componentes.

### frontend/src/features/home/components/Header.jsx

- Responsabilidad: renderizar el encabezado principal de la landing.
- Qué hacía antes: estaba ligado directamente a la landing sin una separación clara de layout.
- Qué hace ahora: se integra al layout compartido y recibe el estado del tema como prop.
- Por qué se modificó: para unificar la navegación y centralizar el tema.
- Principio mejorado: reutilización y desacoplamiento.

### frontend/src/features/home/components/Footer.jsx

- Responsabilidad: renderizar el pie de página público.
- Qué hacía antes: estaba decorado de forma simple y sin estructura compartida.
- Qué hace ahora: se incorpora al layout común y presenta una estructura más profesional.
- Por qué se modificó: para modernizar la identidad visual y evitar duplicación de UI.
- Principio mejorado: consistencia y reutilización.

### frontend/src/features/auth/LoginRegisterPage.jsx

- Responsabilidad: manejar el flujo de autenticación visualmente.
- Qué hacía antes: presentaba una interfaz de login/register básica con estilos propios.
- Qué hace ahora: conserva esa funcionalidad, pero se integra mejor con el sistema visual general y soporta la identidad del proyecto.
- Por qué se modificó: para alinearla con el sistema de tema y la nueva arquitectura de UI.
- Principio mejorado: coherencia de interfaz.

### frontend/src/features/dashboard/AdminDashboardPage.jsx

- Responsabilidad: servir como base para la vista administrativa.
- Qué hacía antes: era una vista preliminar con layout básico.
- Qué hace ahora: conserva su lógica principal, pero se alinea mejor con la identidad visual del sistema y su integración de estilos.
- Por qué se modificó: para que la experiencia visual sea consistente con el resto de la app.
- Principio mejorado: coherencia y preparación para módulos.

### frontend/src/styles/theme.css

- Responsabilidad: definir variables y tokens visuales globales del sistema.
- Qué hacía antes: no existía un punto central tan bien estructurado.
- Qué hace ahora: centraliza colores, sombras, superficies, iconos y gradientes para el tema claro y oscuro.
- Por qué se modificó: para construir un sistema visual robusto y reutilizable.
- Principio mejorado: consistencia visual y mantenibilidad.

### frontend/src/styles/pages/HomePage.css

- Responsabilidad: agrupar los estilos específicos de la landing.
- Qué hacía antes: los estilos de la landing estaban dispersos o heredados de una implementación previa.
- Qué hace ahora: organiza todos los estilos propios de la landing en un archivo dedicado con estructura clara.
- Por qué se modificó: para mejorar la separación entre CSS global y CSS específico de página.
- Principio mejorado: cohesión y mantenimiento.

---

## 5. Componentes creados

### MainLayout

- Responsabilidad: encapsular el layout compartido para las páginas públicas.
- Props: `children`, `theme`, `setTheme`.
- Dependencias: `Header`, `Footer`, `theme.css`, `HomePage.css`.
- Quién lo utiliza: `App.jsx` para envolver la landing y otras páginas públicas.

### Badge

- Responsabilidad: representar un elemento visual breve tipo etiqueta.
- Props: `children`, `className`.
- Dependencias: ninguno adicional.
- Quién lo utiliza: `Hero.jsx`.

### Button

- Responsabilidad: encapsular botones estilizados reutilizables.
- Props: `children`, `variant`, `className`.
- Dependencias: `framer-motion`.
- Quién lo utiliza: `Hero.jsx` y otras secciones de la landing.

### Card

- Responsabilidad: representar tarjetas con animación y estilo visual uniforme.
- Props: `children`, `className`.
- Dependencias: `framer-motion`.
- Quién lo utiliza: `Hero.jsx` y la landing en general.

### IconButton

- Responsabilidad: encapsular botones de iconos con comportamiento accesible.
- Props: `label`, `icon`, `className`, `onClick`.
- Dependencias: `framer-motion`.
- Quién lo utiliza: componentes de UI que requieran acciones con iconos.

### ThemeToggle

- Responsabilidad: implementar el switch de tema claro/oscuro.
- Props: `theme`, `setTheme`.
- Dependencias: `lucide-react`, `framer-motion`.
- Quién lo utiliza: `Header.jsx`.

---

## 6. Componentes modificados

### Header

- Qué cambió: pasó de un componente aislado a un componente integrado al layout compartido.
- Por qué cambió: para evitar duplicación y centralizar el estado del tema.
- Mejora: mayor reutilización y coherencia de navegación.

### Footer

- Qué cambió: se reestructuró visualmente y se integró al layout compartido.
- Por qué cambió: para dar mayor profesionalismo a la experiencia general.
- Mejora: mejor diseño de marca y coherencia visual.

### HomePage

- Qué cambió: se transformó en un orquestador claro de secciones.
- Por qué cambió: para mejorar modularidad y lectura del código.
- Mejora: mayor claridad y menor complejidad.

### LoginRegisterPage

- Qué cambió: se alineó visualmente con el sistema de tema general.
- Por qué cambió: para mantener consistencia de diseño y preparado para crecimiento.
- Mejora: mejor experiencia de usuario y visual.

### AdminDashboardPage

- Qué cambió: se adaptó a la identidad visual del sistema y recibió soporte de estilos integrados.
- Por qué cambió: para asegurar continuidad visual entre módulos.
- Mejora: mejor base para futuras pantallas de administración.

---

## 7. Flujo completo de la Landing

### Inicio de la aplicación

1. React se inicia desde `frontend/src/main.jsx`.
2. `main.jsx` monta `App.jsx` dentro del DOM.
3. `App.jsx` configura el enrutador y define las rutas del sistema.

### Llegada hasta Home

1. El usuario accede a la ruta `/`.
2. `App.jsx` detecta que la ruta corresponde a la landing.
3. Se instancia `MainLayout` con el contenido de `HomePage`.
4. `MainLayout` renderiza el shell común: `Header` y `Footer`.
5. `HomePage` orquesta las secciones de la landing.

### Renderizado de componentes

`HomePage` renderiza los siguientes componentes en orden:

- `Hero`
- `AdminSection`
- `CrearCuenta`
- `Info`
- `Testimonials`

### Flujo de información

La información fluye de forma principalmente declarativa:

- `HomePage` organiza los componentes de sección.
- Cada componente renderiza contenido estático o UI reutilizable.
- `Header` recibe `theme` y `setTheme` desde el layout para controlar el toggler.
- Los componentes de UI como `Button`, `Card` y `Badge` encapsulan presentación reutilizable.
- No existe un flujo de datos complejo ni estado compartido entre secciones; el diseño buscó simplicidad y claridad.

### Relación entre componentes

- `App` -> `MainLayout` -> `Header/Footer` + `HomePage`
- `HomePage` -> `Hero`, `AdminSection`, `CrearCuenta`, `Info`, `Testimonials`
- `Hero` -> `Badge`, `Button`, `Card`
- `Header` -> `ThemeToggle`

Este flujo permite entender claramente cómo se construye la landing y facilita futuras expansiones.

---

## 8. Imports

### Imports modificados

Se modificaron las importaciones para reflejar una estructura más limpia y modular:

- Se añadieron imports de `prop-types` en componentes UI y layout para validación de props.
- Se añadieron imports de `framer-motion` para animación de componentes reutilizables.
- Se incorporaron imports de `lucide-react` y `react-icons` para iconografía consistente.
- Se reorganizaron imports de rutas relativas hacia componentes y estilos nuevos.

### Cambios de ruta

- Los componentes de Home fueron importados desde rutas específicas dentro de `features/home/components`.
- `MainLayout` pasó a importar `Header` y `Footer` desde su ubicación propia.
- `App.jsx` pasó a importar el tema global desde `styles/theme.css` de forma centralizada.

### Estructura de dependencias resultante

La estructura de dependencias quedó más clara:

- `App` depende de `MainLayout` y del hook de tema.
- `MainLayout` depende de `Header`, `Footer`, y estilos del home.
- `HomePage` depende de los componentes de secciones.
- Los componentes UI dependen de bibliotecas de presentación más que de lógica de negocio.

---

## 9. CSS

### Archivos CSS existentes

- frontend/src/styles/theme.css
- frontend/src/styles/pages/HomePage.css
- frontend/src/styles/pages/LoginRegister.css
- frontend/src/styles/pages/AdminDashboard.css
- frontend/src/styles/pages/App.css
- frontend/src/styles/pages/HomeInicial.css

### Quién los consume

- `theme.css` es consumido por la app a través de `App.jsx` y aplica variables globales del sistema.
- `HomePage.css` es consumido por `MainLayout` y por la landing como estilos específicos.
- `LoginRegister.css` se consume desde `LoginRegisterPage.jsx`.
- `AdminDashboard.css` se consume desde `AdminDashboardPage.jsx`.

### Organización actual

- `theme.css` contiene variables y estilos globales del sistema.
- `HomePage.css` contiene styles específicos para la landing.
- Los archivos de páginas específicas mantienen estilos locales para pantallas concretas.

### Estilos globales y específicos

- Globales: tema, colores, tipografía, botones base, iconos y diseño general.
- Específicos: hero, secciones, tarjetas, contenedores, formularios y dashboard.

La organización mejora la claridad y evita mezclar estilos globales con los de una sección particular.

---

## 10. Estado actual

### Lo que está terminado

- La landing quedó reorganizada y modularizada.
- El layout compartido está implementado.
- El sistema de tema claro/oscuro está centralizado.
- La interfaz se volvió más profesional y consistente.
- La base es adecuada para continuar con nuevos módulos.
- Se validó la compilación y lint.

### Lo que falta

- Completar una limpieza más profunda de estilos heredados.
- Normalizar nombres de componentes y clases a una convención más uniforme.
- Definir y comprobar rutas reales para módulos como servicios y contacto.
- Expandir la arquitectura para módulos de negocio más complejos.
- Integrar mejores patrones de estado si se requiere escalabilidad superior.

### Deuda técnica existente

- Algunos archivos de estilos previos permanecen en el proyecto y podrían ser consolidados.
- La landing sigue siendo principalmente presentacional; aún no incorpora lógica de negocio real.
- Algunas partes visuales de auth/dashboard siguen siendo preliminares y podrían evolucionar hacia componentes más robustos.

### Riesgos

- Si se agregan nuevos módulos sin mantener esta estructura, el proyecto podría volver a acumular acoplamiento.
- La estandarización de nombres y estilos debe seguir una convención para evitar fragmentación.
- El crecimiento de componentes deberá manejarse con cuidado para no perder cohesión.

---

## 11. Validaciones realizadas

### Compilación

Se ejecutó la compilación de producción del frontend mediante:

- `npm run build`

Resultado: compilación exitosa.

### Lint

Se ejecutó:

- `npm run lint`

Resultado: sin errores reportados.

### Errores corregidos

Durante la refactorización se corrigieron:

- problemas de estructura visual de la landing,
- acoplamiento de layout,
- inconsistencias de tema,
- procesos de importación y organización de componentes,
- problemas de mantenibilidad en la composición de la interfaz.

### Warnings

La compilación reportó warnings de tamaño de chunks por parte de Vite, pero no impactaron negativamente en la estabilidad funcional.

### Pruebas manuales

Se verificó visualmente la consistencia de:

- navegación,
- colores del tema,
- estructura de la landing,
- renderizado de secciones,
- integración del layout compartido.

---

## 12. Evaluación arquitectónica

### SOLID

La refactorización mejora la aplicación de varios principios SOLID:

- Single Responsibility: cada componente tiene una responsabilidad concreta.
- Open/Closed: los componentes UI pueden extenderse sin modificar su base interna de forma innecesaria.
- Dependency Inversion: el uso de hooks y layout compartido reduce la dependencia directa de detalles visuales del flujo principal.

### Clean Code

El resultado mejora la legibilidad del código, reduce la duplicación y facilita futuras modificaciones.

### DDD-Lite

Aunque el proyecto no está aún en una implementación completa de DDD, la estructura modular de features y componentes es coherente con un enfoque DDD-Lite al separar claramente dominio visual y presentación.

### Separación de responsabilidades

El cambio fue especialmente positivo en este punto, porque la landing pasó de ser una composición visual simple a una estructura composicional con responsabilidades bien delimitadas.

### Escalabilidad

La arquitectura actual permite integrar nuevos módulos con menor riesgo porque el layout, los estilos globales y los componentes UI ya están mejor organizados.

### Reutilización

La introducción de componentes UI reutilizables mejora significativamente el potencial de reuso en futuras pantallas.

### Acoplamiento

El acoplamiento disminuyó en comparación con la implementación anterior, especialmente entre layout y contenido.

### Cohesión

La cohesión mejoró porque los elementos visuales relacionados ahora están agrupados de forma más natural.

---

## 13. Próximos pasos recomendados

A continuación se detallan los próximos pasos recomendados para continuar el desarrollo del proyecto con la misma calidad arquitectónica:

1. Consolidar y limpiar estilos heredados.
   - Reducir la presencia de archivos obsoletos o redundantes.
   - Establecer una convención única para nombres y estilos.

2. Estandarizar nomenclatura.
   - Definir una convención para componentes, clases CSS y rutas.
   - Evitar mezclas entre español e inglés.

3. Extender el sistema de diseño.
   - Formalizar tokens de diseño para botones, formularios, cards y páginas.
   - Reutilizar estos tokens en todos los módulos.

4. Definir layouts específicos para auth y dashboard.
   - No depender únicamente del layout público cuando se requiera una experiencia distinta.

5. Preparar módulos de negocio reales.
   - Servicios, contactos, inventario, ventas y usuarios deberían incorporarse con la misma estructura modular.

6. Reforzar la separación de capas.
   - Mantener componentes presentacionales limpios y mover lógica compleja a capas o hooks más especializados cuando el proyecto crezca.

7. Continuar con validaciones automatizadas.
   - Añadir pruebas unitarias y de integración para componentes críticos.
   - Implementar validaciones más exhaustivas en CI/CD.

8. Documentar cada módulo cuando se incorpore.
   - Mantener esta misma disciplina para evitar que la arquitectura se degrada con el tiempo.

---

## Conclusión

La refactorización del módulo Landing/Home logró transformar una implementación inicial básica en una base frontend más limpia, modular y preparada para evolucionar. El trabajo realizado mejoró la organización del código, consolidó el tema visual, separó responsabilidades, aumentó la reutilización y dejó una arquitectura mucho más sostenible para el crecimiento del sistema.

El resultado no solo mejora la calidad visual del producto, sino también la capacidad técnica del equipo para continuar extendiendo la aplicación con mayor seguridad y menor riesgo de degradación arquitectónica.