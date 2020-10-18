module.exports = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'esta es /ruta' });
    },
    vehiculos: {
        GET: (data, callback) => {
            if (data.indice) {
                if (global.recursos.vehiculos[data.indice]) {
                    return callback(200, global.recursos.vehiculos[data.indice]);
                }
                    return callback(404,{ mensaje:`vehiculo con indice ${data.indice} no encontrado`});
            }
            callback(200, global.recursos.vehiculos);
        },
        POST: (data, callback) => {
            global.recursos.vehiculos.push(data.payload);
            callback(201, global.recursos.vehiculos);
        },
        PUT: (data, callback) => {
            if (data.indice) {
                if (global.recursos.vehiculos[data.indice]) {
                    global.recursos.vehiculos[data.indice] = data.payload;
                    return callback(200, global.recursos.vehiculos[data.indice]);
                }
                    return callback(404,{ mensaje:`vehiculo con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: 'indice no enviado'});
        },
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'no encontrado' });
    }
};