
const listaDiagnosticos = document.getElementById("lista-diagnosticos");
const vehiculo = document.getElementById("vehiculo");
const mecanico = document.getElementById("mecanico");
const historia = document.getElementById("historia");
const diagnostico = document.getElementById("diagnostico");
const indice = document.getElementById('indice');
const btnGuardar = document.getElementById('btn-guardar');

let diagnosticos = [];
let vehiculos = [];
let mecanicos = [];

const url = 'http://localhost:5000';

async function listarDiagnosticos() {
    const entidad = 'diagnosticos'
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const diagnosticosDelServidor = await respuesta.json();
        if (Array.isArray(diagnosticosDelServidor)) {
            diagnosticos = diagnosticosDelServidor;
        }
        if (diagnosticos.length > 0) {
            let htmlDiagnosticos = diagnosticos
                .map(
                    (diagnostico, index) =>
                        `<tr>
                <th scope="row">${index}</th>
                <td>${diagnostico.vehiculo.marca} ${diagnostico.vehiculo.linea}</td>
                <td>${diagnostico.mecanico.nombre} ${diagnostico.mecanico.apellido}</td>
                <td>${diagnostico.fechaCreacion}</td>
                <td>${diagnostico.fechaEdicion}</td>
                <td>${diagnostico.historia}</td>
                <td>${diagnostico.diagnostico}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button class="btn btn-info editar" type="button" class="btn btn-info">Editar</button>
                    </div> 
                </td>
             </tr>`).join("");

            listaDiagnosticos.innerHTML = htmlDiagnosticos;
            Array.from(document.getElementsByClassName("editar")).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
        }

    } catch (error) {
        throw (error);
    }

}

async function listarVehiculos() {
    const entidad = 'vehiculos'
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const vehiculosDelServidor = await respuesta.json();
        if (Array.isArray(vehiculosDelServidor)) {
            vehiculos = vehiculosDelServidor;
        }
        if (respuesta.ok) {
            vehiculos.forEach((_vehiculo, indice) => {
                const optionActual = document.createElement("option");
                optionActual.innerHTML = `${_vehiculo.marca} ${_vehiculo.linea}`;
                optionActual.value = indice;
                vehiculo.appendChild(optionActual);
            });
        }

    } catch (error) {
        throw (error);
    }

}

async function listarMecanicos() {
    const entidad = 'mecanicos'
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const mecanicosDelServidor = await respuesta.json();
        if (Array.isArray(mecanicosDelServidor)) {
            mecanicos = mecanicosDelServidor;
        }
        if (respuesta.ok) {
            mecanicos.forEach((_mecanico, indice) => {
                const optionActual = document.createElement("option");
                optionActual.innerHTML = `${_mecanico.nombre} ${_mecanico.apellido}`;
                optionActual.value = indice;
                mecanico.appendChild(optionActual);
            });
        }

    } catch (error) {
        throw (error);
    }

}

function editar(index) {

    return function cuandoCliqueo() {
        btnGuardar.innerHTML = 'Editar';
        $('#exampleModal').modal('toggle');
        const diagnostico = diagnosticos[index];
        indice.value = index;
        vehiculo.value = diagnostico.vehiculo.id;
        mecanico.value = diagnostico.mecanico.id;
        historia.value = diagnostico.historia;
        diagnostico.value = diagnostico.diagnostico;
    }

}

async function enviarDatos(evento) {
    const entidad = "diagnosticos";
    evento.preventDefault();
    try {
        const datos = {
            vehiculo: vehiculo.value,
            mecanico: mecanico.value,
            historia: historia.value,
            diagnostico: diagnostico.value,
            indice: indice.value
        };
        const accion = btnGuardar.innerHTML;
        let urlEnvio = `${url}/${entidad}`;
        let method = "POST";
        if (accion === "Editar") {
            method = "PUT";
            urlEnvio = `${url}/${entidad}/${indice.value}`;
        }
        const response = await fetch(urlEnvio, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(datos),
        });
        if (response.ok) {
            listarDiagnosticos();
            resetModal();
        }
    }
    catch (error) {
        throw error;
        //$(".alert").show();
    }
}

function resetModal() {

    vehiculo.value = "",
        mecanico.value = "",
        historia.value = "",
        diagnostico.value = "",
        btnGuardar.innerHTML = 'Crear'
        $('#exampleModal').modal('toggle');
}

btnGuardar.onclick = enviarDatos;

listarVehiculos();
listarMecanicos();
listarDiagnosticos();