import React from "react";
import "./Input.css";

function Input({ tipo = "text", nombreCampo }) {
    return (
        <input
            type= {tipo}
            name={nombreCampo}
            id={nombreCampo}
            className="form-control"
            placeholder={nombreCampo}/>
    )

}

export default  Input;