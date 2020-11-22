module.exports = function mecanicosHandler(mecanicos) {
    return {
        GET: (data, callback) => {
            if (data.indice) {
                if (mecanicos[data.indice]) {
                    return callback(200, mecanicos[data.indice]);
                }
                return callback(404, { mensaje: `mecanico con indice ${data.indice} no encontrado` });
            } 
            if (data.query &&
                (typeof data.query.nombre !== 'undefined' ||
                    data.query.apellido !== "undefined" ||
                    data.query.pais !== "undefined" ||
                    data.query.identificacion !== "undefined"
                )) {
                const llavesQuery = Object.keys(data.query);
                let respuestaMecanicos = [...mecanicos];
                for (const llave of llavesQuery) {
                    respuestaMecanicos = respuestaMecanicos.filter(
                        (_mecanico) => {
                            const expresionRegular = new RegExp(data.query[llave], "ig");
                            const resultado = [..._mecanico[llave].matchAll(expresionRegular)];
                            return resultado.length > 0;
                        }
                    );
                }
                return callback(200, respuestaMecanicos);
            }
            callback(200, mecanicos);
        },
        POST: (data, callback) => {
            mecanicos.push(data.payload);
            callback(201, mecanicos);
        },
        PUT: (data, callback) => {
            if (data.indice) {
                if (mecanicos[data.indice]) {
                    mecanicos[data.indice] = data.payload;
                    return callback(200, mecanicos[data.indice]);
                }
                return callback(404, { mensaje: `mecanico con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: 'indice no enviado' });
        },
        DELETE: (data, callback) => {
            if (data.indice) {
                if (mecanicos[data.indice]) {
                    mecanicos = mecanicos.filter(
                        (_mecanico, indice) => indice != data.indice
                    ); //filtrar todos los diferentes al indice entregado y genera un nuevo array
                    return callback(204, { mensaje: `elemento con indice ${data.indice} eliminado` });
                }
                return callback(404, { mensaje: `mecanico con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: 'indice no enviado' });
        },
    };
}


