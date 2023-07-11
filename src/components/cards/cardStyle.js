import { styled } from "styled-components";
import { BoxStyle, showIn } from "../../style/StylesGlobal";

export const Title = styled.span`
  position: absolute;
  width: 60%;
  left: 50%;
  bottom: 0;
  opacity: 0;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: monospace;
  color: #000;
  padding: 0.5rem 1rem;
  background-color: #ffff;
  border-radius: 30px;
  box-shadow: ${BoxStyle.boxShadow};
  transform: translate(-50%, 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;
`;
export const CardContainer = styled.div`
  position: relative;
  width: 220px;
  height: 250px;
  background-image: ${({ imgsrc }) => `url(${imgsrc})`};
  background-position: center;
  background-size: cover;
  box-shadow: ${BoxStyle.boxShadow};
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s;
  animation: ${showIn} 1.5s ease-in-out;
  p {
    color: white;
  }
  &:hover {
    ${Title} {
      transform: translate(-50%, -10%);
      opacity: 1;
    }
  }
`;
