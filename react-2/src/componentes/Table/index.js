import React, { useState } from "react";
import Header from "./Header";
import Row from "./Row";
import "./Table.css"

function Table( {entidades = []}) {
    

    const columnas = entidades.length > 0 ? Object.keys(entidades[0]) : [];
    return (
        <table className="table table-stripped table-hover">
            <Header columnas={columnas} />
            <tbody id="lista-vehiculos">
                {entidades.map((entidad, index) => (
                    <Row key={`fila-${index}`}  index={index} entidad={entidad} />
                ))}
            </tbody>
        </table>
    );
}
export default Table;


