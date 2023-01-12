import React from "react";
import "../styles/CallUs.css";
import Dreamshot from "../assets/dreamshot.png";

function CallUs() {
  const year = new Date().getFullYear();
  return (
    <div className="call-us">
      <img className="dreamshot" src={Dreamshot} alt="Dreamshot" />
      <h2 className="e-mail">Contact Dreamshot: fellowship@dreamshot.bg</h2>
      <p>Copyright &copy; {year} Gabriel Stanev for DreamShot</p>
    </div>
  );
}

export default CallUs;
