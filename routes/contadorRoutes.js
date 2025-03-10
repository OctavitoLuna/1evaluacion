const express = require('express');
const Usuario = require('../models/usuarioModel');
const Producto = require('../models/productoModel');
const router = express.Router();

// 📌 Obtener el número total de documentos en Usuarios y Productos (GET /contadores)
router.get('/', async (req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();

        res.json({
            totalUsuarios,
            totalProductos
        });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener contadores', error });
    }
});

module.exports = router;
