import { keyframes, styled } from "styled-components";
import moon from "@/assets/moon.png";
export const LoaderMoon = () => {
  return (
    <LoaderContainer>
      <img src={moon} alt="Moon" />
    </LoaderContainer>
  );
};
const show = keyframes`
0% {
  opacity:1;
    transform: translateX(-200%) rotate(0) scale(1.8);
  }
  50% {
    opacity:1;
    transform: translateX(0%) rotate(180deg) scale(1);
  }
  99% {
    opacity:1;
    transform: translateX(200%) rotate(360deg) scale(0.5);
  }
  100%{
   opacity:0;
  }
`;
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  img {
    height: 95%;
    object-fit: cover;
    animation: ${show} 2s ease-in-out;
    animation-fill-mode: forwards;
  }
`;
