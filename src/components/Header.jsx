import React, { useState } from "react";
import { MdOutlineVolumeOff, MdOutlineVolumeUp } from "react-icons/md";
import { IoIosArrowBack, IoMdSettings } from "react-icons/io";
import SettingModal from "../components/modals/SettingModel";
import "./header.css";
import Limits from "./modals/Limits";
import RulesModal from "./modals/RulesModal";
const Header = () => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [settingModal, setSettingModal] = useState(false);
  const [openLimits, setOpenLimits] = useState(false);
  const [openRules, setOpenRules] = useState(false);
  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };
  const handleSetting = () => {
    setSettingModal((prv) => !prv);
  };
  const handleLimits = () => {
    setOpenLimits((prv) => !prv);
    setSettingModal(false);
  };

  const handleRules = () => {
    setOpenRules((prv) => !prv);
    setSettingModal(false);
  };
  return (
    <>
      <div className="game-header">
        <div className="game-header-back">
          <IoIosArrowBack style={{ color: "#fff", fontWeight: "bold" }} />
        </div>
        <div className="game-header-logo"></div>
        <div className="game-header-balance-title">Balance:</div>
        <div className="game-header-balance">
          <div className="game-header-balance-text">5678</div>
          {/* <div className={`game-header-balance-delta `}></div> */}
        </div>
        <div className="game-header-buttons">
          <div className="game-header-button">
            <div className="game-header-btton-inner" onClick={toggleSound}>
              {isSoundOn ? (
                <MdOutlineVolumeUp style={{ height: "20px", width: "20px" }} />
              ) : (
                <MdOutlineVolumeOff style={{ height: "20px", width: "20px" }} />
              )}
            </div>
          </div>
          <div className="game-header-button">
            <div className="game-header-btton-inner" onClick={handleSetting}>
              <IoMdSettings style={{ height: "20px", width: "20px" }} />
            </div>
            {settingModal && (
              <SettingModal
                // info={info}
                handleRules={handleRules}
                handleSetting={handleSetting}
                handleLimits={handleLimits}
              ></SettingModal>
            )}
          </div>
        </div>
      </div>
      {openLimits && <Limits handleLimits={handleLimits}></Limits>}
      {openRules && <RulesModal handleRules={handleRules}></RulesModal>}
    </>
  );
};

export default Header;
