import React from "react";
import "../styles/Button.css";

function Button({ children }, onClick) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
