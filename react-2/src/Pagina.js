import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";
import {listarEntidad} from "./servicio"

class Pagina extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
            entidades: [],
        };
    }

    cambiarModal = () =>{
        this.setState({ mostrarModal: !this.state.mostrarModal })
    }

     listar = async () =>{
        try {
            const {entidad} = this.props;
            const entidades =await  listarEntidad({ entidad });
             this.setState({entidades});
        } catch (error) {
            
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.listar();
    }

//codigo del componente

    //este metodo siempre debe ir de ultimo
    render() {
        const {titulo = "Pagina sin titulo"} = this.props;
        return (
            <>
                <div className="container">
                    <Nav />
                    <ActionsMenu cambiarModal={this.cambiarModal} titulo={titulo} />
                    <Table entidades={this.state.entidades} />
                    {this.state.mostrarModal && <Modal cambiarModal={this.cambiarModal} />}
                </div>
            </>
        );
    }
}

export default Pagina;