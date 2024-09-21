import React, { useState, useEffect } from "react";
import "./Hero.css";

const TypingText = ({ typo }) => {
  //   const textArray = [
  //     "Welcome to My Portfolio",
  //     "I'm a Web Developer",
  //     "Let's Build Something Great",

  //   ];
  const textArray = [typo];
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = textArray[loopNum % textArray.length];
      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(75);
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayedText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, 500);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="text-center">
      <p className="text-base md:text-lg lg:text-xl font-mono mb-6">
        <span>{displayedText}</span>
        <span className="animate-blink">|</span>
      </p>
    </div>
  );
};

export default TypingText;
