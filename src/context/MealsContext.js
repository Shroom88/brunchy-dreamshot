import { createContext } from "react";
import { useState } from "react";
import data from "./menu";

const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  const [sum, setSum] = useState(0);

  const addSum = (price) => {
    setSum(sum + price);
  };

  const addOrder = (name) => {
    const meal = data.items.filter((n) => n.name === name);
    const newOrder = [...order, meal];
    setOrder(newOrder);
  };

  return (
    <MealsContext.Provider
      value={{
        data: data.items,
        order,
        addOrder,
        sum: sum.toFixed(2),
        addSum,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
