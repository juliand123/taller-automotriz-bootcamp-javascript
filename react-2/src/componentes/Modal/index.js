import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter"
import Select from "../Select";
import Input from "../Input";
import "./Modal.css";

const tiposVehiculo = [
    { valor: "Tipo Vehículo", etiqueta: "Tipo Vehículo" },
    { valor: "Sedan", etiqueta: "Sedan" },
    { valor: "Automovil", etiqueta: "Automovil" },
    { valor: "Camioneta", etiqueta: "Camioneta" },
    { valor: "Crosover", etiqueta: "Crosover" },
    { valor: "Camion", etiqueta: "Camion" },
    { valor: "Otro", etiqueta: "Otro" },
];

const tiposDuenos = [
    { valor: "Propio", etiqueta: "Propio" },
    { valor: "Renting", etiqueta: "Renting" },
    { valor: "Leasing", etiqueta: "Leasing" },
    { valor: "Otro", etiqueta: "Otro" },
];

function Modal({
    cambiarModal = () => { },
    manejarInput = () => { },
    crearEntidad = () => { },
    objeto = () => { }
}) {
    return (
        <>
            <div className="modal" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader cambiarModal={cambiarModal} />
                        <div className="modal-body">
                            <form id="form">
                                <div className="form-row">
                                    <div className="col">
                                        <Select
                                            nombreCampo="tipovehiculo"
                                            options={tiposVehiculo}
                                            onChange={manejarInput}
                                            placeholder="Tipo Vehiculo"
                                            value={objeto.tipovehiculo}
                                        />
                                    </div>
                                </div>
                                <Input
                                    nombreCampo="marca"
                                    tipo="text"
                                    onInput={manejarInput}
                                    placeholder="Marca" 
                                    value={objeto.marca}
                                    />
                                <div className="col">
                                    <Input tipo="text"
                                        nombreCampo="linea"
                                        onInput={manejarInput}
                                        placeholder="Linea" 
                                        value={objeto.linea}
                                        />
                                </div>
                                <div className="col">
                                    <Select
                                        nombreCampo="tipopropietario"
                                        options={tiposDuenos}
                                        onChange={manejarInput}
                                        placeholder="Tipo Dueño"
                                        value={objeto.tipopropietario}
                                    />
                                </div>
                            </form>
                        </div>
                        <ModalFooter cambiarModal={cambiarModal} crearEntidad={crearEntidad} />
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
}
export default Modal;