import React from "react";
import ActionButton from "../ActionButton"
function Row({ entidad, index }) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{entidad.tipovehiculo}</td>
            <td>{entidad.marca}</td>
            <td>{entidad.linea}</td>
            <td>{entidad.tipopropietario}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <ActionButton tipo="editar" />
                    <ActionButton tipo="eliminar" />
                </div>
            </td>
        </tr>
    );
}
export default Row;