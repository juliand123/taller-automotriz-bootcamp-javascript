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

function Modal({ cambiarModal = ()=>{} }) {
    return (
        <>
            <div className="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalHeader cambiarModal={cambiarModal} />
                        <div className="modal-body">
                            <form id="form">
                                <div className="form-row">
                                    <div className="col">
                                        <Select options={tiposVehiculo}
                                            nombreCampo="Tipo Vehiculo"
                                        />
                                    </div>
                                </div>
                               <Input tipo="text" nombreCampo= "Marca" />
                                <div className="col">
                                <Input tipo="text" nombreCampo = "Linea"/>
                                </div>
                                <div className="col">
                                    <Select options={tiposDuenos}
                                        nombreCampo="Tipo Dueño"
                                    />
                                </div>
                            </form>
                        </div>
                       <ModalFooter cambiarModal={cambiarModal} />
                    </div>
                </div>
            </div>
            <div class="modal-backdrop fade show"></div>
        </>
    );
}
export default Modal;