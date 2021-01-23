import React from "react";
import Breadcrumb from "./Breadcrumb";

const ResultadoDetalle = ({ data, description, breadcrumb }) => {
  return (
    <div className="container">
      <Breadcrumb links={breadcrumb} />
      {data.map((item, key) => {
        return (
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <img
                    className="card-img-center w-100"
                    src={item.picture}
                    alt=""
                  />
                </div>
                <div className="col-12">
                  <h4>Descripción de Producto</h4>
                  <p className="text-break">{description}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <p className="card-text">
                <small className="text-capitalize text-muted">
                  {item.condition} | {item.sold_quantity} vendidos
                </small>
              </p>
              <h4>{item.title}</h4>
              <div className="mt-2">
                <h1>$ {item.price.amount}</h1>
              </div>
              <div className="col-12 mt-4">
                <button type="utton" className="btn btn-primary btn-block">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultadoDetalle;
