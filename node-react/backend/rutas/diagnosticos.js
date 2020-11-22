module.exports = function diagnosticosHandler({
    diagnosticos, 
    mecanicos, 
    vehiculos,
}) {
    return {
        GET: (data, callback) => {
            if (data.indice) {
                if (diagnosticos[data.indice]) {
                    return callback(200, diagnosticos[data.indice]);
                }
                return callback(404, { mensaje: `diagnostico con indice ${data.indice} no encontrado` });
            }
            let _diagnosticos = [...diagnosticos];
            if (data.query &&
                (typeof data.query.vehiculo !== 'undefined' ||
                    data.query.mecanico !== "undefined" ||
                    data.query.historia !== "undefined" ||
                    data.query.diagnostico !== "undefined"
                )) {
                const llavesQuery = Object.keys(data.query);
                
                for (const llave of llavesQuery) {
                    _diagnosticos = _diagnosticos.filter((_diagnostico) => {
                            
                            let resultado = false;
                            if (llave === 'diagnostico' || llave === 'historia') {
                                const expresionRegular = new RegExp(data.query[llave], "ig");
                                resultado = _diagnostico[llave].match(expresionRegular);
                            }
                            if (llave === 'mecanico' || llave ==='vehiculo') {
                               resultado = _diagnostico[llave] == data.query[llave];
                            } 
                            return resultado;
                        }
                    );
                }

            }
             _diagnosticos = _diagnosticos.map((diagnostico)=>({
                ...diagnostico, 
                vehiculo: {...vehiculos[diagnostico.vehiculo], id: diagnostico.vehiculo},
                mecanico: {...mecanicos[diagnostico.mecanico], id: diagnostico.mecanico},
            }));
            callback(200, _diagnosticos);
        },
        POST: (data, callback) => {
            let nuevodiagnostico = data.payload;
            nuevodiagnostico.fechaCreacion = new Date();
            nuevodiagnostico.fechaEdicion = null;
            diagnosticos = [...diagnosticos, nuevodiagnostico];
            callback(201, nuevodiagnostico);
        },
        PUT: (data, callback) => {
            if (data.indice) {
                if (diagnosticos[data.indice]) {
                    const { fechaCreacion } = diagnosticos[data.indice];
                    diagnosticos[data.indice] = {
                        ...data.payload,
                        fechaCreacion,
                        fechaEdicion: new Date()
                    };
                    return callback(200, diagnosticos[data.indice]);
                }
                return callback(404, { mensaje: `diagnostico con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: 'indice no enviado' });
        },
        DELETE: (data, callback) => {
            if (data.indice) {
                if (diagnosticos[data.indice]) {
                    diagnosticos = diagnosticos.filter(
                        (_diagnostico, indice) => indice != data.indice
                    ); //filtrar todos los diferentes al indice entregado y genera un nuevo array
                    return callback(204, { mensaje: `elemento con indice ${data.indice} eliminado` });
                }
                return callback(404, { mensaje: `diagnostico con indice ${data.indice} no encontrado` });
            }
            callback(400, { mensaje: 'indice no enviado' });
        },
    };
}


