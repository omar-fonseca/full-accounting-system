# 📘 dotenv (.env)

---

# 1. Definición técnica

dotenv es una librería que permite cargar variables de entorno desde un archivo `.env` hacia `process.env` en aplicaciones Node.js.

Estas variables representan configuración externa del sistema, separada del código fuente, como credenciales, URLs, puertos y claves secretas.

El objetivo principal es mantener la **configuración fuera del código** para mejorar seguridad y portabilidad.

---

# 2. Propósito en ingeniería de software

En el sistema de gasolinera, dotenv cumple el rol de **gestor centralizado de configuración del entorno de ejecución**.

Su propósito es:

* Separar configuración del código fuente.
* Gestionar credenciales sensibles de forma segura.
* Facilitar despliegues en distintos entornos (dev, test, prod).
* Permitir flexibilidad sin modificar el código.
* Evitar exposición de información crítica en repositorios.

Desde ingeniería de software, dotenv habilita principios de **12-factor app**, especialmente el principio de configuración externa.

---

# 3. Problema que resuelve

Sin dotenv, las aplicaciones suelen presentar problemas como:

* Credenciales hardcodeadas en el código.
* Dificultad para cambiar entornos.
* Riesgo de exponer secretos en repositorios.
* Configuración duplicada entre desarrolladores.
* Baja portabilidad entre entornos.

En el sistema de gasolinera, esto sería crítico porque incluye:

* Conexión a base de datos MongoDB.
* Claves JWT.
* URLs de API.
* Configuración de puertos.

---

# 4. Cómo funciona internamente (conceptual)

dotenv funciona leyendo un archivo `.env` y cargando sus valores en memoria durante el arranque de la aplicación.

## Flujo interno

1. Node.js inicia la aplicación.
2. dotenv se ejecuta temprano en el proceso.
3. Lee el archivo `.env`.
4. Parsea cada línea como clave-valor.
5. Inyecta los valores en `process.env`.

## Ejemplo de archivo `.env`

```env id="dotenv-file-01"
PORT=3000
MONGO_URI=mongodb://localhost:27017/gasolinera
JWT_SECRET=super_secret_key
```

## Acceso en código

```javascript id="dotenv-use-01"
require("dotenv").config();

console.log(process.env.PORT);
```

---

# 5. Casos de uso reales

En el sistema de gasolinera, dotenv se utiliza para:

* Configurar conexión a MongoDB.
* Definir puerto del servidor backend.
* Almacenar clave secreta de JWT.
* Configurar URLs de APIs externas.
* Manejar entornos de desarrollo y producción.
* Configurar timeouts y parámetros del sistema.

### Ejemplo práctico

El backend puede cambiar de base de datos local a producción sin modificar una sola línea de código, solo cambiando el `.env`.

---

# 6. Dónde se usa en el stack

dotenv se utiliza principalmente en el backend:

* **Node.js**: carga de variables de entorno.
* **Express**: configuración del servidor.
* **MongoDB / Mongoose**: URI de conexión.
* **JWT**: clave secreta.
* **Frontend (Vite)**: variables públicas con prefijo `VITE_`.

No es parte de la lógica del sistema, sino de su configuración.

---

# 7. Implementación básica

## Instalación

```bash id="dotenv-install-01"
npm install dotenv
```

---

## Configuración inicial

```javascript id="dotenv-init-01"
require("dotenv").config();
```

---

## Archivo `.env`

```env id="dotenv-example-01"
PORT=3000
MONGO_URI=mongodb://localhost:27017/gasolinera
JWT_SECRET=clave_super_segura
```

---

## Uso en servidor Express

```javascript id="dotenv-express-01"
require("dotenv").config();

const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
```

---

## Uso con MongoDB

```javascript id="dotenv-mongo-01"
mongoose.connect(process.env.MONGO_URI);
```

---

# 8. Buenas prácticas

En el sistema de gasolinera, dotenv debe manejarse con estricta disciplina:

* Nunca subir `.env` al repositorio.
* Usar `.env.example` como plantilla.
* Separar variables por entorno (dev, prod, test).
* Validar variables obligatorias al iniciar el sistema.
* No exponer secretos en frontend.
* Usar nombres descriptivos y consistentes.
* Centralizar configuración en un solo módulo.
* Evitar duplicación de variables.

### Aplicado al sistema de gasolinera

Las credenciales de base de datos y claves JWT deben estar completamente aisladas del código para evitar compromisos de seguridad.

---

# 9. Errores comunes

Los errores más frecuentes con dotenv son de seguridad y configuración:

* Subir `.env` a GitHub accidentalmente.
* No ejecutar `dotenv.config()` al inicio.
* Usar variables sin validar existencia.
* Confundir variables de backend y frontend.
* Exponer secretos en logs.
* No separar entornos correctamente.
* Hardcodear valores críticos en código.
* Olvidar reiniciar el servidor tras cambios.

### En el sistema de gasolinera

Un error en configuración puede impedir la conexión a MongoDB o invalidar la autenticación JWT.

---

# 10. Relación con otras tecnologías del stack

dotenv se conecta con múltiples partes del sistema:

* **Node.js / Express**: configuración del servidor.
* **MongoDB / Mongoose**: conexión a base de datos.
* **JWT**: clave secreta de autenticación.
* **React / Vite**: variables públicas del frontend.
* **Axios**: URLs de APIs externas.
* **JavaScript**: acceso a `process.env`.

dotenv no es funcionalidad del sistema, es su capa de configuración crítica.

---

# 11. Resumen técnico

dotenv es el sistema de gestión de configuración del sistema de gasolinera. Permite separar credenciales, claves y parámetros del código fuente, garantizando seguridad, flexibilidad y portabilidad entre entornos.

En este proyecto, dotenv es fundamental para mantener la infraestructura configurable sin modificar la lógica del sistema, asegurando que el backend y frontend puedan adaptarse a distintos entornos de despliegue.
