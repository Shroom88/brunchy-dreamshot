import React from "react";
import { useContext } from "react";
import MealsContext from "../context/MealsContext";
import "../styles/BasketReview.css";
import "../styles/Button.css";

function Success() {
  const { setSuccessFlag, setSum, setOrder } = useContext(MealsContext);
  const handleClick = () => {
    setSuccessFlag(false);
    setOrder([]);
    setSum(0);
  };
  return (
    <div className="review-container">
      <div className="success">
        <h1 className="congrats">Congratulations!</h1>
        <p className="on-way">Your order is on its way.</p>
        <button className="btn" onClick={handleClick}>
          Ok
        </button>
      </div>
    </div>
  );
}

export default Success;
