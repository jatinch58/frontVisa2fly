import React from "react";
import "./CarouselCard.css";
export const CarouselCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="image1" />
      <h5>{props.heading}</h5>
      <p>{props.paragraph}</p>
      <button>Explore</button>
    </div>
  );
};
