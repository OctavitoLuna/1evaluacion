let totalOperaciones = 0; // Variable global para contar operaciones

const contarOperaciones = (req, res, next) => {
    totalOperaciones++; // Incrementa el contador en cada request
    console.log(`Operaciones totales realizadas: ${totalOperaciones}`);
    next(); // Pasa al siguiente middleware o ruta
};

const obtenerContadorOperaciones = (req, res) => {
    res.json({ totalOperaciones });
};

module.exports = { contarOperaciones, obtenerContadorOperaciones };
