import React from "react";
import "../styles/MealItem.css";
import Pancakes from "../assets/pancakes.png";
import AvocadoToast from "../assets/avocado_toast.png";
import SweetYogurt from "../assets/sweet_yogurt.png";
import PeanutToast from "../assets/peanut_toast.png";
import FrenchToast from "../assets/french_toast.png";
import BananaBread from "../assets/banana_bread.png";
import ClassicWaffle from "../assets/waffle.png";
import { FaShoppingBasket } from "react-icons/fa";
import MealsContext from "../context/MealsContext";
import { useContext } from "react";

function MealItem({ name, caption, price, image }) {
  const { addSum, addOrder } = useContext(MealsContext);
  const handleSum = () => {
    addSum(price);
    addOrder(name);
  };

  const setImage = (image) => {
    switch (image) {
      case "1.png":
        console.log(Pancakes);
        return Pancakes;
      case "2.png":
        return AvocadoToast;
      case "3.png":
        return SweetYogurt;
      case "4.png":
        return PeanutToast;
      case "5.png":
        return FrenchToast;
      case "6.png":
        return BananaBread;
      case "7.png":
        return ClassicWaffle;
      default:
        return "Image Not Found";
    }
  };
  return (
    <div className="card">
      <img src={setImage(image)} alt={name} className="meal-img" />
      <div className="desc">
        <h3>{name}</h3>
        <p className="sub-desc">{caption}</p>
        <div className="price">
          <span>$</span> {price.toFixed(2)}
        </div>
      </div>
      <FaShoppingBasket className="cart" onClick={handleSum} />
    </div>
  );
}

export default MealItem;
