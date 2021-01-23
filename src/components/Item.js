import React, { Component } from "react";

class Item extends Component {
  render() {
    const { id, title, price, picture, condition, free_shipping } = this.props;
    return (
      <div className="card mb-3">
        <div className="row">
          <div className="col-md-4">
            <a href={`/items/${id}`}>
              <img className="card-img-center w-50" src={picture} alt="" />
            </a>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                ${price.amount}
                {free_shipping ? (
                  <span className="position-absolute top- start-0 translate-middle badge border border-light rounded-circle bg-sucess ml-2 p-2">
                    <span className="visually-hidden"></span>
                  </span>
                ) : (
                  <span className="position-absolute top-0 start-0 translate-middle badge border border-light rounded-circle bg-danger ml-2 p-2">
                    <span className="visually-hidden"></span>
                  </span>
                )}
              </h5>
              <p className="card-text">{title}</p>
              <p className="card-text">
                <small className="text-muted">Condition: {condition}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
