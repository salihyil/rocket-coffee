import React from "react";
import PropTypes from "prop-types";
import "./ProductListItem.css";

export default function ProductListItem({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) {
  return (
    <div className="card" style={{ backgroundColor: isOnSale ? "#e8F6FF" : "" }}>
      <h2>{isOnSale ? `${name} (On Sale)` : name}</h2>
      <img src={imageUrl} alt="" />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </button>
    </div>
  );
}

ProductListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
  isSoldOut: PropTypes.bool,
  isOnSale: PropTypes.bool,
};
