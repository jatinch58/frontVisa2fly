import React from "react";
import "./style.css";
import { CarouselCard } from "../CarouselCard/CarouselCard";
import "./Carousel.css";

export const Carousel = (props) => {
  return (
    <>
      <div className="container">
        <div className="owl-carousel owl-theme">
          {props.n.map((value) => {
            return (
              <div className="item">
                <CarouselCard {...value} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
