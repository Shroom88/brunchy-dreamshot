import React from "react";
import MealItem from "./MealItem";
import "../styles/MealsList.css";
import MealsContext from "../context/MealsContext";

import { useContext } from "react";

function MealsList() {
  const { data, order } = useContext(MealsContext);

  return (
    <div className="wrapper">
      {data.map((meal) => (
        <MealItem
          key={meal.image}
          name={meal.name}
          caption={meal.caption}
          price={meal.price}
          image={meal.image}
        />
      ))}
    </div>
  );
}

export default MealsList;
