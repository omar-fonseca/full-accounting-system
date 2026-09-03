# Dashboard profesional: diagnóstico y plan

## Estado actual

Existe `frontend/src/features/dashboard/AdminDashboardPage.jsx`, protegido para `ADMIN` y `PROPIETARIO`. Contiene drawer, tarjetas KPI, gráfica de líneas, gráfica circular, actividades de ejemplo y `AuthUserMenu`.

Es una base visual, no un dashboard operativo: las cifras y gráficas son constantes del componente, no consultas a la API, y los elementos del drawer no navegan todavía a módulos funcionales.

## Clasificación

| Área | Estado | Evidencia |
|---|---|---|
| Shell y acceso | Parcial | Ruta protegida y pantalla existen. |
| Resumen/KPIs | Estructurado sin lógica completa | Tarjetas estáticas. |
| Ventas | Pendiente | Etiqueta y datos de ejemplo. |
| Clientes | Pendiente | Etiqueta visual. |
| Reportes | Estructurado sin lógica completa | Gráfica local. |
| Configuración | Pendiente | Etiqueta visual. |
| Inventarios | Pendiente | Sin modelo ni endpoint. |
| Combustibles | Pendiente | Sin modelo ni endpoint. |
| Empleados/turnos | Pendiente | Sin implementación. |
| Contabilidad | Pendiente | Sin implementación. |
| Auditoría | Pendiente | Sin eventos ni registro. |

## Orden recomendado

1. Definir actores, permisos y contratos de API.
2. Consolidar usuarios, empleados y perfiles.
3. Construir productos e inventario con movimientos y stock.
4. Modelar combustibles, tanques y movimientos.
5. Implementar ventas vinculadas a existencias.
6. Implementar turnos y cierres con reglas de consistencia.
7. Añadir contabilidad y reportes reales.
8. Añadir configuración, auditoría y observabilidad.
9. Sustituir datos estáticos por endpoints probados.

## Inventarios y combustibles: diseño conceptual pendiente

### Inventario

La entidad futura debe representar un producto controlable: identificación, nombre, categoría, unidad de medida, cantidad disponible, mínimo de reposición, precio y estado. `Create`, `Read`, `Update` y `Delete` necesitarán validación, autorización, persistencia y trazabilidad. Las ventas deberían generar movimientos o ajustes de stock, y el dashboard debería consumir existencias y alertas desde la API.

### Combustibles

El código actual no define gasolina, gasolina extra ni otros combustibles. Antes de implementarlos debe decidirse el catálogo de tipos, tanques, unidad volumétrica, precio, lecturas, entradas, salidas y vínculo con ventas. Como recomendación, catálogo, precios y ajustes sensibles deberían restringirse a roles administrativos; operarios podrían registrar operaciones permitidas por una política explícita. Esto es diseño futuro, no permiso implementado.
