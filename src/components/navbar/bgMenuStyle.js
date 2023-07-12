import { styled } from "styled-components";
import { bgInLat, bgInMiddle, bgOutLat, bgOutMiddle } from "./animationsNavBar";

export const BgMenuContainer = styled.div`
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  z-index: 2;
  transform: rotate(45deg) scale(1.6);
  .top {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    animation: ${({ isOpen, isLoaded }) =>
    isOpen && isLoaded ? bgInLat : bgOutLat}
      1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .middle {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    width: 36%;
    animation: ${({ isOpen, isLoaded }) =>
    isOpen && isLoaded ? bgInMiddle : bgOutMiddle}
      1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .bottom {
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    animation: ${({ isOpen, isLoaded }) =>
    isOpen && isLoaded ? bgInLat : bgOutLat}
      1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
export const BgMenuStripe = styled.div`
  background-color: #444444;
  border-radius: 50px;
  width: 40%;
`;
