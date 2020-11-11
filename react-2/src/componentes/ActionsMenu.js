import React from "react";

function ActionsMenu(){
    return (<div className="actions-menu">
    <h1>Vehiculos</h1>
    <div className="actions-menu-content">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Nuevo
        </button>
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Opps!</strong> Algo esta muy mal, por favor vuelve a intentarlo!.
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</div>
);
}
export default ActionsMenu;