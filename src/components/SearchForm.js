import React from "react";

const SearchForm = (props) => {
  const { id, onChange, onClick } = props;
  return (
    <div className="bg-warning p-2">
      <div className="row">
        <div className="col-1 ml-2">
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.1/mercadolibre/logo__small.png"
            alt=""
          />
        </div>
        <div className="col-9 p-0">
          <input
            name="query"
            className="form-control"
            type="text"
            placeholder="Nunca dejes de buscar..."
            value={id}
            onChange={onChange}
          />
        </div>
        <div className="col-1 p-0">
          <button type="button" className="form-control" onClick={onClick}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
