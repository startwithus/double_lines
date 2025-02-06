import React from "react";

const BetContainer = () => {
  return (
    <div className="game-control__header">
      <div className="game-number-button game-ui false">
        <button className="game-number-button__btn">MIN</button>
        <button className="game-number-button__btn game-number-button__btn--size">
          -
        </button>
        <div className="game-number-input">
          <div className="number-input">
            <label style={{ color: "#fff" }}>
              Bet Amount
              <span className="tooltip-box">i</span>
            </label>
            <input
              type="text"
              className="bet-input"
              value="100"
              // onKeyDown={(e) =>
              //   ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
              // }
              // onBlur={handleAmountChangeBlur}
              // onChange={handleAmountChange}
            />
          </div>
        </div>
        <button className="game-number-button__btn game-number-button__btn--size">
          +
        </button>
        <button className="game-number-button__btn">MIN</button>
      </div>
      <div className="game-coefficien-button">
        <button className="game-coefficien-button__btn red">
          <div className="dont-value"></div>
          <span>x2</span>
        </button>
        <button className="game-coefficien-button__btn green">
          <div className="dont-value"></div>
          <span>x14</span>
        </button>
        <button className="game-coefficien-button__btn black">
          <div className="dont-value"></div>
          <span>x2</span>
        </button>
      </div>
      <div className="game-control__footer">
        <button className="game-go-button loading game-ui">
          <span>Choose color</span>
        </button>
      </div>
    </div>
  );
};

export default BetContainer;
