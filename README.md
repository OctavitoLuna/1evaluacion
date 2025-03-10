# 1evaluacion
1ra Evaluación Parcial - Tecnologías Web II 

Instrucciones
Desarrolla un backend utilizando Node.js, Express.js y MongoDB para gestionar las colecciones Usuarios y Productos en la base de datos Sample.

El backend debe permitir operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre ambas colecciones y llevar un contador de:

Número de registros en cada colección.

Total de operaciones realizadas por el backend.

Envía el código fuente en un archivo comprimido junto con un archivo README.md explicando cómo ejecutarlo.

Parte 1: Configuración del entorno (20 pts)

(10 pts) Configurar un servidor Node.js con Express.js.

(10 pts) Conectar el backend a MongoDB usando Mongoose.

Parte 2: CRUD de Usuarios y Productos (40 pts)

Implementa rutas para las siguientes operaciones en ambas colecciones (Usuarios y Productos):

(10 pts) Crear un nuevo documento en la colección (POST /usuarios, POST /productos).

(10 pts) Obtener todos los documentos de la colección (GET /usuarios, GET /productos).

(10 pts) Actualizar un documento por ID (PUT /usuarios/:id, PUT /productos/:id).

(10 pts) Eliminar un documento por ID (DELETE /usuarios/:id, DELETE /productos/:id).

Usa Express.Router() para organizar las rutas.

Parte 3: Contadores de registros y operaciones (30 pts)

(15 pts) Implementar un endpoint (GET /contadores) que devuelva el número total de documentos en Usuarios y Productos.

(15 pts) Implementar un middleware que cuente cada operación realizada en el backend y lo exponga en (GET /operaciones).

Parte 4: Documentación y pruebas (10 pts)

(5 pts) Explicar en un archivo README.md cómo ejecutar el backend.

(5 pts) Probar las rutas con Postman o Insomnia, adjuntando capturas de pantalla de las pruebas exitosas.
