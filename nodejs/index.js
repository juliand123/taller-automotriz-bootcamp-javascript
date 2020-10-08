console.log('iniciando servidor');

const http = require('http'); //requiere el paquete http 
const { type } = require('os');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;


const server = http.createServer((req, res) => {
    //1. obtener url desde el objeto request 
    const urlActual = req.url;
    const urlParseada = url.parse(urlActual, true);

    //2. obtener la ruta
    const ruta = urlParseada.pathname;
    //3. quitar slash 
    const rutaLimpia = ruta.replace(/^\/+|\/+$/g, '');
    //3.1 obtener el método http
    const metodo = req.method;
    //3.2 obtener las variables del query url 
    const { query = {} } = urlParseada;
    console.log({ query });
    //3.3 obtener headers 
    const { headers = {} } = req;
    console.log({ headers });
    //3.4 obtener payload, en el caso de haber uno 
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    //3.4.1 ir acumulando la data cuando el request reciba un payload 
    req.on('data', (data) => {
        buffer += decoder.write(data);
    });
    //3.4.2 terminar de acumular datos y decirle al decoder que finalice
    req.on('end', () => {
        buffer += decoder.end();
        //3.5 ordenar la data del request
        const data = {
            ruta: rutaLimpia,
            query,
            metodo,
            headers,
            payload: buffer
        };
        //3.6 elegir el manejador dependiendo de la ruta y asignarle la funcion que el enrutador tiene
        let handler;
        if(rutaLimpia &&enrutador[rutaLimpia]){
            handler = enrutador[rutaLimpia];
        }
        else{
            handler = enrutador.noEncontrado;
        }
        //4. ejecutar handler {manejador}  para enviar la respuesta
        if(typeof handler ==='function'){
            handler(data, (statusCode = 200, mensaje) =>{
                const respuesta = JSON.stringify(mensaje);
                res.writeHead(statusCode);
                //linea donde realmente ya estamos respondiendo a la aplicacion cliente
                res.end(respuesta);

            } )
        }

    });

});
server.listen(5000);
const enrutador = {
    ruta: (data, callback) => {
        callback(200, { mensaje: 'esta es /ruta' });
    },
    usuarios: (data, callback) => {
        callback(200, [{ nombre: 'usuario 1' }, { nombre: 'usuario 2' } ]);
    },
    noEncontrado: (data, callback) => {
        callback(404, { mensaje: 'no encontrado' });
    }

}


console.log('el servidor esta escuchando peticiones en http://localhost:5000/');