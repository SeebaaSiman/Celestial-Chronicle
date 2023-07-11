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
export const showInFullScreen = keyframes`
   0% {
      opacity: 0;
      transform: scale(12%);
      transform: translateX(-22%);

    }
    100% {
      opacity: 1;
      transform: scale(100%);
    }
  `;

export const FullScreenContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 100;
  img {
position:absolute;
    width: 100%;
    height: 100%;
    z-index: 200;
    object-fit: cover;
    object-position: center center;
    animation: ${showInFullScreen} 0.8s ease-in-out forwards;
  }
`;
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
export const ButtonClose = styled.button`
  position: absolute;
  bottom: 0%;
  left: 50%;
  padding: .5rem;
  background-color: transparent;
  border-radius:10px;
  border: none;
  color: white;
  font-size: 24px;
  z-index: 800;
  cursor: pointer;
  animation: ${showHoverOut} 1s ease-in-out forwards;
  &:hover {
    background-color: white;
    color: black;
    animation: ${showHover} 1s ease-in-out forwards;
    animation-fill-mode: forwards; /* Mantener las propiedades finales de la animación */
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
  background-color: #fff;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
`
export const HeaderButton = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
`
export const ButtonPrev = styled(ButtonStyle)`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  z-index: 800;
  cursor: pointer;
  animation: ${showInWithDown} 1s ease-in-out forwards;
`;

export const ButtonNext = styled(ButtonPrev)`
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
`;
export const Img = styled.img`
min-width: 45vmin;
max-width: 45vmin;
height: 65vmin;
object-fit: cover; /*hace que la imagen se ajuste y recorte según el tamaño del contenedor */
object-position: center center; /*centra la imagen tanto horizontal como vertical*/
animation: ${showInFullScreen} 0.8s ease-in-out forwards;
`
export const CounterContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  color: white;
`;
export const CounterLote = styled.span`
  animation: ${showInWithDown} 0.8s ease-in-out forwards;
`;