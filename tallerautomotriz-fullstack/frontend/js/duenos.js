const listaDuenos = document.getElementById('lista-duenos');
const tipoidentificacion = document.getElementById('tipoidentificacion');
const identificacion = document.getElementById('identificacion');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const pais = document.getElementById('pais');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');
const url = 'https://taller-automotriz-backend.vercel.app/duenos';

let duenos = [];

async function listarDuenos() {
    try {
        const respuesta = await fetch(url);
        const duenosDelServer = await respuesta.json();
        if (Array.isArray(duenosDelServer)) {
            duenos = duenosDelServer;
        }
        if (duenos.length > 0) {
            let htmlDuenos = duenos
                .map(
                    (dueno, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${dueno.tipoidentificacion}</td>
        <td>${dueno.identificacion}</td>
        <td>${dueno.nombre}</td>
        <td>${dueno.apellido}</td>
        <td>${dueno.pais}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-info editar"><i class="fas fa-edit"></i></button>
                <button type="button" class="btn btn-danger eliminar"><i class="far fa-trash-alt"></i></button>
            </div> 
    </td>
    </tr>`).join("");
            listaDuenos.innerHTML = htmlDuenos;
            Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index) => botonEditar.onclick = editar(index));
            Array.from(document.getElementsByClassName('eliminar')).forEach((botonEliminar, index) => botonEliminar.onclick = eliminar(index));
            return;
        }
        listaDuenos.innerHTML = `<tr>
            <td colspan ="5" class="lista-vacia"> No hay duenos
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
            duenos[indice.value] = datos;
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
            listarDuenos();
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
        const dueno = duenos[index];
        tipoidentificacion.value = dueno.tipoidentificacion;
        identificacion.value = dueno.identificacion;
        nombre.value = dueno.nombre;
        apellido.value = dueno.apellido;
        pais.value = dueno.pais;
        indice.value = index;
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

function eliminar(index) {
    const urlEnvio = `${url}/${index}`;
    return async function clickEnEliminar() {
        try {

            const respuesta = await fetch(urlEnvio, {
                method: "DELETE",
                mode: "cors",
            });
            if (respuesta.ok) {
                listarDuenos();
                resetModal();
            }
        } catch (error) {
            $(".alert").show();
        }
    }
}

listarDuenos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;