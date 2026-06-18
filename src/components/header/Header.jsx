import React, { useState } from "react";
import { HeaderContainer } from "./Header.styles";

import {
  LuSettings2,
  LuSun,
  LuMoon,
  LuPalette,
} from "react-icons/lu";

const Header = () => {
  const [open, setOpen] = useState(false);

  const changeColor = (color) => {
    document.documentElement.style.setProperty(
      "--primary",
      color
    );
  };

  const darkMode = () => {
    document.body.classList.add("dark");
  };

  const lightMode = () => {
    document.body.classList.remove("dark");
  };

  return (
    <HeaderContainer>
      <button
        className="settings-btn"
        onClick={() => setOpen(!open)}
      >
        <LuSettings2 />
      </button>

      <div className={`modal ${open ? "active" : ""}`}>
        <h3>Settings</h3>

        <div className="section">
          <span className="section-title">
            Theme
          </span>

          <div className="theme-box">
            <button onClick={lightMode}>
              <LuSun />
              Light
            </button>

            <button onClick={darkMode}>
              <LuMoon />
              Dark
            </button>
          </div>
        </div>

        <div className="section">
          <span className="section-title">
            <LuPalette />
            Primary Color
          </span>

          <div className="colors">
            <span
              className="color blue"
              onClick={() => changeColor("#3b82f6")}
            />

            <span
              className="color purple"
              onClick={() => changeColor("#8b5cf6")}
            />

            <span
              className="color green"
              onClick={() => changeColor("#22c55e")}
            />

            <span
              className="color red"
              onClick={() => changeColor("#ef4444")}
            />

            <span
              className="color orange"
              onClick={() => changeColor("#f97316")}
            />
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;