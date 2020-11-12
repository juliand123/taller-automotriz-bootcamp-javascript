import React, { useState } from "react";
import "./ActionsMenu.css";
import Alert from "../Alert";

function ActionsMenu(){
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    return (<div className="actions-menu">
    <h1>Vehiculos</h1>
    <div className="actions-menu-content">
        <button 
        type="button" 
        className="btn btn-primary" 
        data-toggle="modal" 
        data-target="#exampleModal"
        onClick = {()=>setMostrarAlerta(!mostrarAlerta)}
        >
            Nuevo
        </button>
        {mostrarAlerta && <Alert />}
    </div>
</div>
);
}
export default ActionsMenu;