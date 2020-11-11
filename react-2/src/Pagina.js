import React from "react";
import Nav from "./componentes/Nav";
import ActionsMenu from "./componentes/ActionsMenu";
import Table from "./componentes/Table";

function Vehiculos() {

    return (
        <>
            <div className="container">
                <Nav />
                <ActionsMenu />
                <Table />
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Vehiculo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="form">
                                <input type="hidden" id="indice" />
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
                            <button type="button" 
                            className="btn btn-secondary" 
                            data-dismiss="modal">Cerrar</button>
                            <button type="button" 
                            className="btn btn-primary" 
                            data-dismiss="modal" 
                            id="btn-guardar">
                                Crear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Vehiculos;