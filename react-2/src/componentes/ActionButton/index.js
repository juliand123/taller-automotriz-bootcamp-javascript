import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons"

function ActionButton() {
    return (<button type="button" class="btn btn-info editar">
        { tipo === "editar" && <FontAwesomeIcon icon={faEdit} />}
        { tipo === "eliminar" && <FontAwesomeIcon icon={faTrashAlt} />}
    </button>
    );
}

export default ActionButton;