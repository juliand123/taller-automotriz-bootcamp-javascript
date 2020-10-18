const recursos = require("./recursos");
const vehiculos = require("./rutas/vehiculos");
module.exports = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'esta es /ruta' });
    },
    vehiculos: vehiculos(recursos.vehiculos), 
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'no encontrado' });
    }
};