console.log('iniciando servidor');

const http = require('http'); //requiere el paquete http 
const { type } = require('os');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const enrutador = require('./enrutador');

global.recursos = {
    vehiculos: [{ tipoVehiculo: 'Sedan', marca: 'Honda', linea: 'Civic', tipoPropietario: 'Renting' },
    { tipoVehiculo: 'Hatchback', marca: 'Nissan', linea: 'March', tipoPropietario: 'Renting' },
    { tipoVehiculo: 'Sedan', marca: 'Honda', linea: 'Integra', tipoPropietario: 'Propio' }]
}

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

        if (headers["content-type"] === 'application/json') {
            buffer = JSON.parse(buffer);
        }

        //3.4.3 revisar si tiene subruta en este caso es el indice del array
        if (rutaLimpia.indexOf('/') >= -1) {
            var [rutaPrincipal, indice] = rutaLimpia.split('/');
        }
        //3.5 ordenar la data del request
        const data = {
            indice,
            ruta: rutaPrincipal,
            query,
            metodo,
            headers,
            payload: buffer
        };

        console.log({ data })
        //3.6 elegir el manejador dependiendo de la ruta y asignarle la funcion que el enrutador tiene
        let handler;
        if (rutaPrincipal &&
            enrutador[rutaPrincipal] &&
            enrutador[rutaPrincipal][metodo]) {
            handler = enrutador[rutaPrincipal][metodo];
        }
        else {
            handler = enrutador.noEncontrado;
        }
        //4. ejecutar handler {manejador}  para enviar la respuesta
        if (typeof handler === 'function') {
            handler(data, (statusCode = 200, mensaje) => {
                const respuesta = JSON.stringify(mensaje);
                res.setHeader("Content-Type", "application/json");
                res.writeHead(statusCode);
                //linea donde realmente ya estamos respondiendo a la aplicacion cliente
                res.end(respuesta);

            })
        }
    });

});
server.listen(5000);

console.log('el servidor esta escuchando peticiones en http://localhost:5000/');