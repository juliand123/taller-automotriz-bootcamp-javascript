const listaVehiculos = document.getElementById('lista-vehiculos');
const tipovehiculo = document.getElementById('tipovehiculo');
const marca = document.getElementById('marca');
const linea = document.getElementById('linea');
const tipopropietario = document.getElementById('tipopropietario');
const indice = document.getElementById('indice');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('btn-guardar');


let vehiculos = [
    {
        marca: "Honda",
        linea: "Civic",
        tipovehiculo: "Sedan",
        tipopropietario: "Renting"
    },
    {
        marca: "Honda",
        linea: "Integra",
        tipovehiculo: "Sedan",
        tipopropietario: "Renting"
    }
];

function listarVehiculos() {
    let htmlVehiculos = vehiculos.map((vehiculo, index) => `<tr>
        <th scope="row">${index}</th>
        <td>${vehiculo.tipovehiculo}</td>
        <td>${vehiculo.marca}</td>
        <td>${vehiculo.linea}</td>
        <td>${vehiculo.tipopropietario}</td>
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

function enviarDatos(evento) {
    evento.preventDefault();
    const datos = {
        marca: marca.value,
        linea: linea.value,
        tipovehiculo: tipovehiculo.value,
        tipopropietario: tipopropietario.value
    };
    const accion = btnGuardar.innerHTML;
   
    switch(accion){
        case'Editar':
        //editar
        vehiculos[indice.value] = datos;
        break;
        default:
        //crear
        vehiculos.push(datos);
        break;
    }
    listarVehiculos();
    resetModal();
}

function editar(index) {

    return function cuandoCliqueo() {
        btnGuardar.innerHTML='Editar';
        $('#exampleModal').modal('toggle');
        const vehiculo = vehiculos[index];
        marca.value = vehiculo.marca;
        linea.value = vehiculo.linea;
        tipovehiculo.value = vehiculo.tipovehiculo;
        tipopropietario.value = vehiculo.tipopropietario;
        indice.value = index;
    }
  
}

function resetModal(){
        marca.value = '';
        linea.value = '';
        tipovehiculo.value = '';
        tipopropietario.value = '';
        btnGuardar.innerHTML='Crear';

}

function eliminarVehiculo(index){
    return function clickEnEliminar()
    {    console.log(index);
       vehiculos = vehiculos.filter((vehiculo, indiceVehiculo) => indiceVehiculo !== index);
       listarVehiculos();
    }
}

listarVehiculos();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;