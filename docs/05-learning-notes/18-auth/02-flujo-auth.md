# 02. Flujo de autenticación paso a paso

# 1. Flujo general

El flujo de autenticación del proyecto se puede entender como una secuencia de pasos claros:

1. El usuario envia credenciales.
2. El backend valida esas credenciales.
3. Si son correctas, se generan tokens.
4. El cliente usa esos tokens para acceder a rutas protegidas.
5. El backend valida el token en cada request relevante.
6. El usuario puede renovar su sesión o cerrarla.

---

# 2. Registro

### Entrada
- nombre
- email
- password

### Proceso
- validar que los campos existan,
- validar formato,
- verificar que el email no esté repetido,
- crear el usuario,
- generar tokens,
- guardar refresh token,
- responder al cliente.

### Resultado esperado
- usuario creado,
- tokens generados,
- sesión iniciada.

---

# 3. Login

### Entrada
- email
- password

### Proceso
- buscar usuario por email,
- verificar estado del usuario,
- comparar contraseña con bcrypt,
- generar access token y refresh token,
- actualizar refresh token,
- responder con usuario y access token.

### Resultado esperado
- autenticación correcta,
- acceso al sistema,
- tokens disponibles para peticiones futuras.

---

# 4. Uso de access token

El access token se usa para acceder a rutas protegidas.

### Ejemplo de uso
- enviar el token en el header Authorization:
  - Bearer <token>

### Propósito
- identificar al usuario,
- autorizar el acceso,
- validar la sesión activa.

---

# 5. Refresh token

El refresh token no debe usarse directamente para acceder a recursos sensibles.

### Propósito
- renovar la sesión,
- generar un nuevo access token,
- evitar que el usuario tenga que iniciar sesión una y otra vez.

### Regla de diseño
- el access token tiene corta duración,
- el refresh token tiene mayor duración,
- el refresh token debe compararse con el valor almacenado.

---

# 6. Logout

El logout consiste en invalidar el refresh token del usuario.

### Resultado
- la sesión queda cerrada,
- el usuario ya no podrá refrescar su acceso,
- el sistema debe dejar de considerar la sesión activa.

---

# 7. Qué aprendimos con este flujo

Este flujo enseñó que la autenticación no es solo "aceptar usuario y contraseña", sino un proceso completo de:

- validación,
- identidad,
- autorización,
- persistencia de sesión,
- y control del estado del usuario.
