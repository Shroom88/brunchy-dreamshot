import React from "react";
import "../styles/Basket.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useContext } from "react";
import MealsContext from "../context/MealsContext";
import "../styles/Button.css";

function Basket() {
  const { sum, data } = useContext(MealsContext);

  const handleClick = () => {
    console.log(sum);
    alert(sum);
  };

  return (
    <div className="summary">
      <FaShoppingBasket className="icon" />
      <h3>{sum}$</h3>
      <button className="btn" onClick={handleClick}>
        Order Now
      </button>
    </div>
  );
}

export default Basket;
