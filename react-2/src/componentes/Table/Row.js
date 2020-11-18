import { faColumns } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ActionButton from "../ActionButton"

const evaluarCampo = ({ entidad, columna }) => {
    if (columna == 'mecanico') {
        return `${entidad[columna].nombre} ${entidad[columna].apellido}`;
    }

    if (columna == 'vehiculo') {
        return `${entidad[columna].marca} (${entidad[columna].linea})`;
    }
     return entidad[columna];
}

function Row({
    entidad,
    index,
    editarEntidad = () => { },
    eliminarEntidad = () => { },
    columnas = [], }
) {
    return (
        <tr>
            <th scope="row">{index}</th>
            {columnas.map((columna, _index) => (
                <td key={`col-${columna}-${_index}`}>
                    {evaluarCampo({entidad, columna})} 
                    </td>
            ))}
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <ActionButton tipo="editar" onClick={editarEntidad} index={index} />
                    <ActionButton tipo="eliminar" onClick={(e) => eliminarEntidad(e, index)} />
                </div>
            </td>
        </tr>
    );
}
export default Row;