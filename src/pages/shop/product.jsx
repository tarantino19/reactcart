import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shop-context";

const Product = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product" key={id}>
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart{" "}
        {cartItemAmount > 0 ? <div>({cartItemAmount})</div> : undefined}
      </button>
    </div>
  );
};

export default Product;

//now at this point, we need to
// create a function and create a state that will store the add to cart items
