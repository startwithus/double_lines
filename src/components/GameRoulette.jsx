import React, { useState, useEffect } from "react";

const GameRoulette = () => {
  const [time, setTime] = useState(15.0); // Initialize with 15 seconds
  const rouletteNumbers = [
    { number: 0, color: "white" },
    { number: 11, color: "black" },
    { number: 5, color: "red" },
    { number: 10, color: "black" },
    { number: 6, color: "red" },
    { number: 9, color: "black" },
    { number: 7, color: "red" },
    { number: 8, color: "black" },
    { number: 1, color: "red" },
    { number: 14, color: "black" },
    { number: 2, color: "red" },
    { number: 13, color: "black" },
    { number: 3, color: "red" },
    { number: 12, color: "black" },
    { number: 4, color: "red" },
  ];
  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => Math.max((prevTime - 0.01).toFixed(2), 0));
      }, 10);
      return () => clearInterval(interval);
    }
  }, [time]);
  return (
    <div className="">
      <div className="game-timer">
        <span className="game-timer-time">{time}</span>
      </div>
      <div
        className="game-roulette__brum"
        style={{ transform: "translateX(-3909.5px)" }}
      >
        {Array.from({ length: 5 }).flatMap((_, index) =>
          rouletteNumbers.map((item, i) => (
            <div className="false" key={`${index}-${i}`}>
              <div
                className={`game-roulette__item game-roulette__item--${item.color} false false`}
              >
                <span>{item.number}</span>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="game-roulette__marker">
        <div className="game-roulette__marker-logo "></div>
      </div>
    </div>
  );
};

export default GameRoulette;
