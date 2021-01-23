import React from "react";

const Breadcrumb = ({ links }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="/">Home</a>
        </li>
        {links.length > 0 ? (
          links.map((bread, key) => {
            return <li className="breadcrumb-item">{bread.name}</li>;
          })
        ) : (
          <li className="breadcrumb-item"></li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
