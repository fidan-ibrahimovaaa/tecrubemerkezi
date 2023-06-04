import React from "react";

function Product({ product }) {
  return (
    <div className="single_product">
      <div>{product.image}</div>
      <h1>{product.title}</h1>
      <h2>{product.desc}</h2>
      <h3>{product.location}</h3>
    </div>
  );
}

export default Product;
