const listaDiagnosticos = document.getElementById("lista-diagnosticos");
const tiposvehiculo = document.getElementById("vehiculo");

let diagnosticos = [];


const url = 'http://localhost:5000';

async function listarDiagnosticos() {
    const entidad = 'diagnosticos'
    try {
        const respuesta = await fetch(`${url}/${entidad}`);
        const diagnosticosDelServidor = await respuesta.json();
        if (Array.isArray(diagnosticosDelServidor)) {
            diagnosticos = diagnosticosDelServidor;
        }
        if (diagnosticos.length >0) {
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
                        <button type="button" class="btn btn-info">Editar</button>
                    </div> 
                </td>
             </tr>`).join("");
               
            listaDiagnosticos.innerHTML = htmlDiagnosticos;
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
            vehiculos.forEach((_vehiculo, indice) =>{ 
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
            mecanicos.forEach((_mecanico, indice) =>{ 
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

listarVehiculos();
listarMecanicos();
listarDiagnosticos();