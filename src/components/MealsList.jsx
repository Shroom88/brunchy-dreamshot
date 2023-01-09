import React from "react";
import MealItem from "./MealItem";
import "../styles/MealsList.css";

function MealsList() {
  return (
    <div className="wrapper">
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
    </div>
  );
}

export default MealsList;
