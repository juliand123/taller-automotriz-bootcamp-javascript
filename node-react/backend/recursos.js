module.exports = {
    vehiculos: [
    { tipovehiculo: 'Sedan', marca: 'Honda', linea: 'Civic', tipopropietario: 'Renting' },
    { tipovehiculo: 'Hatchback', marca: 'Nissan', linea: 'March', tipopropietario: 'Renting' },
    { tipovehiculo: 'Sedan', marca: 'Honda', linea: 'Integra', tipopropietario: 'Propio' },
    { tipovehiculo: 'Sedan', marca: 'Nissan', linea: 'Almera', tipopropietario: 'Propio' },
    { tipovehiculo: 'Sedan', marca: 'Toyota', linea: 'Corolla', tipopropietario: 'Propio' },
    { tipovehiculo: 'Sedan', marca: 'Renault', linea: 'Symbol', tipopropietario: 'Renting' },
    { tipovehiculo: 'Camioneta', marca: 'Toyota', linea: 'Prado', tipopropietario: 'Renting' }
    ],
    mecanicos: [
        { tipoidentificacion: 'Cedula', identificacion: '32520366', nombre: 'Alberto', apellido: 'Chamorro', pais: 'Colombia' },
        { tipoidentificacion: 'Cedula', identificacion: '805653', nombre: 'Juan', apellido: 'Chapeto', pais: 'Colombia' },
        { tipoidentificacion: 'Cedula', identificacion: '78459456', nombre: 'Benito', apellido: 'Camelas', pais: 'Colombia' }
    ],
    duenos: [
        { tipoidentificacion: 'Cedula', identificacion: '123456', nombre: 'Laga', apellido: 'Rapata', pais: 'Colombia' },
        { tipoidentificacion: 'Cedula', identificacion: '85479', nombre: 'Chepe', apellido: 'Arias', pais: 'Colombia' },
        { tipoidentificacion: 'Cedula', identificacion: '133', nombre: 'Beni', apellido: 'Rascamelas', pais: 'Colombia' }
    ],
    diagnosticos: [
        {
        vehiculo: '0',
        mecanico: '0',
        fechaCreacion: new Date(),
        fechaEdicion: null,
        historia: "",
        diagnostico: "diagnostico"
    },
    {
        vehiculo: '1',
        mecanico: '1',
        fechaCreacion: new Date(),
        fechaEdicion: null,
        historia: "",
        diagnostico: "diagnostico"
    }

],

};