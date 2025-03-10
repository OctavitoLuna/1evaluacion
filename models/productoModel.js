const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    descripcion: {
        type: String,
        required: false
    }
}, {
    timestamps: true // Agrega "createdAt" y "updatedAt" automáticamente
});

// 👇 Cambiado de 'Producto' a 'productos' (igual que en MongoDB Atlas)
const Producto = mongoose.model('productos', productoSchema);

module.exports = Producto;
