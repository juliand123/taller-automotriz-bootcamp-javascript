import React, { useState } from "react";
import Header from "./Header";
import Row from "./Row";
import "./Table.css"

function Table() {
    const [vehiculos, setVehiculos] = useState([
        {
            tipovehiculo: "Sedan",
            marca: "Honda",
            linea: "Civic",
            tipopropietario: "Renting",
        },
        {
            tipovehiculo: "Sedan",
            marca: "Honda",
            linea: "Integra",
            tipopropietario: "Renting",
        },
    ]);

    const columnas = vehiculos.length > 0 ? Object.keys(vehiculos[0]) : [];
    return (
        <table className="table table-stripped table-hover">
            <Header columnas={columnas} />
            <tbody id="lista-vehiculos">
                {vehiculos.map((vehiculo, index) => (
                    <Row vehiculo={vehiculo} index={index} />
                ))}
            </tbody>
        </table>
    );
}
export default Table;


