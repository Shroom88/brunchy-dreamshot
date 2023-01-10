import React from "react";
import "../styles/home.css";
import MealsList from "../components/MealsList";
import Basket from "../components/Basket";

function Home() {
  return (
    <div className="container">
      <h1>
        The fastest brunch delivery in <span>Your city</span>
      </h1>
      <p>
        This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
        about you ?
      </p>
      <MealsList />
      <Basket />
    </div>
  );
}

export default Home;
