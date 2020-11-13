import React from "react";
import ModalHeader from "./ModalHeader";
import Select from "../Select";
function Modal() {
    return (<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <ModalHeader />
                <div className="modal-body">
                    <form id="form">
                        <Select />
                        <div className="form-row">
                            <div className="col">
                                <input type="text" name="marca" id="marca" className="form-control" placeholder="Marca" />
                            </div>
                            <div className="col">
                                <input type="text" name="linea" id="linea" className="form-control" placeholder="Línea" />
                            </div>
                            <div className="col">
                                <select className="form-control" id="tipopropietario">
                                    <option>Tipo Propietario</option>
                                    <option>Propio</option>
                                    <option>Renting</option>
                                    <option>Leasing</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    <button type="button" className="btn btn-primary" data-dismiss="modal" id="btn-guardar">Crear</button>
                </div>
            </div>
        </div>
    </div>);
}
export default Modal;