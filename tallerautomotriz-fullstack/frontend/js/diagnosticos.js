const listaDiagnosticos = document.getElementById("lista-diagnosticos");
let diagnosticos = [];
const url = 'http://localhost:5000/diagnosticos';

/* {
        vehiculo: 0,
        mecanico: 0,
        encabezado: "encabezado",
        fechaCreacion: new Date(),
        fechaEdicion: null,
        historia: "",
        diagnostico: ""
    } */


async function listarDiagnosticos() {
    try {
        const respuesta = await fetch(url);
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
                <td>${diagnostico.vehiculo}</td>
                <td>${diagnostico.mecanico}</td>
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

listarDiagnosticos();