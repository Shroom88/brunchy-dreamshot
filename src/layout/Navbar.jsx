import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import DeliverySVG from "../assets/free_delivery.png";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        BRUNCHY
      </Link>
      <div className="links-container">
        <div className="links">
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/callus" className="link">
            Call Us
          </Link>
          <div className="free-delivery">Free Delivery</div>
          <img
            className="delivery-img"
            src={DeliverySVG}
            alt="delivery biker"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
