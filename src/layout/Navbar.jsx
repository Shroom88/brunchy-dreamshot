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
          <a href="https://www.dreamshot.bg/#whoweare" className="link">
            About
          </a>
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
