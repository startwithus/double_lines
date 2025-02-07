import React, { useState } from "react";

import { IoClose } from "react-icons/io5";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function RulesModal({ onClose, handleRules }) {
  const [openAccordions, setOpenAccordions] = useState({});

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const accordionData = [
    {
      title: "How to Play?",
      content: (
        <ul>
          <li>Choose a color, place a bet, and wait for the round to start.</li>
          <li>Wait for the roulette to stop spinning.</li>
          <li>Get your winnings if the roulette stops at your odds.</li>
        </ul>
      ),
    },
    {
      title: "Game Details",
      content: (
        <div className="block-inner">
          <h3>Place Bet</h3>
          <p>Enter a valid amount in the "Amount" field and choose a color:</p>
          <ul>
            <li>Black and Red give you a x2 payout.</li>
            <li>Green gives you a x14 payout.</li>
          </ul>
          <h3>Cancel</h3>
          <p>
            You can cancel your bet before the roulette starts spinning by
            pressing the "Cancel" button.
          </p>
          <h3>Rounds History</h3>
          <p>
            Previous game round results are displayed in the middle of the game
            screen.
          </p>
          <h3>RTP</h3>
          <p>Double Roll has an RTP of 93.5%.</p>
        </div>
      ),
    },
    {
      title: "Settings",
      content: (
        <div className="block-inner">
          <p>Click the gear icon in the top right corner to open settings.</p>
          <ul>
            <li>Change your nickname.</li>
            <li>View bet limits.</li>
            <li>Turn on/off sounds & music.</li>
            <li>View a list of recent bets.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Version",
      content: (
        <div className="block-inner">
          <p>Game version: 1.0.4</p>
          <p>RNG version: 2.0.0</p>
        </div>
      ),
    },
  ];

  return (
    <div className="modal-overlay-setting">
      <div className="modal-overlay">
        <div className="modal-content">
          <div className="modal-header">
            <h4>📜 Rules</h4>
            <button onClick={handleRules} className="close-btn">
              <IoClose />
            </button>
          </div>
          <hr className="hr" />
          <p className="description">
            Bet on your lucky color 🔴 🟢 ⚫ and win big 💰 in Double Roll!
          </p>
          <div className="accordion">
            {accordionData.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className="accordion-header"
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <span>
                    {openAccordions[index] ? (
                      <IoIosArrowUp style={{ width: "20px", height: "20px" }} />
                    ) : (
                      <IoIosArrowDown
                        style={{ width: "20px", height: "20px" }}
                      />
                    )}
                  </span>
                </button>
                {openAccordions[index] && (
                  <div className="accordion-body">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RulesModal;
