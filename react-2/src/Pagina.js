import React, { Component } from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal";

class Pagina extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mostrarModal: false,
        };
    }

    cambiarModal = () =>{
        this.setState({ mostrarModal: !this.state.mostrarModal })
    }

//codigo del componente

    //este metodo siempre debe ir de ultimo
    render() {
        return (
            <>
                <div className="container">
                    <Nav />
                    <ActionsMenu cambiarModal={this.cambiarModal}  />
                    <Table />
                    {this.state.mostrarModal && <Modal cambiarModal={this.cambiarModal} />}
                </div>
            </>
        );
    }
}

export default Pagina;