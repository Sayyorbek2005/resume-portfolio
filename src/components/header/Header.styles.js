import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  right: 30px;
  top: 20px;
  z-index: 999;

  /* ================= ICON ================= */
  .settings-icon {
    width: 50px;
    height: 50px;
    padding: 12px;
    background: var(--primary);
    color: white;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .rotate {
    transform: rotate(180deg);
  }

  /* ================= MODAL ================= */
  .modal {
    position: absolute;
    top: 65px;
    right: 0;

    width: 280px;
    padding: 18px;

    background: var(--card-bg, #fff);
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    gap: 18px;

    align-items: center;
    text-align: center;

    opacity: 0;
    visibility: hidden;
    transform: translateY(-15px) scale(0.95);
    transition: 0.3s ease;

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .modal.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  /* ================= TITLE ================= */
  .modal h4 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  /* ================= SECTION ================= */
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .section p {
    margin: 0;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  /* ================= THEME BOX ================= */
  .theme-box {
    display: flex;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }

  .theme-box button {
    flex: 1;
    max-width: 120px;
    padding: 10px;

    border: none;
    border-radius: 10px;

    cursor: pointer;
    font-weight: 600;

    transition: 0.3s ease;
    background: var(--whiteGray);
  }

  .theme-box button:hover {
    transform: translateY(-2px);
  }

  /* ================= COLORS ================= */
  .colors {
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
  }

  .colors span {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;

    border: 3px solid transparent;
    transition: 0.3s ease;
  }

  /* ⭐ OLD STYLE (RESTORED) */
  .colors span:hover {
    transform: scale(1.15);
    border-color: white;
  }

  .blue { background: #3b82f6; }
  .purple { background: #8b5cf6; }
  .green { background: #22c55e; }
  .red { background: #ef4444; }
  .orange { background: #f97316; }

  /* ================= LANGUAGE ================= */
  .language-box {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
  }

  .language-box button {
    width: 45px;
    height: 45px;

    border: none;
    border-radius: 12px;

    cursor: pointer;
    font-size: 20px;

    background: var(--whiteGray);
    transition: 0.3s ease;
  }

  .language-box button:hover {
    transform: translateY(-3px);
  }

  .language-box button.active {
    background: var(--primary);
    color: white;
    transform: scale(1.05);
  }

  /* ================= DARK MODE ================= */
  body.dark & {
    .modal {
      background: #1f2937;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .theme-box button {
      background: #111827;
      color: white;
    }

    .language-box button {
      background: #111827;
      color: white;
    }
  }
`;