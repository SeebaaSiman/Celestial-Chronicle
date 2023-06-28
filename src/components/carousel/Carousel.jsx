import { useRef } from "react";
import "./style.css";
import { useSlider } from "./useSlider";
import { useState } from "react";
import { FullScreenContent } from "./FullScreenContent";
import { keyframes, styled } from "styled-components";

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
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenIndex, setFullScreenIndex] = useState(null);

  const handleImageClick = (index) => {
    setIsFullScreen(true);
    setFullScreenIndex(index);
  };

  const handlePrevClick = () => {
    if (fullScreenIndex > 0) {
      setFullScreenIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (fullScreenIndex < data.length - 1) {
      setFullScreenIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
    setFullScreenIndex(null);
  };
  return (
    <WrapperSlider ref={cmSliderWrapper}>
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

      <div className="counter">
        <span className="counter-number">{currentIndex + 1}</span>
        <span className="counter-separator">/</span>
        <span className="counter-total">{data.length}</span>
      </div>

      {isFullScreen && (
        <FullScreenContent
          handleExitFullScreen={handleExitFullScreen}
          fullScreenIndex={fullScreenIndex}
          data={data}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
        />
      )}
    </WrapperSlider>
  );
};
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

const WrapperSlider = styled.div`
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
const Slider = styled.div`
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
