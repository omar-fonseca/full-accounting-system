# Dependencias y herramientas

## Backend

| Dependencia | Versión declarada | Responsabilidad |
|---|---|---|
| express | ^4.21.0 | Servidor y middleware HTTP |
| mongoose | ^8.8.0 | ODM para MongoDB |
| bcrypt | ^5.1.1 | Hash y comparación de passwords |
| jsonwebtoken | ^9.0.2 | Access/refresh JWT |
| express-validator | ^7.3.2 | Validación de entrada |
| cors | ^2.8.5 | Política de origen cruzado |
| cookie-parser | ^1.4.7 | Lectura de cookies |
| dotenv | ^16.4.5 | Variables de entorno |
| jest | ^30.4.2 | Tests |
| supertest | ^7.2.2 | Requests de prueba |

## Frontend

React `^18.3.1`, React DOM, Vite `^5.4.1`, React Router `^6.26.2`, Axios `^1.7.4`, Material UI/Emotion, Recharts, Framer Motion, icon libraries, react-modal, PropTypes y ESLint. Se usan directamente en los archivos observados las piezas principales de React, Router, Axios, MUI, Recharts, iconos y PropTypes.

## Estado

Los lockfiles existen para backend y frontend. No se modificaron dependencias. Queda pendiente revisar paquetes no utilizados y vulnerabilidades con una auditoría npm específica; este documento no afirma que el árbol esté libre de vulnerabilidades.
