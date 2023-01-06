import React from "react";

function About() {
  const year = new Date().getFullYear();
  return (
    <div>
      <p>Copyright &copy; {year} Gabriel Stanev for DreamShot</p>
    </div>
  );
}

export default About;
