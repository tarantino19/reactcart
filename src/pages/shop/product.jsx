import React from "react";
import "./shop.css";

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;

  return (
    <div className="product" key={id}>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">Add to Cart</button>
    </div>
  );
};

export default Product;

//now at this point, we need to
// create a function and create a state that will store the add to cart items
