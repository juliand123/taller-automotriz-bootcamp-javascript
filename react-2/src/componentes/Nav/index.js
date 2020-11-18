import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./Nav.css";
function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg " >
            <Link className="navbar-brand" to="/">
                Taller Mecanica
        </Link>
            <div className="navbar-right" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            Vehiculos <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mecanicos">
                            Mecanicos
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/diagnosticos">
                            Diagnosticos
                            </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/duenos">
                            Dueños</Link>
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
