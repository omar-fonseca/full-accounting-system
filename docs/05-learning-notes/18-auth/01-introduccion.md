# 18. Autenticación en Full Accounting System

# 1. ¿Por qué este tema es importante?

La autenticación es uno de los módulos más importantes en cualquier sistema moderno. Es la capa que decide quién puede entrar, qué puede ver y qué acciones puede ejecutar.

En este proyecto, implementar autenticación no solo fue una necesidad funcional, sino también una oportunidad de aprendizaje profundo sobre:

- seguridad básica,
- manejo de sesiones,
- JWT,
- roles,
- middleware,
- separación de responsabilidades,
- y arquitectura de software.

---

# 2. Qué aprendimos en este módulo

Durante el desarrollo del módulo de autenticación se trabajó con varios conceptos importantes:

- cómo registrar usuarios,
- cómo validar credenciales,
- cómo crear y verificar tokens,
- cómo proteger rutas,
- cómo separar la lógica de negocio de la lógica HTTP,
- cómo manejar errores de forma organizada,
- y cómo documentar el proceso para aprender mejor.

---

# 3. Conceptos clave que vimos

## 3.1 Registro de usuarios

El registro implica recibir datos del cliente, validar la entrada y crear un usuario valido en la base de datos.

Conceptos que se reforzaron:

- validación de entrada,
- normalización de email,
- hashing de contraseña,
- manejo de errores de duplicidad,
- uso de modelos Mongoose.

## 3.2 Login

El login consiste en verificar las credenciales suministradas por el usuario y emitir tokens si todo es correcto.

Conceptos reforzados:

- comparación de contraseñas,
- búsqueda por email,
- control de estado del usuario,
- generación de JWT,
- devolución de información limitada del usuario.

## 3.3 JWT

JWT permitió implementar una autenticación basada en tokens en lugar de depender únicamente de sesiones tradicionales.

Aprendizajes clave:

- estructura de un JWT,
- firma digital,
- uso de payload y secret,
- expiración de tokens,
- validación en backend.

## 3.4 Refresh token

El refresh token se convirtió en una pieza clave del sistema porque permite renovar sesiones sin pedir al usuario volver a iniciar sesión constantemente.

Aprendizajes clave:

- diferencia entre access token y refresh token,
- importancia de guardarlo de forma segura,
- comparación entre el token recibido y el almacenado,
- renovación de sesiones.

## 3.5 Middleware

Los middlewares permitieron separar la lógica de autenticación y autorización del resto del sistema.

Conceptos reforzados:

- middleware authenticate,
- middleware authorize,
- verificación de tokens,
- protección de rutas específicas.

---

# 4. Errores que encontramos

## 4.1 Error de manejo de errores

Al principio el sistema devolvía respuestas genéricas y no mostraba claramente la causa del fallo.

Aprendizaje:

- un middleware centralizado de errores mejora mucho la experiencia de desarrollo y la claridad del sistema.

## 4.2 Problemas con JSON mal formado

Las solicitudes con un cuerpo mal formateado provocaban fallos difíciles de entender.

Aprendizaje:

- el formato de las peticiones debe validarse y documentarse.

## 4.3 Problemas con refresh token

El endpoint de refresh no estaba manejando tokens de forma suficientemente sólida.

Aprendizaje:

- el refresh debe verificarse contra el valor almacenado en la base de datos y no solo contra la firma del token.

## 4.4 Dependencias faltantes

El proyecto mostró errores de compilación por dependencias no instaladas.

Aprendizaje:

- la calidad de un proyecto también depende de tener el entorno correctamente configurado.

---

# 5. Qué importancia tiene esta parte para el proyecto

La autenticación es un módulo fundamental porque define la base de seguridad del sistema.

Sin una autenticación clara y robusta:

- el sistema no es confiable,
- las rutas protegidas pueden quedar expuestas,
- la experiencia del usuario se vuelve insegura,
- y el proyecto no está listo para crecer.

Por eso este módulo no es un detalle menor, sino una base de ingeniería importante.

---

# 6. Qué aprendimos sobre arquitectura

Este módulo ayudó a comprender mejor la importancia de separar responsabilidades.

La arquitectura de auth quedó más clara al dividir entre:

- rutas,
- controladores,
- servicios,
- modelos,
- middleware,
- validadores,
- utilidades.

Ese diseño hace que el proyecto sea más fácil de mantener y más profesional.

---

# 7. Lecciones técnicas más importantes

- No mezclar lógica de negocio y lógica HTTP.
- No dejar seguridad en el frontend como única capa de protección.
- Validar siempre la entrada del usuario.
- Usar bcrypt para contraseñas.
- Usar JWT con cuidado y con expiración clara.
- Separar access token y refresh token.
- Documentar errores y soluciones.

---

# 8. Conclusión

La autenticación fue una de las partes más valiosas de este proyecto porque permitió aprender no solo cómo hacer login, sino también cómo construir una base más profesional, segura y ordenada para el resto del sistema.

Este módulo representa una excelente muestra de cómo un proyecto de aprendizaje puede convertirse en una experiencia real de ingeniería de software.
