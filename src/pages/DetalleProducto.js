import React, { useEffect, useState } from "react";
import ResultadoDetalle from "../components/ResultadoDetalle";
import ResultadosBusqueda from "../components/ResultadosBusqueda";
import SearchForm from "../components/SearchForm";

const DetalleProducto = (props) => {
  const [breadcrumb, setBreabcrumb] = useState([]);
  const [description, setDescription] = useState();
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  const [idButton, setIdButton] = useState(props.match.params.id);

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
          console.log(json);
          setItems(json.items);
          setBreabcrumb(json.breadcrumb);
          setDescription(json.description);
        })
        .catch((err) => console.log(err));
    };
    fetchItems();
  }, [idButton]);

  return (
    <div className="container">
      <SearchForm id={id} onChange={handleChange} onClick={handleClick} />
      {items.length > 1 ? (
        <ResultadosBusqueda breadcrumb={breadcrumb} data={items} />
      ) : (
        <ResultadoDetalle data={items} description={description} breadcrumb={breadcrumb}/>
      )}
    </div>
  );
};

export default DetalleProducto;
