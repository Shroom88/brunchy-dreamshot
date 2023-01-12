import React from "react";
import "../styles/Basket.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useContext } from "react";
import MealsContext from "../context/MealsContext";
import BasketReview from "./BasketReview";
import Success from "./Success";
import "../styles/Button.css";

function Basket() {
  const { sum, setReviewFlag, reviewFlag, setSuccessFlag, successFlag } =
    useContext(MealsContext);

  const handleClick = () => {
    if (sum !== "0.00") {
      setSuccessFlag(true);
    } else {
      alert("Please, select a meal first.");
    }
  };

  const handleBasket = () => {
    setReviewFlag(true);
  };

  return (
    <>
      {reviewFlag && <BasketReview />}
      {successFlag && <Success />}
      <div className="summary">
        <FaShoppingBasket className="icon" onClick={handleBasket} />
        <h3>{sum}$</h3>
        <button className="btn" onClick={handleClick}>
          Order Now
        </button>
      </div>
    </>
  );
}

export default Basket;
