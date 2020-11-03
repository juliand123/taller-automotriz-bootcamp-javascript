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
        if (Array.isArray(vehiculosDelServer)) {
            vehiculos = vehiculosDelServer;
        }
        if (vehiculos.length > 0) {
            const htmlVehiculos = vehiculos
                .map(
                    (vehiculo, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${vehiculo.tipovehiculo}</td>
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.linea}</td>
        <td>${vehiculo.tipopropietario}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div> 
    </td>
    </tr>`).join("");
            listaVehiculos.innerHTML = htmlVehiculos;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index));
            return;
        }
        listaVehiculos.innerHTML = `<tr>
            <td colspan ="5" class="lista-vacia"> No hay vehiculos
            </td>
        </tr>`
    }
    catch (error) {
        $(".alert").show();

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
        const accion = btnGuardar.innerHTML;
        let urlEnvio = url;
        let method = "POST";
        if (accion === "Editar") {
            method = "PUT";
            vehiculos[indice.value] = datos;
            urlEnvio = `${url}/${indice.value}`;
        }
        const response = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        if (response.ok) {
            listarVehiculos();
            resetModal();
        }
    }
    catch (error) {
        $(".alert").show();
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

function eliminar(index) {

    return async function clickEnEliminar() {
        urlEnvio = `${url}/${index}`;
        try {
            const response = await fetch(urlEnvio, {
                method: "DELETE"
            });

            if (response.ok) {
                listarVehiculos();
                resetModal();
            }
        } catch (error) {
            $(".alert").show();
        }
    }
}

function resetModal() {
    marca.value = '';
    linea.value = '';
    tipovehiculo.value = '';
    tipopropietario.value = '';
    btnGuardar.innerHTML = 'Crear';

}

listarVehiculos();


form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;