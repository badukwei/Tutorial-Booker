import React from "react";

function About() {
  return (
    <div className="container profile">
      <div>
        <div className="info flex-column">
          <img
            src="../images/tutor.png"
            alt="BadukWei"
            className="img"
          />
          <h2 className="name">Wei-Chun Lin</h2>
          <h3>Email</h3>
          <p className="email">linwgpeter@gmail.com</p>
        </div>
      </div>
      <div className="major-info">
        <h3>Skills</h3>
        <ul className="major-list">
          <li className="major">React</li>
          <li className="major">Es6</li>
          <li className="major">Css3 & Html5</li>
        </ul>
      </div>
      <div className="description-info">
        <h3>Description</h3>
        <p className="description"></p>
      </div>
    </div>
  )
}

export default About