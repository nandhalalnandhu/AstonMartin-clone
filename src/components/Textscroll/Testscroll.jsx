import React, { useEffect, useState, useRef } from "react";
import "./Testscroll.css";

function Testscroll() {
  const [highlightedWords, setHighlightedWords] = useState(0);
  const TEXT =
    "We have an unstoppable quest for profound gratification. A desire to capture the pure human emotion of the driving experience";
  const wordsRef = useRef(TEXT.split(" "));

  const calculateScrollFraction = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    return scrollTop / (scrollHeight - clientHeight);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollFraction = calculateScrollFraction();
      const words = wordsRef.current;

      // Increase the scroll speed by multiplying the scrollFraction
      // by a value (adjust as needed to control the speed).
      const speedMultiplier = 5; // Adjust speed here
      const newIndex = Math.floor(scrollFraction * words.length * speedMultiplier);

      // Ensure newIndex stays within bounds
      const clampedIndex = Math.min(words.length - 1, newIndex);

      if (clampedIndex !== highlightedWords) {
        setHighlightedWords(clampedIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [highlightedWords]);

  return (
    <div className="Testscroll">
      <h1 className="text">
        {wordsRef.current.map((word, index) => (
          <span key={index} className={index < highlightedWords ? "highlight" : ""}>
            {word}{" "}
          </span>
        ))}
      </h1>
      <span className="auth">
        <div></div> ASTON MARTIN
      </span>
    </div>
  );
}

export default Testscroll;
