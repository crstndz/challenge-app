import React, { useState, useEffect } from "react";
import ResultadosBusqueda from "../components/ResultadosBusqueda";
import SearchForm from "../components/SearchForm";

const CajaBusqueda = () => {
  const [breadcrumb, setBreabcrumb] = useState([]);
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  const [idButton, setIdButton] = useState();

  const handleClick = () => {
    setIdButton(id);
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  useEffect(() => {
    const fetchItems = async () => {
      await fetch(`http://localhost:8000/api/items/${idButton}`)
        .then((res) => res.json())
        .then((json) => {
          setItems(json.items);
          setBreabcrumb(json.breadcrumb);
        })
        .catch((err) => console.log(err));
    };
    fetchItems();
  }, [idButton]);

  return (
    <div className="bg-light">
      <div className="container">
        <SearchForm id={id} onChange={handleChange} onClick={handleClick} />
        <ResultadosBusqueda breadcrumb={breadcrumb} data={items} />
      </div>
    </div>
  );
};

export default CajaBusqueda;
