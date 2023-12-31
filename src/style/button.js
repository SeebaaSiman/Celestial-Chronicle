import { keyframes, styled } from "styled-components";
import { device } from "./StylesGlobal";

const showHover = keyframes`
100%{
  transform: translateY(-50%);
  }
`
const showHoverOut = keyframes`
0%{
  transform: translateY(-50%);
  }
100%{
  transform: translateY(0%);
  }
`
const showInWithDown = keyframes`
   0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `;
export const ButtonClose = styled.button`
position:absolute;
left: 50%;
padding: .5rem;
  background-color: transparent;
  border-radius:10px;
  border: none;
  color: white;
  font-size: 24px;
  z-index: 600;
  cursor: pointer;
  animation: ${showHoverOut} 1s ease-in-out forwards;
  @media ${device.sm}{
    bottom: 0%;

  }
  &:hover {
    background-color: white;
    color: black;
    animation: ${showHover} 1s ease-in-out forwards;
    animation-fill-mode: forwards; /* Mantener las propiedades finales de la animación */
  }
`;

const ButtonDefault = styled.button`
font-size: 18px;
color: #e1e1e1;
font-family: inherit;
font-weight: 800;
cursor: pointer;
position: relative;
border: none;
background: none;
text-transform: uppercase;
transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
transition-duration: 400ms;
transition-property: color;
&:hover {
  color: #200;
  transform: scale(0.8);
}
&:hover:after {
  width: 100%;
  left: 0%;
}
&:after {
  content: "";
  pointer-events: none;
  bottom: -2px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: #b3ff00;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
`
export const HeaderButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
h1{
  text-transform:uppercase;
  animation: ${showInWithDown} 1s ease-in-out forwards;
}

`
export const ButtonPrev = styled(ButtonDefault)`
  background-color: transparent;
  border: none;
  color: white;
  /* height:40px; */
  /* font-size: 44px; */
  z-index: 600;
  cursor: pointer;
  animation: ${showInWithDown} 1s ease-in-out forwards;
`;

export const ButtonNext = styled(ButtonPrev)`
`;
export const ButtonBack = styled(ButtonPrev)`
position:absolute;
top:0;
left:0;
color:#b3ff00;

z-index: 200;
`