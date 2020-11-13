import React, { useState } from "react";
import "./ActionsMenu.css";
import Alert from "../Alert";

function ActionsMenu( {cambiarModal = () => {}}){
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    const alertSwitch = () => setMostrarAlerta(!mostrarAlerta)
    return (<div className="actions-menu">
    <h1>Vehiculos</h1>
    <div className="actions-menu-content">
        <button 
        type="button" 
        className="btn btn-primary" 
        data-toggle="modal" 
        data-target="#exampleModal"
        onClick = {cambiarModal}
        >
            Nuevo
        </button>
 
    </div>
</div>
);
}
export default ActionsMenu;