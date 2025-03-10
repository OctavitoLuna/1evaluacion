const express = require('express');
const Producto = require('../models/productoModel');
const router = express.Router();

// 📌 1️⃣ Crear un nuevo producto (POST /productos)
router.post('/', async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear producto', error });
    }
});

// 📌 2️⃣ Obtener todos los productos (GET /productos)
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error });
    }
});

// 📌 3️⃣ Actualizar un producto por ID (PUT /productos/:id)
router.put('/:id', async (req, res) => {
    try {
        const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!productoActualizado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json(productoActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar producto', error });
    }
});

// 📌 4️⃣ Eliminar un producto por ID (DELETE /productos/:id)
router.delete('/:id', async (req, res) => {
    try {
        const productoEliminado = await Producto.findByIdAndDelete(req.params.id);
        if (!productoEliminado) {
            return res.status(404).json({ mensaje: 'Producto no encontrado' });
        }
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar producto', error });
    }
});

module.exports = router;
