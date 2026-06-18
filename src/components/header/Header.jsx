import React, { useState, useRef, useEffect } from "react";
import { HeaderContainer } from "./Header.styles";

import {
  FiSettings,
  FiSun,
  FiMoon,
  FiGlobe,
} from "react-icons/fi";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../locales/translation";

const Header = () => {
  const [open, setOpen] = useState(false);

  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const modalRef = useRef(null);
  const iconRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target) &&
        iconRef.current &&
        !iconRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Theme handlers
  const darkMode = () => {
    document.body.classList.add("dark");
  };

  const lightMode = () => {
    document.body.classList.remove("dark");
  };

  // Primary color change
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--primary", color);
  };

  return (
    <HeaderContainer>
      {/* SETTINGS ICON */}
      <FiSettings
        ref={iconRef}
        className={`settings-icon ${open ? "rotate" : ""}`}
        onClick={() => setOpen(!open)}
      />

      {/* MODAL */}
      <div className={`modal ${open ? "active" : ""}`} ref={modalRef}>
        <h4>{t.settings}</h4>

        {/* THEME */}
        <div className="section">
          <p>{t.theme}</p>

          <div className="theme-box">
            <button onClick={lightMode}>
              <FiSun />
              {t.light}
            </button>

            <button onClick={darkMode}>
              <FiMoon />
              {t.dark}
            </button>
          </div>
        </div>

        {/* COLORS */}
        <div className="section">
          <p>{t.color}</p>

          <div className="colors">
            <span className="blue" onClick={() => changeColor("#3b82f6")} />
            <span className="purple" onClick={() => changeColor("#8b5cf6")} />
            <span className="green" onClick={() => changeColor("#22c55e")} />
            <span className="red" onClick={() => changeColor("#ef4444")} />
            <span className="orange" onClick={() => changeColor("#f97316")} />
          </div>
        </div>

        {/* LANGUAGE */}
        <div className="section">
          <p>
            <FiGlobe /> {t.language}
          </p>

          <div className="language-box">
            <button
              className={lang === "uz" ? "active" : ""}
              onClick={() => setLang("uz")}
            >
              🇺🇿
            </button>

            <button
              className={lang === "ru" ? "active" : ""}
              onClick={() => setLang("ru")}
            >
              🇷🇺
            </button>

            <button
              className={lang === "en" ? "active" : ""}
              onClick={() => setLang("en")}
            >
              🇬🇧
            </button>
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;