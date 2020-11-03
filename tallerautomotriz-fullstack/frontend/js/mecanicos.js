const listaMecanicos = document.getElementById('lista-mecanicos');
const tipoidentificacion = document.getElementById('tipoidentificacion');
const identificacion = document.getElementById('identificacion');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const url = 'http://localhost:5000/mecanicos';

let mecanicos = [];

async function listarMecanicos() {

    try {
        const respuesta = await fetch(url);
        const mecanicosDelServer = await respuesta.json();
        if (Array.isArray(mecanicosDelServer)) {
            mecanicos = mecanicosDelServer;
        }
        if (mecanicos.length > 0) {
            let htmlMecanicos = mecanicos
                .map(
                    (mecanico, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${mecanico.tipoidentificacion}</td>
        <td>${mecanico.identificacion}</td>
        <td>${mecanico.nombre}</td>
        <td>${mecanico.apellido}</td>
        <td>${mecanico.pais}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminarMecanico"><i class="far fa-trash-alt"></i></button>
            </div> 
    </td>
    </tr>`).join("");
            listaMecanicos.innerHTML = htmlMecanicos;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
            Array.from(document.getElementsByClassName('eliminarMecanico')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index));
            return;
        }
        listaMecanicos.innerHTML = `<tr>
            <td colspan ="5" class="lista-vacia"> No hay mecanicos
            </td>
        </tr>`
    } catch (error) {
        $(".alert").show();

    }
}

async function enviarDatos(evento) {
    evento.preventDefault();
    try {
        const datos = {
            tipoidentificacion: tipoidentificacion.value,
            identificacion: identificacion.value,
            nombre: nombre.value,
            apellido: apellido.value,
            pais: pais.value
        };
        const accion = btnGuardar.innerHTML;
        let urlEnvio = url;
        let method = "POST";
        if (accion === "Editar") {
            method = "PUT";
            mecanicos[indice.value] = datos;
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
            listarMecanicos();
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
        const mecanico = mecanicos[index];
        indice.value = index;
        nombre.value = mecanico.nombre;
        apellido.value = mecanico.apellido;
        pais.value = mecanico.pais;
        tipoidentificacion.value = mecanico.tipoidentificacion;
        identificacion.value = mecanico.identificacion;

    }

}

function eliminar(index) {
    const urlEnvio = `${url}/${index}`;
    return async function clickEnEliminar() {
        try {

            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",
                mode: "cors",
            });
            if (respuesta.ok) {
                listarMecanicos();
                resetModal();
            }
        } catch (error) {
            $(".alert").show();
        }
    }
}

function resetModal() {
    tipoidentificacion.value = '';
    identificacion.value = '';
    nombre.value = '';
    apellido.value = '';
    pais.value = '';
    btnGuardar.innerHTML = 'Crear';

}

function eliminarMecanico(index) {
    const urlEnvio = `${url}/${indice.value}`;
    return function clickEnEliminar() {
        console.log(index);
        mecanicos = mecanicos.filter((vehiculo, indiceMecanico) => indiceMecanico !== index);
        listarMecanicos();
    }
}

listarMecanicos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;