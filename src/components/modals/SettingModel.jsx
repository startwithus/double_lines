import React from "react";
import "../modals/modelMenu.css";
import { IoClose } from "react-icons/io5";
import { BsFillRecord2Fill } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { HiSpeakerWave } from "react-icons/hi2";
function SettingModel({ handleSetting, handleLimits, handleRules }) {
  return (
    <div className="setting-modal-main">
      <div className="settings-modal_open">
        <div className="settings-modal__inner">
          <div className="settings-modal__close">
            <i className="iconFont" onClick={handleSetting}>
              <IoClose />
            </i>
          </div>

          <div className="settings-modal__title">Settings</div>
          <div className="settings-input">
            <div className="settings-input__inner">
              <label>UserName</label>
              <div className="settings-input">jfjdfh8f</div>
            </div>
          </div>
          <div className="settings-item" onClick={handleLimits}>
            <div className="settings-item__icon">
              <div className="settings-item__name">
                <BsFillRecord2Fill />
              </div>
            </div>
            <span style={{ fontSize: "11px" }}>limits</span>
          </div>
          <div className="settings-item" onClick={handleRules}>
            <div className="settings-item__icon">
              <div className="settings-item__name">
                <BsFillRecord2Fill />
              </div>
            </div>
            <span style={{ fontSize: "11px" }}>Rules</span>
          </div>
          <div className="settings-item">
            <div className="settings-item__icon">
              <div className="settings-item__name">
                <BsFillRecord2Fill />
              </div>
            </div>
            <span
              style={{
                fontSize: "11px",
              }}
            >
              My bets
            </span>
          </div>
        </div>

        <div className="soun-rane">
          <div style={{ display: "flex", gap: "3px" }}>
            <div>
              <HiSpeakerWave />
            </div>
            <div>sound</div>
          </div>
          <div>1</div>
        </div>
        <div className="soun-rane">
          <div style={{ display: "flex", gap: "3px" }}>
            <div>
              <HiSpeakerWave />
            </div>
            <div>Music</div>
          </div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
}

export default SettingModel;
