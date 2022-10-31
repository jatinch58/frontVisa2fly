import React from "react";
import "./MiddleBody.css";
import { Card } from "../../Components/Card/Card";
import { Card2 } from "../../Components/Card2/Card2";

import visa_steps_1 from "../../img/visa_steps_1.svg";
import visa_steps_2 from "../../img/visa_steps_2.svg";
import visa_steps_3 from "../../img/visa_steps_3.svg";
import visa_steps_4 from "../../img/visa_steps_4.svg";

import Malaysia from "../../img/Malaysia.jpg";
import Cambodia from "../../img/Cambodia.jpg";
import Vietnam from "../../img/Vietnam.jpg";
import Ethiopia from "../../img/Ethiopia.jpg";
import Armenia from "../../img/Armenia.jpg";
import UAE from "../../img/UAE.jpg";
import Thailand from "../../img/Thailand.jpg";
import SriLanka from "../../img/SriLanka.jpg";

import Canada from "../../img/card2/Canada.jpg";
import Finland from "../../img/card2/Finland.jpg";
import France from "../../img/card2/France.jpg";
import Germany from "../../img/card2/Germany.jpg";
import Spain from "../../img/card2/Spain.jpg";
import Dubai from "../../img/card2/UAE.jpg";
import UnitedKingdom from "../../img/card2/UnitedKingdom.jpg";
import USA from "../../img/card2/USA.jpg";

import whyChooseUs1 from "../../img/whychooseus/why_choose_us_1.png";
import whyChooseUs2 from "../../img/whychooseus/why_choose_us_2.png";
import whyChooseUs3 from "../../img/whychooseus/why_choose_us_3.png";
import whyChooseUs4 from "../../img/whychooseus/why_choose_us_4.png";

import { Carousel } from "../../Components/Carousel/Carousel";
export const MiddleBody = () => {
  const cardArray = [
    {
      heading: "Book Visa Online",
      paragraph: "Simplest way to apply visa online.",
      image: visa_steps_1,
    },
    {
      heading: "Document Validation",
      paragraph: "Our visa expert will collect & verify your documents.",
      image: visa_steps_2,
    },
    {
      heading: "Visa Processing",
      paragraph: "We schedule documents submission, biometric / interview.",
      image: visa_steps_3,
    },
    {
      heading: "Visa at Doorstep",
      paragraph: "Passport gets delivered at your doorstep.",
      image: visa_steps_4,
    },
  ];
  const whyChooseArray = [
    {
      heading: "Visa Services for all Countries",
      paragraph:
        "We provide visa services for all the countries in a simple & efficient way.",
      image: whyChooseUs1,
    },
    {
      heading: "End-to-End Visa Assistance",
      paragraph:
        "We assist you with Evisa, sticker visa, document submission, biometric & interview preparation.",
      image: whyChooseUs2,
    },
    {
      heading: "Doorstep Pick Up and Delivery",
      paragraph:
        "We offer the service of document collection and delivering approved visa at your doorstep.",
      image: whyChooseUs3,
    },
    {
      heading: "Safety & Confidentiality",
      paragraph: "We value your privacy by securing all the documents.",
      image: whyChooseUs4,
    },
  ];
  const cardArray2 = [
    {
      heading: "MALAYSIA VISA",
      paragraph:
        "A culturally diverse country with beautiful colonial buildings, beaches and rainforests!",
      image: Malaysia,
    },
    {
      heading: "CAMBODIA VISA",
      paragraph:
        "Cambodia is home to one of the most beautiful beaches in Southeast Asia - Lonely Beach!",
      image: Cambodia,
    },
    {
      heading: "VIETNAM VISA",
      paragraph:
        "Adventurous and nature-loving people visit Vietnam to explore its tranquillity and its culture.",
      image: Vietnam,
    },
    {
      heading: "ETHIOPIA VISA",
      paragraph:
        "Situated in the Horn of Africa, Ethiopia is famous for archaeological discoveries.",
      image: Ethiopia,
    },
    {
      heading: "ARMENIA VISA",
      paragraph:
        "Armenia is home to stunning views and rich culture for you to explore!",
      image: Armenia,
    },
    {
      heading: "UAE VISA",
      paragraph:
        "UAE has the perfect blend of luxury and culture and is home to splendid man-made structures.",
      image: UAE,
    },
    {
      heading: "THAILAND VISA",
      paragraph:
        "Thailand is the perfect place to explore tropical beaches and ancient ruins.",
      image: Thailand,
    },
    {
      heading: "SRI LANKA VISA",
      paragraph:
        "Known as the Pearl of the Indian Ocean, Sri Lanka’s culture and heritage attract thousands each year!",
      image: SriLanka,
    },
  ];
  const cardArray3 = [
    {
      heading: "Canada VISA",
      paragraph:
        "Canada is known worldwide for its culturally diverse and friendly people, mouth-watering delicacies, and beautiful landscapes.",
      image: Canada,
    },
    {
      heading: "Finland VISA",
      paragraph:
        "It is famous for its untouched nature, as well as the much-coveted Northern Lights.",
      image: Finland,
    },
    {
      heading: "France VISA",
      paragraph:
        "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.",
      image: France,
    },
    {
      heading: "Germany VISA",
      paragraph:
        "It is a popular tourist attraction due to German culture, the countryside and crazy festivals and activities that are conducted all over the country.",
      image: Germany,
    },
    {
      heading: "Spain VISA",
      paragraph:
        "The Kingdom of Spain is situated by the beautiful Mediterranean Sea and its other island territories.",
      image: Spain,
    },
    {
      heading: "Dubai VISA",
      paragraph:
        "In 2019 16.73 million people applied for the Dubai Visa! Out of these Dubai Visa for Indians accounted for almost 12% of the total visas.",
      image: Dubai,
    },
    {
      heading: "United Kingdom VISA",
      paragraph:
        "The UK is mainly known all over the world due to its history of the British Empire, its colonies and other literary, visual arts and cinematic influences.",
      image: UnitedKingdom,
    },
    {
      heading: "USA VISA",
      paragraph:
        "America is home to some of the largest urban hubs as well as places that are practically devoid of human touch.",
      image: USA,
    },
  ];
  return (
    <>
      <div className="middle_body">
        <h3>Apply Visa Online In 4 Simple Steps</h3>
        <hr />
        <p>We Take Care Of Your Online Visa Application</p>
      </div>
      <div className="cards_div">
        {cardArray.map((val) => (
          <Card {...val} />
        ))}
      </div>
      <div className="middle_body">
        <h3>E-Visas</h3>
        <hr />
        <p>Apply E-Visa Application Online For Top Destinations</p>
      </div>
      <Carousel n={cardArray2} />
      <div className="middle_body">
        <h3>Popular Destinations</h3>
        <hr />
        <p>Choose from the best destinations across the globe</p>
      </div>
      <Carousel n={cardArray3} />
      <div className="middle_body">
        <h3>Why Choose Us?</h3>
        <hr />
        <p>Reliable, fast and hassle free</p>
      </div>
      <div className="cards_div">
        {whyChooseArray.map((val) => (
          <Card2 {...val} />
        ))}
      </div>
      <div className="middle_body">
        <h3>Our Partners</h3>
        <hr />
        <p>Our Valued Visa Partnerships</p>
      </div>
    </>
  );
};
