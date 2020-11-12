import React from "react";

function Row({vehiculo, index}) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{vehiculo.tipovehiculo}</td>
            <td>{vehiculo.marca}</td>
            <td>{vehiculo.linea}</td>
            <td>{vehiculo.tipopropietario}</td>
            <td>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-info editar">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-danger eliminar">
                        <i class="far fa-trash-alt"></i>
                    </button>
                </div>
            </td>
        </tr>
    );
}
export default Row;