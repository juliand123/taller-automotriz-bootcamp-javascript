const recursos = require("./recursos");
const vehiculos = require("./rutas/vehiculos");
const mecanicos = require("./rutas/mecanicos");
const duenos = require("./rutas/duenos");
const diagnosticos = require("./rutas/diagnosticos");

module.exports = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'esta es /ruta' });
    },
    vehiculos: vehiculos(recursos.vehiculos), 
    mecanicos: mecanicos(recursos.mecanicos),
    duenos: duenos(recursos.duenos),
    diagnosticos: diagnosticos(recursos),

    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'no encontrado' });
    }
};