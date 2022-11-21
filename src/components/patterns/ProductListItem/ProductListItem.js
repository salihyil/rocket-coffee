import React from "react";
import PropTypes from "prop-types";
import "./ProductListItem.css";
import Heading from "../../atoms/Heading";
import Card from "../../atoms/Card";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button";

export default function ProductListItem({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) {
  return (
    <Card highlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(On Sale)"}
      </Heading>
      <img src={imageUrl} alt="" />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "Sold out" : "Add to Cart"}
      </Button>
    </Card>
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
