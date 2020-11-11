import React from "react";

function Table() {
    return (
    <table className="table table-stripped table-hover">
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Tipo Vehículo</th>
                <th scope="col">Marca</th>
                <th scope="col">Línea</th>
                <th scope="col">Tipo Propietario</th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody id="lista-vehiculos">
        </tbody>
    </table>
    );
}
export default Table;




