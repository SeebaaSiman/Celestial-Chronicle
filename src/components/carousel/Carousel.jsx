import { useRef } from "react";
import {
  useFullScreen,
  FullScreenContent,
  useSlider,
  CounterContainer,
  CounterLote,
  Slider,
  WrapperSlider,
  ButtonPrev,
  ButtonBack,
} from "./";
import { NavLink } from "react-router-dom";
import { dataImg } from "../../helpers/dataImg";

export const Carousel = () => {
  const {
    cmSliderWrapper,
    cmSlider,
    imageRefs,
    handleMouseMove,
    currentIndex,
  } = useSlider(dataImg);
  const {
    isFullScreen,
    handleImageClick,
    fullScreenIndex,
    handleExitFullScreen,
    handleNextClick,
    handlePrevClick,
  } = useFullScreen(dataImg);
  return (
    <WrapperSlider ref={cmSliderWrapper}>
      <NavLink to="/Age">
        <ButtonBack>Back</ButtonBack>
      </NavLink>
      <Slider ref={cmSlider} onMouseMove={handleMouseMove}>
        {dataImg.map((item, index) => {
          const imageRef = useRef(null);
          imageRefs.current[index] = imageRef;

          return (
            <img
              src={item.src}
              key={index}
              ref={imageRef}
              onClick={() => handleImageClick(index)}
            />
          );
        })}
      </Slider>

      <CounterContainer>
        <CounterLote className="counter-number">{currentIndex + 1}</CounterLote>
        <CounterLote className="counter-separator">/</CounterLote>
        <CounterLote className="counter-total">{dataImg.length}</CounterLote>
      </CounterContainer>

      {isFullScreen && (
        <FullScreenContent
          data={dataImg}
          fullScreenIndex={fullScreenIndex}
          handleExitFullScreen={handleExitFullScreen}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      )}
    </WrapperSlider>
  );
};
