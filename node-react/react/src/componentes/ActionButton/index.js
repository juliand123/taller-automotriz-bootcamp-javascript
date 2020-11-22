import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons"
import classNames from "classnames"
import "./ActionButton.css";

function ActionButton({tipo, onClick=() => {}, index =""}) {
    return (<button type="button" className={classNames("btn", {
        "btn-info": tipo ==="editar" }, {
        "btn-danger": tipo ==="eliminar", 
        })}
        onClick = {(e) => onClick(e, index) }
        data-index = {index}
        >
        { tipo === "editar" && <FontAwesomeIcon icon={faEdit} />}
        { tipo === "eliminar" && <FontAwesomeIcon icon={faTrashAlt} /> }
    </button >
    );
}

export default ActionButton;