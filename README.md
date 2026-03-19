# Plantilla de Arquitectura de Proyecto Estándar

Este repositorio contiene las plantillas de arquitectura estándar para nuestros proyectos web.

## Stack Tecnológico Estándar

### Backend
- **Lenguaje:** Python
- **Framework:** FastAPI
- **Base de Datos:** PostgreSQL (SQL)
- **Contenerización:** Docker

### Frontend
- **Framework/Librería:** React
- **Gestor de Paquetes:** npm/yarn

### General
- **Control de Versiones:** Git/GitHub
- **Despliegue:** Docker Compose, Nginx (proxy inverso)

## Estructura del Proyecto

La estructura general de los proyectos seguirá el siguiente formato:

```
.
├── backend/
│   ├── app/
│   ├── tests/
│   ├── .env.example
│   ├── Dockerfile
│   ├── requirements.txt
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   ├── .env.example
│   ├── Dockerfile
│   ├── package.json
│   └── README.md
├── .github/
│   └── workflows/
│       └── main.yml (CI/CD)
├── docker-compose.yml
└── README.md
```
