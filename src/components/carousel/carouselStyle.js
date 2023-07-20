import { keyframes, styled } from "styled-components";
import { device } from "../../style/StylesGlobal";

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

const showInFullScreen = keyframes`
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
export const WrapperSlider = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
@media ${device.sm}{

  }

`;
export const Slider = styled.div`
  position: relative;
  display: flex;
  background-color: #000;
  justify-content: flex-start; /* Alinear los elementos al principio */
  overflow-x: auto; /* Habilitar el desplazamiento horizontal en dispositivos móviles */
  -webkit-overflow-scrolling: touch; /* Mejorar el desplazamiento táctil en dispositivos iOS */
  @media ${device.sm}{
    position: absolute;
    gap: 5vmin;
    top: 50%;
    left: 50%;
    transform: translate(0%, -50%);
  }
`;
export const Img = styled.img`
min-width: 65vmin;
max-width: 65vmin;
height: 95vmin;
object-fit: cover; /*hace que la imagen se ajuste y recorte según el tamaño del contenedor */
animation: ${showInFullScreen} 0.8s ease-in-out forwards;

@media ${device.sm}{
  min-width: 45vmin;
  max-width: 45vmin;
  height: 65vmin;
  object-position: center center; /*centra la imagen tanto horizontal como vertical*/
}

`
export const CounterContainer = styled.div`
@media ${device.sm}{
  position: absolute;
  bottom: 5%;
  left: 50%;
  color:#b3ff00;

}

`;
export const CounterLote = styled.span`
  animation: ${showInWithDown} 0.8s ease-in-out forwards;
`;