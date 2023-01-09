import React from "react";
import "../styles/Button.css";

function Button({ children }) {
  const handleClick = () => {
    alert("button do be workin");
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
