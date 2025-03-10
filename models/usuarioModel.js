const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    edad: {
        type: Number,
        required: false
    }
}, {
    timestamps: true
});

// 👇 Cambiado de 'Usuario' a 'usuarios' (igual que en MongoDB Atlas)
const Usuario = mongoose.model('usuarios', usuarioSchema);

module.exports = Usuario;
