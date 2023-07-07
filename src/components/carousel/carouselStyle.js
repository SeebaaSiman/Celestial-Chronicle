import { keyframes, styled } from "styled-components";

export const showInWithDown = keyframes`
   0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  `;
export const slider = keyframes`
   0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  `;

export const FullScreenContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: blue;
  z-index: 200;

  img {
    width: 100%;
    height: 100%;
    z-index: 500;
    object-fit: cover;
    object-position: center center;
    animation: ${slider} 0.8s ease-in-out forwards;
  }
`;
export const ButtonClose = styled.button`
  position: absolute;
  bottom: 2%;
  left: 50%;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  z-index: 800;
  cursor: pointer;
  animation: ${showInWithDown} 1s ease-in-out forwards;
  &:hover {
    transform: scale(2);
    background-color: white;
    color: black;
  }
`;

const ButtonStyle = styled.button`
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
&:focus,
&:hover {
  color: #200;
}
&:focus:after,
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
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
`

export const ButtonPrev = styled(ButtonStyle)`
  position: absolute;
  top: 1%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  z-index: 800;
  cursor: pointer;
  animation: ${showInWithDown} 1s ease-in-out forwards;
  left: 1%;
`;

export const ButtonNext = styled(ButtonPrev)`
  left: 70%;
`;
export const ButtonBack = styled(ButtonPrev)`
z-index: 200;
`

export const WrapperSlider = styled.div`
  width: 100%;
  overflow-x: scroll;
  height: 100vh;

  /* Si hay evento hover hay interaccion con el mouse */
  @media (hover: hover) {
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: black;
    width: 100%;
  }
`;
export const Slider = styled.div`
  display: flex;
  gap: 5vmin;
  user-select: none; /* evita que se seleccione el texto */

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -50%);
  img {
    min-width: 45vmin;
    max-width: 45vmin;
    height: 65vmin;
    object-fit: cover; /*hace que la imagen se ajuste y recorte según el tamaño del contenedor */
    object-position: center center; /*centra la imagen tanto horizontal como vertical*/
    animation: ${showInWithDown} 0.8s ease-in-out forwards;
  }
`;
export const CounterContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  color: white;
`;
export const CounterLote = styled.span`
  animation: ${showInWithDown} 0.8s ease-in-out forwards;
`;