import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  min-height: 100vh;

  /* ================= LEFT ================= */

  .home-left {
    position: relative;
    width: clamp(200px, 30vw, 400px);
    height: 100vh;
    background-color: var(--primary);
  }

  .home-left > .home-left-image {
    position: absolute;
    top: 50%;
    left: clamp(50px, 30vw, 210px);

    width: clamp(350px, 30vw, 400px);
    height: clamp(350px, 30vw, 400px);

    padding: 10px;
    border-radius: 50%;
    border: 17px solid var(--white);
    background-color: var(--primary);

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    transition: all 0.3s ease;

    transform: translateY(-50%);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-top: 23px;
    }
  }

  /* ================= RIGHT ================= */

  .home-right-box {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .home-right-box > .h-right-in {
    max-width: 600px;
    width: 100%;
    /* margin-right: 100px; */
    margin-left: 50px;

    h2 {
      color: var(--primary);
    }

    h1 {
      margin: 0 0 10px;
      text-shadow: 1px 1px 2px var(--primary);
    }

    p {
      color: var(--gray);
      line-height: 1.7;
    }
  }

  /* ================= SOCIAL ICONS ================= */

  .h-icon-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 15px;

    div {
      position: relative;

      width: 50px;
      height: 50px;

      padding: 5px;
      margin: 5px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border: 1px solid var(--primary);
      border-radius: 30px;

      overflow: hidden;
      cursor: pointer;

      transition: all 0.3s ease;

      p {
        color: transparent !important;
      }

      &:hover {
        width: 130px;
      }

      &:hover p {
        color: var(--primary) !important;
      }
    }

    p {
      position: absolute;
      right: 10px;
      white-space: nowrap;
      transition: all 0.3s ease;
    }

    svg {
      position: absolute;
      left: -11px;

      margin-left: 20px;
      font-size: 30px;
      color: var(--primary);
    }
  }

  /* ================= TABLET ================= */

  @media (max-width: 1024px) {
    gap: 30px;

    .home-right-box > .h-right-in {
      margin-right: 40px;
    }

    .home-left > .home-left-image {
      width: 320px;
      height: 320px;
    }
  }

  /* ================= MOBILE ================= */

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 30px;
    padding: 20px;

    .home-left {
      width: 100%;
      height: 350px;
      background-color: transparent;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .home-left > .home-left-image {
      /* left: 50%; */
      /* top: 50%; */
      margin-top: 50px;
      margin-right:50px;
      width: 300px;
      height: 300px;
      border-radius: 70px;
      transform: translate(-50%, -50%) rotate(45deg);
      box-shadow: 0 0 50px -25px var(--primary);
      outline: 1px solid var(--primary);
      position: relative;
      /* z-index: -9; */
      img {
        transform: rotate(-45deg) scale(1.5) !important;
        position: absolute;
        object-fit: contain;
        margin: 0;
        
      }
    }

    .home-right-box {
      width: 100%;
      justify-content: center;
      margin-top: 70px;
    }

    .home-right-box > .h-right-in {
      width: 100%;
      max-width: 100%;
      margin: 0;
      /* background-color: var(--primary); */

      display: flex;
      flex-direction: column;
      align-items: flex-start;

      text-align: left;
    }

    .h-icon-bar {
      /* justify-content: center; */
      width: 100%;
    }
  }

  /* ================= SMALL MOBILE ================= */

  @media (max-width: 480px) {
    .home-left {
      height: 300px;
    }

    .home-left > .home-left-image {
      width: 220px;
      height: 220px;
      border-width: 10px;
      border-radius: 50px;
    }

    .home-right-box > .h-right-in {
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.95rem;
      }
    }
  }
`;