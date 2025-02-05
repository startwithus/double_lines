import React from "react";
import Header from "./components/Header";
import GameRoulette from "./components/GameRoulette";
import BetContainer from "./components/BetContainer";
const Home = () => {
  return (
    <div className="game-container">
      <div className="main_inner">
        <Header />
        <div className="main_container">
          <div className="game-template">
            <div className=".game-template:before">
              <div className=".game-template:after">
                <GameRoulette />
                <div className="game-control">
                  <BetContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
