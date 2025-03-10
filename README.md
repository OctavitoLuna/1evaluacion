## Backend con Node.js, Express y MongoDB

Este es un backend para la gestión de usuarios y productos, construido con Node.js, Express y MongoDB.

## 1 Requisitos Previos
Antes de ejecutar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [Postman](https://www.postman.com/) o [Insomnia](https://insomnia.rest/) para probar la API

## 2 Instalación

1. Clona este repositorio:
   ```sh
   git clone https://github.com/OctavitoLuna/1evaluacion.git

2. instalar las dependencias:
    npm install
3. ejecuta el servidor
    npm run dev
4. estas son las direccionales para probar en postman
    Usuarios
    Método	Ruta	Descripción
    POST	/api/usuarios	Crea un nuevo usuario
    GET	/api/usuarios	Obtiene todos los usuarios
    GET	/api/usuarios/:id	Obtiene un usuario por ID
    PUT	/api/usuarios/:id	Actualiza un usuario por ID
    DELETE	/api/usuarios/:id	Elimina un usuario por ID

    Productos
    Método	Ruta	Descripción
    POST	/api/productos	Crea un nuevo producto
    GET	/api/productos	Obtiene todos los productos
    GET	/api/productos/:id	Obtiene un producto por ID
    PUT	/api/productos/:id	Actualiza un producto por ID
    DELETE	/api/productos/:id	Elimina un producto por ID

    Contadores y Operaciones
    Método	Ruta	Descripción
    GET	/api/contadores	Devuelve la cantidad de usuarios y productos
    GET	/api/operaciones	Devuelve la cantidad total de operaciones realizadas