import { keyframes, styled } from "styled-components";
import PropTypes from "prop-types";

export function FullScreenContent({
  handleExitFullScreen,
  fullScreenIndex,
  data,
  handlePrevClick,
  handleNextClick,
}) {
  FullScreenContent.propTypes = {
    handleExitFullScreen: PropTypes.func.isRequired,
    fullScreenIndex: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    handlePrevClick: PropTypes.func.isRequired,
    handleNextClick: PropTypes.func.isRequired,
  };

  return (
    <FullScreenContainer>
      <img src={data[fullScreenIndex].src} />
      <ButtonPrev onClick={handlePrevClick}
      disabled={fullScreenIndex === 0}
      >
        Anterior
      </ButtonPrev>
      <ButtonClose onClick={handleExitFullScreen}>X</ButtonClose>
      <ButtonNext
        onClick={handleNextClick}
        disabled={fullScreenIndex === data.length - 1}
      >
        Siguiente
      </ButtonNext>
    </FullScreenContainer>
  );
}
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
const slider = keyframes`
   0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  `;

const FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: blue;
  z-index: 999;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  img {
    width: 100%;
    height: 100%;
    z-index: 500;
    object-fit: cover;
    object-position: center center;
    animation: ${slider} 0.8s ease-in-out forwards;
  }
`;
const ButtonClose = styled.button`
  position: absolute;
  bottom: 2%;
  left: 50%;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  animation: ${showInWithDown} 1s ease-in-out forwards;
  &.hover {
    background-color: white;
    color: black;
  }
`;

const ButtonPrev = styled.button`
  position: absolute;
  top: 1%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  animation: ${showInWithDown} 1s ease-in-out forwards;
  left: 1%;
`;
const ButtonNext = styled(ButtonPrev)`
  right: -80%;
`;
