import React, { Component } from "react";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";
import { CrearEditarEntidad, listarEntidad, eliminarEntidad, obtenerUno } from "./servicio"
import ComponenteCampo from "./componentes/ComponenteCampo";

const opcionesIniciales = {
    tipovehiculo: [
        { valor: "Sedan", etiqueta: "Sedan" },
        { valor: "Hatchback", etiqueta: "Hatchback" }
    ],
    diagnostico: [
        { valor: "Problema en el motor", etiqueta: "Problema en el motor" },
        { valor: "Problema en la caja", etiqueta: " Problema en la caja" },
        { valor: "Problema en el sistema electrico", etiqueta: "Problema en el sistema electrico" }
    ],
    tipopropietario: [
        { valor: "Propio", etiqueta: "Propio" },
        { valor: "Renting", etiqueta: "Renting" }
    ],
    vehiculo: [],
    mecanico: [],
    dueno: [],

};

class Pagina extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method: "POST",
            columnas: [],
            options: opcionesIniciales,
        };
    }

    cambiarModal = (_evento, method = "POST",) => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method })
    }

    cambiarModal = (_evento, method = "POST", newState = {}) => {
        let _newState = {
            ...newState,
            mostrarModal: !this.state.mostrarModal,
            method,
        };
        if (method ==="POST") {
            _newState = {..._newState, idObjeto: null, objeto: {} };
        }
        this.obtenerOpcionesBackend(_newState);
    }

    listar = async () => {
        try {
            const { entidad } = this.props;
            const entidades = await listarEntidad({ entidad });
            let columnas = [];
            if (Array.isArray(entidades) && entidades.length > 0) {
                columnas = Object.keys(entidades[0] || []);
            }
            this.setState({ entidades, columnas });
        } catch (error) {

        }
    }

    manejarInput = (evento) => {
        const {
            target: { value, name }
        } = evento;
        let { objeto } = this.state;
        objeto = { ...objeto, [name]: value };
        this.setState({ objeto });
    }

    crearEntidad = async (_evento = null) => {
        const { entidad } = this.props;
        let { objeto, method, idObjeto } = this.state;
        await CrearEditarEntidad({ entidad, objeto, method, idObjeto });
        this.cambiarModal(_evento, "POST", {objeto: {}, idObjeto: null});
        this.listar();
    };
    obtenerOpcionesBackend = async (newState) => {
        const { options } = this.state;

        const vehiculosPromise = listarEntidad({ entidad: "vehiculos" });
        const mecanicosPromise = listarEntidad({ entidad: "mecanicos" });
        const duenosPromise = listarEntidad({ entidad: "duenos" });

        let [vehiculo, mecanico, dueno] = await Promise.all([
            vehiculosPromise,
            mecanicosPromise,
            duenosPromise
        ]);

        vehiculo = vehiculo.map((_vehiculo, index) => ({
            valor: index,
            etiqueta: `${_vehiculo.marca} ${_vehiculo.linea}`
        }));

        mecanico = mecanico.map((_mecanico, index) => ({
            valor: index,
            etiqueta: `${_mecanico.nombre} ${_mecanico.apellido}`
        }));

        dueno = dueno.map((_dueno, index) => ({
            valor: index,
            etiqueta: `${_dueno.nombre} ${_dueno.apellido}`
        }));

        const nuevasOpciones = { ...options, vehiculo, mecanico, dueno };
        this.setState({ ...newState, options: nuevasOpciones });

    }

    editarEntidad = async (_evento, index) => {
        const { entidad } = this.props;
        const { options } = this.state;

        const objeto = await obtenerUno({ entidad, idObjeto: index });

        const vehiculosPromise = listarEntidad({ entidad: "vehiculos" });
        const mecanicosPromise = listarEntidad({ entidad: "mecanicos" });
        const duenosPromise = listarEntidad({ entidad: "duenos" });
        let [vehiculo, mecanico, dueno] = await Promise.all([
            vehiculosPromise,
            mecanicosPromise,
            duenosPromise
        ]);
        vehiculo = vehiculo.map((_vehiculo, index) => ({
            valor: index,
            etiqueta: `${_vehiculo.marca} ${_vehiculo.linea}`
        }));

        mecanico = mecanico.map((_mecanico, index) => ({
            valor: index,
            etiqueta: `${_mecanico.nombre} ${_mecanico.apellido}`
        }));

        dueno = dueno.map((_dueno, index) => ({
            valor: index,
            etiqueta: `${_dueno.nombre} ${_dueno.apellido}`
        }));

        const nuevasOpciones = { ...options, vehiculo, mecanico, dueno };
        this.setState({ objeto, idObjeto: index, options: nuevasOpciones }, () => {
            this.cambiarModal(null, "PUT");
        });

    };

    eliminarEntidad = async (_evento, index) => {
        const { entidad } = this.props;
        eliminarEntidad({ entidad, idObjeto: index });
        const respuesta = await eliminarEntidad({ entidad, idObjeto: index });
        console.log({ respuesta });
        this.listar();

    }

    componentDidMount() {
        this.listar();
    }

    //codigo del componente

    //este metodo siempre debe ir de ultimo
    render() {
        const { titulo = "Pagina sin titulo", entidad } = this.props;
        const { columnas, idObjeto, entidades, objeto, options } = this.state;
        return (
            <>
                <ActionsMenu
                    cambiarModal={this.cambiarModal}
                    titulo={titulo} />
                <Table
                    entidades={entidades}
                    editarEntidad={this.editarEntidad}
                    eliminarEntidad={this.eliminarEntidad}
                    columnas={columnas}
                />

                {this.state.mostrarModal && (
                    <Modal
                        cambiarModal={this.cambiarModal}
                        manejarInput={this.manejarInput}
                        crearEntidad={this.crearEntidad}
                        //objeto={this.state.objeto}
                        entidad={entidad}
                        idObjeto={idObjeto}
                    >
                        {columnas.map((columna, index) => (
                            <ComponenteCampo
                                key={index}
                                manejarInput={this.manejarInput}
                                objeto={objeto}
                                nombreCampo={columna}
                                options={options}
                            />
                        ))}
                    </Modal>
                )}
            </>
        );
    }
}

export default Pagina;