import React from "react";
import { Header } from "../../Components/Header/Header";
import "./Landing.css";
import { MiddleBody } from "./MiddleBody";

export const Landing = () => {
  return (
    <>
      <div className="main_img">
        <Header />
        <div className="visa_heading">
          <h1>Visa Simplified</h1>
          <p>Apply visa with 99% success rate</p>
        </div>
      </div>
      <MiddleBody />
    </>
  );
};
