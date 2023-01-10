import React from "react";
import "../styles/MealItem.css";
import Pancakes from "../assets/pancakes.png";
import { FaShoppingBasket } from "react-icons/fa";
import MealsContext from "../context/MealsContext";
import { useContext } from "react";

function MealItem({ name, caption, price }) {
  const { setSum } = useContext(MealsContext);
  const handleSum = (p) => {
    setSum(p);
  };
  return (
    <div className="card">
      <img src={Pancakes} alt="food img" className="meal-img" />
      <div className="desc">
        <h3>{name}</h3>
        <p className="sub-desc">{caption}</p>
        <div className="price">
          <span>$</span> {price}
        </div>
      </div>
      <FaShoppingBasket className="cart" onClick={handleSum(price)} />
    </div>
  );
}

export default MealItem;
