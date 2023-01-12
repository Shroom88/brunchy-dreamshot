import React, { useEffect } from "react";
import "../styles/BasketReview.css";
import { useContext, useRef } from "react";
import MealsContext from "../context/MealsContext";
import BasketItem from "./BasketItem";

function BasketReview() {
  const { sum, order, setReviewFlag } = useContext(MealsContext);

  const reviewRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (reviewRef.current && !reviewRef.current.contains(e.target)) {
        setReviewFlag(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [reviewRef]);

  return (
    <div className="review-container">
      <div ref={reviewRef} className="review">
        {order.map((meal) => {
          return (
            <BasketItem
              key={meal.image}
              mealName={meal.name}
              mealPrice={meal.price}
            />
          );
        })}
        <hr />
        <div className="total">
          Total:
          <div>
            <span className="dollar">$</span>
            {sum}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketReview;
