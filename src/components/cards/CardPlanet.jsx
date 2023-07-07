import { keyframes, styled } from "styled-components";
import { BoxStyle } from "../../style/StylesGlobal";
import useIntersectionObserver from "../../hook/useIntersectionObserver";
import { useRef } from "react";
import useDeviceType from "../../hook/useDeviceType";

export const CardPlanet = ({ children }) => {
  const refCard = useRef();
  const options = { threshold: 0.5 };
  const deviceType = useDeviceType();
  const isobserver = useIntersectionObserver(refCard, options);

  const isintersecting = deviceType !== "desktop" ? isobserver : undefined;

  return (
    <CardContainer ref={refCard} isintersecting={isintersecting}>
      <Card>{children}</Card>
    </CardContainer>
  );
};
const showIn = keyframes`
0% {
 opacity: 0;
 transform: scale(0.2);
}
100% {
 opacity: 1;
 transform: scale(1);
}`;
const CardContainer = styled.div`
  position: relative;
  animation: ${showIn} 1.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgb(127, 146, 255);
    z-index: -1;
    border-radius: 50%;
    left: 100px;
    top: 50px;
    transition: all 1s;
    transform: ${({ isintersecting }) =>
      isintersecting ? "translate(-50px, 50px)" : "none"};
  }
  &:hover::before {
    transform: translate(-50px, 50px);
  }
`;
const Card = styled.div`
  position: relative;
  width: 220px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: ${BoxStyle.boxShadow};
  padding: 20px 10px;
  border-radius: 10px;
  backdrop-filter: blur(30px);
  background-color: rgba(65, 65, 65, 0.308);
  cursor: pointer;
`;

/* @media ${device.sm}{
    transform: ${({ isIntersecting }) =>
      isIntersecting ? "translate(-50px, 50px)" : "none"};
    } */
