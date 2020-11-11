import React from "react";

function Vehiculos() {

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg " >
                    <a className="navbar-brand" href="#">Taller Mecanica</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/index.html">Vehiculos <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/mecanicos.html">Mecanicos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/diagnosticos.html">Diagnosticos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/duenos.html">Dueños</a>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="actions-menu">
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