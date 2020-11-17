import React from "react";
import Search from "../Search";
import "./Nav.css";
function Nav() {
    return (<nav className="navbar navbar-dark bg-dark navbar-expand-lg " >
        <a className="navbar-brand" href="#">
            Taller Mecanica
        </a>
        <div className="navbar-right" id="navbarColor03">
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
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
                <button
                    className="btn btn-outline-primary my-2 my-sm-0"
                    type="submit">Search
          </button>
            </form>
        </div>
    </nav>
    );
}
export default Nav;
