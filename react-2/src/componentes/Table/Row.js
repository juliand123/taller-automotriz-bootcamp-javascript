import React from "react";
import ActionButton from "../ActionButton"
function Row({ vehiculo, index }) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{vehiculo.tipovehiculo}</td>
            <td>{vehiculo.marca}</td>
            <td>{vehiculo.linea}</td>
            <td>{vehiculo.tipopropietario}</td>
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