import React from "react";
import "../components/css/Card.css";
import logo from "./icons/icons8-github.svg";
function Card({ url, ...props }) {
  const handleOnClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="cardparent1"
      onClick={handleOnClick}
      style={{
        cursor: "pointer",
      }}
    >
      <div className="cardTitle">
        <div className="cardName">{props.projectname}</div>
        <div className="cardgithublogo">
          <img className="githublogo" src={logo} alt=" " />
        </div>
      </div>
      <div className="cardTechStack">{props.techstack}</div>
      <div className="cardDescription">
        <div className="carddesc">{props.description}</div>
      </div>
    </div>
  );
}

export default Card;
