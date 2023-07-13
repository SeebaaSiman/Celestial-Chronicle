import { styled } from "styled-components";
import { showInBottom, showInLeft, showInMiddle, showInRight, showInTop, showOutBottom, showOutLeft, showOutMiddle, showOutRight, showOutTop } from "./animationsNavBar";
import { BoxStyle } from "../../style/StylesGlobal";
export const MenuAndCloseTrigger = styled.div`
  position: absolute;
  top: 40px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 42px;
  height: 42px;
  cursor: pointer;
  z-index: 333;
`;


export const MenuTrigger = styled(MenuAndCloseTrigger)`
  position: absolute;
  display: flex;
  justify-content: space-around;
  div {
    height: 2px;
    background-color:#b3ff00;
    border-radius: 300px;
    width: 100%;
  }
  .top {
      box-shadow: ${BoxStyle.boxShadow};
    transform: rotate(-50deg) translateY(-40%) translateX(40%);
    animation: ${({ isopen }) => (isopen ? showOutTop : showInTop)} 1s
      ease-in-out;
    animation-fill-mode: forwards;
  }
  .middle {
      box-shadow: ${BoxStyle.boxShadow};
    transform: rotate(-50deg) scaleY(1) translateY(-50%) translateX(50%);
    animation: ${({ isopen }) => (isopen ? showOutMiddle : showInMiddle)} 1s
      ease-in-out;
    animation-fill-mode: forwards;
  }
  .bottom {
      box-shadow: ${BoxStyle.boxShadow};
    transform: rotate(-50deg) translateY(-60%) translateX(60%);
    animation: ${({ isopen }) => (isopen ? showOutBottom : showInBottom)} 1s
      ease-in-out;
    animation-fill-mode: forwards;
  }
`;

export const CloseTrigger = styled(MenuAndCloseTrigger)`
  position: absolute;
  right: 0px;
  display: flex;
  justify-content: start;
  align-items: end;
  z-index:5;
  div {
    height: 2px;
    background-color:#b3ff00;
    border-radius: 30px;
    width: 100%;
  }
  .left {
    opacity: ${({ isopen }) => (isopen ? 1 : 0)};
    top: 50%;
    left: 50%;
      box-shadow: ${BoxStyle.boxShadow};

    transform: translate(-50%, -50%) rotate(-45deg);
    animation: ${({ isopen, isloaded }) =>
    isopen && isloaded ? showInLeft : showOutLeft}
      1s ease-in-out;
    animation-fill-mode: forwards;
  }
  .right {
    opacity: ${({ isopen }) => (isopen ? 1 : 0)};
    top: 50%;
    left: 50%;
      box-shadow: ${BoxStyle.boxShadow};

    transform: translate(-50%, -50%) rotate(45deg);
    animation: ${({ isopen, isloaded }) =>
    isopen && isloaded ? showInRight : showOutRight}
      1s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
