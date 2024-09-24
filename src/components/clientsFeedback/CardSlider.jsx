import React, { useEffect, useState } from "react";
import "./CardSlider.css"; // Import the CSS for styling

const CardSlider = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = [
    {
      id: 1,
      name: "Omer Faruq",
      review:
        "I wanted a website made quickly and without fuss and of course within budget. Brains Media Solutions helped get the website up and running in less than a week, and surprise, did not charge anything extra! Really want to thank Brains Media Solutions for a job well done",
    },
    {
      id: 2,
      name: "Sajibul hasan",
      review:
        "I haveve had a good experience working with Brains Media. Highly professional, great turn around time and attention to quality.",
    },
    {
      id: 3,
      name: "Arafat Talukder",
      review:
        "I have tried them for the content writing service and I must say that they have a team of real professionals.",
    },
    {
      id: 4,
      name: "Tanzina Nasrin",
      review:
        "I wanted a website made quickly and without fuss and of course within budget. Brains Media Solutions helped get the website up and running in less than a week, and surprise, did not charge anything extra! Really want to thank Brains Media Solutions for a job well done",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
    }, 4000); // Adjust time (in ms) to control the sliding speed and pause time
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="slider">
      <div
        className="card-container"
        style={{ transform: `translateX(-${currentCard * 100}%)` }}
      >
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="w-72 h-80 bg-[#e4e4e6]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
