import React from "react";
import "../styles/MealItem.css";
import Pancakes from "../assets/pancakes.png";
import { FaShoppingBasket } from "react-icons/fa";

function MealItem() {
  return (
    <div className="card">
      <img src={Pancakes} alt="food img" className="meal-img" />
      <div className="desc">
        <h3>Butter Pancakes</h3>
        <p className="sub-desc">With honey</p>
        <div className="price">
          <span>$</span> 14.50
        </div>
      </div>
      <FaShoppingBasket className="cart" />
    </div>
  );
}

export default MealItem;
