import React from "react";
import "../styles/BasketReview.css";

function BasketItem({ mealName, mealPrice }) {
  return (
    <div className="meal-item">
      <div>{mealName}</div>
      <div>
        <span className="dollar">$</span>
        {mealPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default BasketItem;
