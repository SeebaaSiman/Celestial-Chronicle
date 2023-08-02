import { FullScreenContainer } from "../components/fullscreen/fullScreenStyle";
import { Info } from "../components/fullscreen/Info";
import { useFullScreenSlider } from "../components/fullscreen/useFullScreenSlider";
import {
  ButtonClose,
  ButtonNext,
  ButtonPrev,
  HeaderButton,
} from "../style/button";
import {
  IconArrowLeft,
  IconArrowRight,
  IconClose,
  sizeIconFullScreen,
} from "../style/icons";

export const FullScreenContent = () => {
  const {
    currentImage,
    goToNextImage,
    goToPrevImage,
    goExitFullScreen,
    isFirstImage,
    isLastImage,
  } = useFullScreenSlider();

  const planetName = currentImage ? Object.keys(currentImage)[0] : "";
  const imageUrl = currentImage ? currentImage[planetName] : "";

  return (
    <FullScreenContainer imageUrl={imageUrl}>
      <HeaderButton>
        <ButtonPrev onClick={goToPrevImage} disabled={isFirstImage}>
          <IconArrowLeft size={sizeIconFullScreen} />
        </ButtonPrev>
        <h1>{planetName}</h1>
        <ButtonNext onClick={goToNextImage} disabled={isLastImage}>
          <IconArrowRight size={sizeIconFullScreen} />
        </ButtonNext>
      </HeaderButton>
      <Info planet={planetName} />
      <ButtonClose onClick={goExitFullScreen}>
        <IconClose size={sizeIconFullScreen} />
      </ButtonClose>
    </FullScreenContainer>
  );
};
