import React from "react";
import "./Header.css"

function Header(props) {
    if (props.columnas.lenght === 0) return false;
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                {props.columnas.map((columna) => (
                 <th scope="col">{(columna).toUpperCase()}</th>
                ))}
                <th scope="col"></th>
            </tr>
        </thead>
    );
}
export default Header;