const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const contadorRoutes = require('./routes/contadorRoutes');
const { contarOperaciones, obtenerContadorOperaciones } = require('./middlewares/contadorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// 📌 Middleware para contar operaciones
app.use(contarOperaciones);

// 📌 Rutas del CRUD
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/productos', productoRoutes);

// 📌 Ruta para contar registros en Usuarios y Productos
app.use('/api/contadores', contadorRoutes);

// 📌 Ruta para ver total de operaciones realizadas
app.get('/api/operaciones', obtenerContadorOperaciones);

app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
