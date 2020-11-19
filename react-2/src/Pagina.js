import React, { Component } from "react";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";
import { CrearEditarEntidad, listarEntidad, eliminarEntidad } from "./servicio"
import Select from "./componentes/Select";
import Input from "./componentes/Input";

const tiposvehiculo = [
    { valor: "Sedan", etiqueta: "Sedan" }
];

const ComponenteCampo = ({
    manejarInput = () => { },
    objeto = {},
    columna = "",
    nombreCampo = "",
}) => {
    switch (nombreCampo) {
        case 'tipo':
        case 'tipoidentificacion':
        case 'mecanico':
        case 'tipovehiculo':
        case 'tipopropietario':
            return (<Select
                nombreCampo={nombreCampo}
                options={tiposvehiculo}
                onChange={manejarInput}
                placeholder={nombreCampo}
                value={objeto[nombreCampo]}
            />);
        case 'identificacion':
        case 'nombre':
        case 'apellido':
        case 'historia':
        case 'diagnostico':
        case 'vehiculo':
        case 'pais':
        case 'marca':
        case 'linea':
    }
    return (<Input
        nombreCampo={nombreCampo}
        tipo="text"
        onInput={manejarInput}
        placeholder={nombreCampo}
        value={objeto.[nombreCampo]}
    />);
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
            columnas: []
        };
    }

    cambiarModal = (_evento, method = "POST") => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method })
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

    crearEntidad = async () => {
        const { entidad } = this.props;
        let { objeto, method, idObjeto } = this.state;
        await CrearEditarEntidad({ entidad, objeto, method, idObjeto });
        this.cambiarModal();
        this.listar();
    };


    editarEntidad = (_evento, index) => {
        const objeto = { ...this.state.entidades[index] };
        this.setState({ objeto, idObjeto: index }, () => {
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
        const { titulo = "Pagina sin titulo" } = this.props;
        const { columnas } = this.state;
        return (
            <>
                <ActionsMenu
                    cambiarModal={this.cambiarModal}
                    titulo={titulo} />
                <Table
                    entidades={this.state.entidades}
                    editarEntidad={this.editarEntidad}
                    eliminarEntidad={this.eliminarEntidad}
                    columnas={columnas}
                />

                {this.state.mostrarModal && (
                    <Modal
                        cambiarModal={this.cambiarModal}
                        manejarInput={this.manejarInput}
                        crearEntidad={this.crearEntidad}
                        objeto={this.state.objeto}
                    >
                        {columnas.map((columna, index) => (
                            <ComponenteCampo
                                key={index}
                                manejarInput={manejarInput}
                                objeto={this.state.objeto}
                                nombreCampo={columna}
                            />
                        ))}
                    </Modal>
                )}
            </>
        );
    }
}

export default Pagina;