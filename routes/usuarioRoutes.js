const express = require('express');
const Usuario = require('../models/usuarioModel');
const router = express.Router();

// 📌 1️⃣ Crear un nuevo usuario (POST /usuarios)
router.post('/', async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear usuario', error });
    }
});

// 📌 2️⃣ Obtener todos los usuarios (GET /usuarios)
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
    }
});

// 📌 3️⃣ Actualizar un usuario por ID (PUT /usuarios/:id)
router.put('/:id', async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarioActualizado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar usuario', error });
    }
});

// 📌 4️⃣ Eliminar un usuario por ID (DELETE /usuarios/:id)
router.delete('/:id', async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) {
            return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
        res.json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar usuario', error });
    }
});

module.exports = router;
