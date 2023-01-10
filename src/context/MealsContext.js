import { createContext } from "react";
import { useState } from "react";
import data from "./menu";

const MealsContext = createContext();

export const MealsProvider = ({ children }) => {
  console.log(data.items);
  const [order, setOrder] = useState([]);
  const [sum, setSum] = useState(0);

  return (
    <MealsContext.Provider
      value={{
        data: data.items,
        order,
        setOrder,
        sum,
        setSum,
      }}
    >
      {children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
