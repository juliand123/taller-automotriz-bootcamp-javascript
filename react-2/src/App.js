import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Pagina from "./Pagina";
import Nav from "./componentes/Nav";

function App() {

  return (
    <div className="container">
    <Nav />
    <Switch>
      <Route
        exact
        path="/"
        component={() => (<Pagina titulo="Vehiculos" entidad="vehiculos" />)}
      />
      <Route path="/mecanicos" component={() => (<Pagina titulo="Mecanicos" entidad="mecanicos" />)}
      />
      <Route path="/duenos" component={() => (<Pagina titulo="Dueños" entidad="duenos" />)}
      />
      <Route path="/diagnosticos" component={() => (<Pagina titulo="Diagnosticos" entidad="diagnosticos" />)}
      />
    </Switch>
    </div>
  );
}

export default App;
