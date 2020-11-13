import React from "react";
import Modal from ".";

function ModalHeader(){
    return(
        <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Nuevo Vehiculo</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    );
}
export default ModalHeader;