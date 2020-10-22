const listaVehiculos = document.getElementById('lista-vehiculos');
const tipovehiculo = document.getElementById('tipovehiculo');
const marca = document.getElementById('marca');
const linea = document.getElementById('linea');
const tipopropietario = document.getElementById('tipopropietario');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const url = "http://localhost:5000/vehiculos";

let vehiculos = [];

async function listarVehiculos() {

    try {
        const respuesta = await fetch(url);
        const vehiculosDelServer = await respuesta.json();

        if (Array.isArray(vehiculosDelServer) && vehiculosDelServer.length > 0) {

            vehiculos = vehiculosDelServer;

        }
        const htmlVehiculos = vehiculos
            .map(
                (vehiculo, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${vehiculo.tipoVehiculo}</td>
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.linea}</td>
        <td>${vehiculo.tipoPropietario}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminarVehiculo"><i class="far fa-trash-alt"></i></button>
            </div> 
    </td>
    </tr>`).join("");
        listaVehiculos.innerHTML = htmlVehiculos;
        Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
        Array.from(document.getElementsByClassName('eliminarVehiculo')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminarVehiculo(index));
    }
    catch (error) {
        throw error;

    }


}

async function enviarDatos(evento) {
    evento.preventDefault();

    try {
        const datos = {
            marca: marca.value,
            linea: linea.value,
            tipovehiculo: tipovehiculo.value,
            tipopropietario: tipopropietario.value
        };
        let method = "POST";
        let urlEnvio = url;
        const accion = btnGuardar.innerHTML;
        if (accion == "Editar") {
            method = "PUT";
            vehiculos[indice.value] = datos;
            urlEnvio = `${url}/indice.value`;
        }

        const respuesta = await fetch(urlEnvio, {
           method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos),
        });
        if (respuesta.ok) {
            listarVehiculos();
            resetModal();
        }
    }
    catch (error) {
        throw error;
    }



}


function editar(index) {

    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar';
        $('#exampleModal').modal('toggle');
        const vehiculo = vehiculos[index];
        marca.value = vehiculo.marca;
        linea.value = vehiculo.linea;
        tipovehiculo.value = vehiculo.tipovehiculo;
        tipopropietario.value = vehiculo.tipopropietario;
        indice.value = index;
    }

}

function resetModal() {
    marca.value = '';
    linea.value = '';
    tipovehiculo.value = '';
    tipopropietario.value = '';
    btnGuardar.innerHTML = 'Crear';

}

function eliminarVehiculo(index) {
    return function clickEnEliminar() {
        console.log(index);
        vehiculos = vehiculos.filter((vehiculo, indiceVehiculo) => indiceVehiculo !== index);
        listarVehiculos();
    }
}

listarVehiculos();


form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;