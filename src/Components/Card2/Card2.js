import React from "react";
import "./Card2.css";
export const Card2 = (props) => {
  return (
    <div className="card2">
      <div className="wrap_image">
        <img src={props.image} alt="image1" />
      </div>
      <h5>{props.heading}</h5>
      <p>{props.paragraph}</p>
    </div>
  );
};
