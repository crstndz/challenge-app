import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CajaBusqueda from "../pages/CajaBusqueda";
import DetalleProducto from "../pages/DetalleProducto";
import ResultadosContainer from "../pages/ResultadosContainer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CajaBusqueda} />
        <Route exact path="/items/:id" component={DetalleProducto} />
        <Route path="/items" component={ResultadosContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
