module.exports = {
    vehiculos: [{ tipoVehiculo: 'Sedan', marca: 'Honda', linea: 'Civic', tipoPropietario: 'Renting' },
    { tipoVehiculo: 'Hatchback', marca: 'Nissan', linea: 'March', tipoPropietario: 'Renting' },
    { tipoVehiculo: 'Sedan', marca: 'Honda', linea: 'Integra', tipoPropietario: 'Propio' },
    { tipoVehiculo: 'Sedan', marca: 'Nissan', linea: 'Almera', tipoPropietario: 'Propio' },
    { tipoVehiculo: 'Sedan', marca: 'Toyota', linea: 'Corolla', tipoPropietario: 'Propio' },
    { tipoVehiculo: 'Sedan', marca: 'Renault', linea: 'Symbol', tipoPropietario: 'Renting' },
    { tipoVehiculo: 'Camioneta', marca: 'Toyota', linea: 'Prado', tipoPropietario: 'Renting' }
    ],
    mecanicos: [
        { tipoIdentificacion: 'Cedula', identificacion: '32520366', nombre: 'Alberto', apellido: 'Chamorro', pais: 'Colombia' },
        { tipoIdentificacion: 'Cedula', identificacion: '805653', nombre: 'Juan', apellido: 'Chapeto', pais: 'Colombia' },
        { tipoIdentificacion: 'Cedula', identificacion: '78459456', nombre: 'Benito', apellido: 'Camelas', pais: 'Colombia' }
    ],
    duenos: [
        { tipoIdentificacion: 'Cedula', identificacion: '123456', nombre: 'Laga', apellido: 'Rapata', pais: 'Colombia' },
        { tipoIdentificacion: 'Cedula', identificacion: '85479', nombre: 'Chepe', apellido: 'Arias', pais: 'Colombia' },
        { tipoIdentificacion: 'Cedula', identificacion: '133', nombre: 'Beni', apellido: 'Rascamelas', pais: 'Colombia' }
    ],
    diagnosticos: [{
        vehiculo: 0,
        mecanico: 0,
        encabezado: "encabezado",
        fechaCreacion: new Date(),
        fechaEdicion: null,
        historia: "",
        diagnostico: ""
    }],

};