import React from "react";
import "../styles/Basket.css";
import { FaShoppingBasket } from "react-icons/fa";
import Button from "./Button";

function Basket() {
  return (
    <div className="summary">
      <FaShoppingBasket className="icon" />
      <h3>0.00$</h3>
      <Button>Order Now</Button>
    </div>
  );
}

export default Basket;
