import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 999;

  .settings-btn {
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 14px;
    background: var(--primary);
    color: var(--white);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

    transition: 0.3s;
  }

  .settings-btn:hover {
    transform: translateY(-3px);
  }

  .settings-btn svg {
    font-size: 24px;
  }

  .modal {
    position: absolute;
    top: 70px;
    right: 0;

    width: 320px;

    background: var(--card-bg, #fff);
    color: var(--text, #000);

    border-radius: 20px;
    padding: 20px;

    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

    opacity: 0;
    visibility: hidden;

    transform: translateY(-15px) scale(0.95);

    transition: all 0.3s ease;
  }

  .modal.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  .modal h3 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .section {
    margin-bottom: 20px;
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 8px;

    font-size: 14px;
    font-weight: 600;

    margin-bottom: 12px;
  }

  .theme-box {
    display: flex;
    gap: 10px;
  }

  .theme-box button {
    flex: 1;

    height: 45px;

    border: 1px solid var(--shadow);
    border-radius: 12px;

    background: transparent;
    color: inherit;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    transition: 0.3s;
  }

  .theme-box button:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  .colors {
    display: flex;
    justify-content: space-between;
  }

  .color {
    width: 38px;
    height: 38px;

    border-radius: 50%;
    cursor: pointer;

    transition: 0.3s;

    border: 3px solid transparent;
  }

  .color:hover {
    transform: scale(1.15);
    border-color: #fff;
  }

  .blue {
    background: #3b82f6;
  }

  .purple {
    background: #8b5cf6;
  }

  .green {
    background: #22c55e;
  }

  .red {
    background: #ef4444;
  }

  .orange {
    background: #f97316;
  }
`;