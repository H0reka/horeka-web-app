import React from "react";
import "./products.css";

const Card = (props) => {
  return (
    <div  className="categories">
      <div className="cards">
        <img src={props.img} alt={props.title} />
      </div>
      <h1 className="header-h2 px-0">{props.title}</h1>
    </div>
  );
};

export default Card;
