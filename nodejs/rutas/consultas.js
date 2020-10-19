module.exports = function consultasHandler(consultas){
    return   {
        GET: (data, callback) => {
            if (data.indice) {
                if (consultas[data.indice]) {
                    return callback(200, consultas[data.indice]);
                }
                    return callback(404,{ mensaje:`consulta con indice ${data.indice} no encontrado`});
            }
            callback(200, consultas);
        },
        POST: (data, callback) => {
            let nuevaConsulta = data.payload;
            nuevaConsulta.fechaCreacion = new Date();
            nuevaConsulta.fechaEdicion = null;    
            consultas = [...consultas, nuevaConsulta];
            callback(201, nuevaConsulta);
        },
        PUT: (data, callback) => {
            if (data.indice) {
                if (consultas[data.indice]) {
                    consultas[data.indice] = data.payload;
                    return callback(200, consultas[data.indice]);
                }
                    return callback(404,{ mensaje:`consulta con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: 'indice no enviado'});
        },
        DELETE: (data, callback) => {
            if (data.indice) {
                if (consultas[data.indice]) {
                    consultas = consultas.filter(
                        (_consulta, indice ) => indice != data.indice 
                        ); //filtrar todos los diferentes al indice entregado y genera un nuevo array
                    return callback(204, { mensaje:`elemento con indice ${data.indice} eliminado`});
                }
                    return callback(404,{ mensaje:`consulta con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: 'indice no enviado'});
        },
    };
}
  

