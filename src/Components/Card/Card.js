import React from "react";
import "./Card.css";
export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="image1" />
      <h5>{props.heading}</h5>
      <p>{props.paragraph}</p>
    </div>
  );
};
