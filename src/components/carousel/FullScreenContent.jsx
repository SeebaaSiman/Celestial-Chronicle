import PropTypes from "prop-types";
import {
  ButtonClose,
  ButtonNext,
  ButtonPrev,
  FullScreenContainer,
} from "./carouselStyle";

export const FullScreenContent = ({
  data,
  fullScreenIndex,
  handleExitFullScreen,
  handleNextClick,
  handlePrevClick,
}) => {
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
      <ButtonPrev onClick={handlePrevClick} disabled={fullScreenIndex === 0}>
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
};
