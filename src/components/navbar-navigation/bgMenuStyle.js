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
  transform: rotate(40deg) scale(2);
  .top {

    opacity: ${({ isopen }) => (isopen ? 1 : 0)};
    animation: ${({ isopen, isloaded }) =>
    isopen && isloaded ? bgInLat : bgOutLat}
      1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .middle {

    opacity: ${({ isopen }) => (isopen ? 1 : 0)};
    width: 36%;
    animation: ${({ isopen, isloaded }) =>
    isopen && isloaded ? bgInMiddle : bgOutMiddle}
      1s ease-in-out;
      animation-fill-mode: forwards;
    }
    .bottom {

    opacity: ${({ isopen }) => (isopen ? 1 : 0)};
    animation: ${({ isopen, isloaded }) =>
    isopen && isloaded ? bgInLat : bgOutLat}
      1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
export const BgMenuStripe = styled.div`

  background-color: #000;
  border-radius: 50px;
  width: 40%;
`;
