import React from "react";
import ActionButton from "../ActionButton"
function Row({ entidad, index, 
    editarEntidad=() => {},
    eliminarEntidad=() => {} }) {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{entidad.tipovehiculo}</td>
            <td>{entidad.marca}</td>
            <td>{entidad.linea}</td>
            <td>{entidad.tipopropietario}</td>
            <td>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <ActionButton tipo="editar" onClick ={editarEntidad} index={index}/>
                    <ActionButton tipo="eliminar"  onClick ={(e)=>eliminarEntidad(e, index)}/>
                </div>
            </td>
        </tr>
    );
}
export default Row;