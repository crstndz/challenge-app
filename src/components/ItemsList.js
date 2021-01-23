import React from "react";
import Item from "./Item";

const ItemsList = ({ items }) => (
  <div>
    {items.map((item, key) => {
      return <Item key={key} {...item} />;
    })}
  </div>
);

export default ItemsList;
