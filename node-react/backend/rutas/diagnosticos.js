module.exports = function diagnosticosHandler({diagnosticos, 
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
            const diagnosticosConRelaciones = diagnosticos.map((diagnostico)=>({
                ...diagnostico, 
                vehiculo: {...vehiculos[diagnostico.vehiculo], id: diagnostico.vehiculo},
                mecanico: {...mecanicos[diagnostico.mecanico], id: diagnostico.mecanico},
            }));
            callback(200, diagnosticosConRelaciones);
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


