import { useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  useSlider,
  CounterContainer,
  CounterLote,
  Slider,
  WrapperSlider,
  Img,
} from "@/components/carousel";
import { dataImg } from "@/data/dataImg";
import { NavLinks } from "@/style/StylesGlobal";
import { ButtonBack } from "@/style/button";
import { useLanguage } from "../language/LanguageContext";

export const Carousel = () => {
  const {
    cmSliderWrapper,
    cmSlider,
    imageRefs,
    handleMouseMove,
    currentIndex,
  } = useSlider(dataImg);
  const { texts } = useLanguage();
  return (
    <WrapperSlider ref={cmSliderWrapper}>
      <NavLink to="/Age">
        <ButtonBack>{texts.buttonCarousel}</ButtonBack>
      </NavLink>
      <Slider ref={cmSlider} onMouseMove={handleMouseMove}>
        {dataImg.map((item, index) => {
          const imageRef = useRef(null);
          imageRefs.current[index] = imageRef;
          const imageSrc = Object.values(item)[0]; // Obtener el valor del objeto

          const imageName = Object.keys(item)[0]; // obtengo el nombre de cada objeto para ser el id
          return (
            <NavLinks key={index} to={`/Planets/${imageName}`}>
              <Img src={imageSrc} ref={imageRef} />
            </NavLinks>
          );
        })}
      </Slider>
      <CounterContainer>
        <CounterLote className="counter-number">{currentIndex + 1}</CounterLote>
        <CounterLote className="counter-separator">/</CounterLote>
        <CounterLote className="counter-total">{dataImg.length}</CounterLote>
      </CounterContainer>
    </WrapperSlider>
  );
};
