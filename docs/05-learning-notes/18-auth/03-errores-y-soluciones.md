# 03. Errores y soluciones encontrados en la autenticación

# 1. Error: respuestas genéricas 500

## Síntoma

Algunas fallas del backend devolvían respuestas poco claras o genéricas.

## Problema

El middleware de errores no estaba manejando correctamente ciertos errores operacionales.

## Solución

Se reforzó el manejo centralizado de errores para que el sistema devolviera respuestas más claras y útiles.

## Aprendizaje

Un sistema de autenticación necesita errores claros para facilitar debugging y mantenimiento.

---

# 2. Error: JSON mal formado

## Síntoma

Algunas peticiones devolvían errores de parseo y no llegaban al controlador.

## Problema

El cuerpo de la petición no estaba bien formateado.

## Solución

Se revisó el formato de envío y se documentó la importancia de enviar JSON válido.

## Aprendizaje

La validación de entrada debe contemplar no solo datos, sino también el formato del request.

---

# 3. Error: refresh token no manejado correctamente

## Síntoma

El endpoint de refresh no respondía de forma consistente.

## Problema

El token no estaba siendo leído de forma robusta desde distintas fuentes.

## Solución

Se adaptó el flujo para aceptar el refresh token desde cuerpo, cookies, query y headers.

## Aprendizaje

El refresh debe ser robusto y tolerante al entorno real del cliente.

---

# 4. Error: dependencias faltantes

## Síntoma

La compilación de frontend y el arranque de backend mostraban fallos por dependencias incompletas.

## Problema

Faltaban paquetes importantes para ejecutar el proyecto correctamente.

## Solución

Se instalaron y verificaron las dependencias necesarias.

## Aprendizaje

Un proyecto profesional requiere revisar el entorno completo, no solo el código.
