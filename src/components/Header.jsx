import React from "react";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import "./header.css";
const Header = () => {
  return (
    <div className="game-header">
      <div className="game-header-back">
        <IoIosArrowBack style={{ color: "#fff", fontWeight: "bold" }} />
      </div>
      <div className="game-header-logo"></div>
      <div className="game-header-balance-title">Balance:</div>
      <div className="game-header-balance">
        <div className="game-header-balance-text">5678</div>
        <div className={`game-header-balance-delta `}></div>
      </div>
      <div className="game-header-buttons">
        <div className="game-header-button">
          <div className="game-header-btton-inner">
            <MdOutlineVolumeUp style={{ height: "20px", width: "20px" }} />
          </div>
        </div>
        <div className="game-header-button">
          <div className="game-header-btton-inner">
            <IoMdSettings style={{ height: "20px", width: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
