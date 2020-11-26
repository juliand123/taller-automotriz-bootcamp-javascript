import React, { useState } from "react";
import Header from "./Header";
import Row from "./Row";
import "./Table.css"


function Table( {entidades = [], 
    editarEntidad=() => {},
    eliminarEntidad=() => {},
    columnas = [],
}) {
    
    return (
        <table className="table table-stripped table-hover">
            <Header columnas={columnas} />
            <tbody id="lista-vehiculos">
                {entidades.map((entidad, index) => (
                    <Row 
                    key={`fila-${index}`}  
                    index={index} 
                    entidad={entidad}
                    editarEntidad={editarEntidad}
                    eliminarEntidad={eliminarEntidad}
                    columnas={columnas}
                     />
                ))}
            </tbody>
        </table>
    );
}
export default Table;


