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
} from "./";
import { NavLink } from "react-router-dom";

export const Carousel = () => {
  const data = [
    { src: "https://unsplash.com/photos/ouo1hbizWwo/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/ISg37AI2A-s/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/6aY_0S-epZQ/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/9gz3wfHr65U/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/v3-zcCWMjgM/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/9UUoGaaHtNE/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/MUcxe_wDurE/download?&amp;w=1280" },
    { src: "https://unsplash.com/photos/GcBuJkuiCpU/download?&amp;w=1280" },
  ];
  const {
    cmSliderWrapper,
    cmSlider,
    imageRefs,
    handleMouseMove,
    currentIndex,
  } = useSlider(data);
  const {
    isFullScreen,
    handleImageClick,
    fullScreenIndex,
    handleExitFullScreen,
    handleNextClick,
    handlePrevClick,
  } = useFullScreen(data);
  return (
    <WrapperSlider ref={cmSliderWrapper}>
      <NavLink to="/Age">
        <ButtonPrev>Back</ButtonPrev>
      </NavLink>
      <Slider ref={cmSlider} onMouseMove={handleMouseMove}>
        {data.map((item, index) => {
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
        <CounterLote className="counter-total">{data.length}</CounterLote>
      </CounterContainer>

      {isFullScreen && (
        <FullScreenContent
          data={data}
          fullScreenIndex={fullScreenIndex}
          handleExitFullScreen={handleExitFullScreen}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      )}
    </WrapperSlider>
  );
};
