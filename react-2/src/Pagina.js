import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";
import { CrearEditarEntidad, listarEntidad, eliminarEntidad } from "./servicio"

class Pagina extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
            objeto: {},
            idObjeto: null,
            method: "POST",
        };
    }

    cambiarModal = (_evento, method = "POST") => {
        this.setState({ mostrarModal: !this.state.mostrarModal, method })
    }

    listar = async () => {
        try {
            const { entidad } = this.props;
            const entidades = await listarEntidad({ entidad });
            this.setState({ entidades });
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
        let { objeto, method, idObjeto  } = this.state;
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

    eliminarEntidad = async (_evento, index)=>{
        const {entidad} = this.props;
        eliminarEntidad({entidad, idObjeto: index});
        const respuesta = await eliminarEntidad({entidad, idObjeto: index});
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
        return (
            <>
                <div className="container">
                    <Nav />
                    <ActionsMenu
                        cambiarModal={this.cambiarModal}
                        titulo={titulo} />
                    <Table
                        entidades={this.state.entidades}
                        editarEntidad={this.editarEntidad}
                        eliminarEntidad = {this.eliminarEntidad} />

                    {this.state.mostrarModal &&
                        <Modal cambiarModal={this.cambiarModal}
                            manejarInput={this.manejarInput}
                            crearEntidad={this.crearEntidad}
                            objeto = {this.state.objeto}
                        />}
                </div>
            </>
        );
    }
}

export default Pagina;