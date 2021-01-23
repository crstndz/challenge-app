import React from "react";
import ItemsList from "../components/ItemsList";
import Breadcrumb from "../components/Breadcrumb";

const ResultadosBusqueda = ({ breadcrumb, data }) => {
  return (
    <div className="container">
      <Breadcrumb links={breadcrumb} />
      <div>
        {data.length > 0 ? (
          <ItemsList items={data} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ResultadosBusqueda;
