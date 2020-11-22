module.exports = function vehiculosHandler(vehiculos) {
    return {
        GET: (data, callback) => {
            if (data.indice) {
                if (vehiculos[data.indice]) {
                    return callback(200, vehiculos[data.indice]);
                }
                return callback(404, { mensaje: `vehiculo con indice ${data.indice} no encontrado` });
            }
            if (data.query &&
                (typeof data.query.marca !== 'undefined' ||
                    data.query.tipovehiculo !== "undefined" ||
                    data.query.marca !== "undefined" ||
                    data.query.linea !== "undefined"
                )) {
                const llavesQuery = Object.keys(data.query);
                let respuestaVehiculos = [...vehiculos];
                for (const llave of llavesQuery) {
                    respuestaVehiculos = respuestaVehiculos.filter(
                        (_vehiculo) => {
                            const expresionRegular = new RegExp(data.query[llave], "ig");
                            const resultado = [..._vehiculo[llave].matchAll(expresionRegular)];
                            return resultado.length > 0;
                        }
                    );
                }
                return callback(200, respuestaVehiculos);
            }
            callback(200, vehiculos);
        },
        POST: (data, callback) => {
            vehiculos.push(data.payload);
            callback(201, vehiculos);
        },
        PUT: (data, callback) => {
            if (data.indice) {
                if (vehiculos[data.indice]) {
                    vehiculos[data.indice] = data.payload;
                    return callback(200, vehiculos[data.indice]);
                }
                return callback(404, { mensaje: `vehiculo con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: 'indice no enviado' });
        },
        DELETE: (data, callback) => {
            if (data.indice) {
                if (vehiculos[data.indice]) {
                    vehiculos = vehiculos.filter(
                        (_vehiculo, indice) => indice != data.indice
                    ); //filtrar todos los diferentes al indice entregado y genera un nuevo array
                    return callback(204, { mensaje: `elemento con indice ${data.indice} eliminado` });
                }
                return callback(404, { mensaje: `vehiculo con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: 'indice no enviado' });
        },
    };
}


