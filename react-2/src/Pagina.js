import React from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";
import Modal from "./componentes/Modal"

function Vehiculos() {
    return (
        <>
            <div className="container">
                <Nav />
                <ActionsMenu />
                <Table />
            </div>
        </>
    );
}

export default Vehiculos;