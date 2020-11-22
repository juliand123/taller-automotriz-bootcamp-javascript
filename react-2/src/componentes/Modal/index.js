import React from "react";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter"
import "./Modal.css";
import { obtenerUno } from "../../servicio";

function Modal({
    cambiarModal = () => { },
    crearEntidad = () => { },
    children = [],
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
                                    {children}
                                </div>
                            </form>
                        </div>
                        <ModalFooter
                            cambiarModal={cambiarModal}
                            crearEntidad={crearEntidad} />
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade show"></div>
        </>
    );
}

export default Modal;