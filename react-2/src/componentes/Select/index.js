import React from "react"

function Select() {
    return (
        <div className="form-row">
            <div className="col">
                <select className="form-control" id="tipovehiculo">
                    <option>Tipo Vehículo</option>
                    <option>Sedan</option>
                    <option>Automovil</option>
                    <option>Camioneta</option>
                    <option>Crosover</option>
                    <option>Camion</option>
                    <option>Otro</option>
                </select>
            </div>
        </div>
    );
}

export default Select; 