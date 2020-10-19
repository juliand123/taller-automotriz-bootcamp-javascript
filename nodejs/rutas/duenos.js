module.exports = function duenosHandler(duenos){
    return   {
        GET: (data, callback) => {
            if (data.indice) {
                if (duenos[data.indice]) {
                    return callback(200, duenos[data.indice]);
                }
                    return callback(404,{ mensaje:`dueno con indice ${data.indice} no encontrado`});
            }
            callback(200, duenos);
        },
        POST: (data, callback) => {
            duenos.push(data.payload);
            callback(201, duenos);
        },
        PUT: (data, callback) => {
            if (data.indice) {
                if (duenos[data.indice]) {
                    duenos[data.indice] = data.payload;
                    return callback(200, duenos[data.indice]);
                }
                    return callback(404,{ mensaje:`dueno con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: 'indice no enviado'});
        },
        DELETE: (data, callback) => {
            if (data.indice) {
                if (duenos[data.indice]) {
                    duenos = duenos.filter(
                        (_dueno, indice ) => indice != data.indice 
                        ); //filtrar todos los diferentes al indice entregado y genera un nuevo array
                    return callback(204, { mensaje:`elemento con indice ${data.indice} eliminado`});
                }
                    return callback(404,{ mensaje:`dueno con indice ${data.indice} no encontrado`});
            }
            callback(400, {mensaje: 'indice no enviado'});
        },
    };
}
  

