import * as Unicons from "@iconscout/react-unicons";
import { FullScreenContainer } from "../components/fullscreen/fullScreenStyle";
import { InfoFullScreen } from "../components/fullscreen/infoFullScreen";
import { useFullScreenSlider } from "../components/fullscreen/useFullScreenSlider";
import {
  ButtonClose,
  ButtonNext,
  ButtonPrev,
  HeaderButton,
} from "../style/button";

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
  const planet = planetName;
  const styleIcon = {
    color: "#b3ff00",
    transform: "scale(1.5)",
  };

  return (
    <FullScreenContainer imageUrl={imageUrl}>
      <HeaderButton>
        <ButtonPrev onClick={goToPrevImage} disabled={isFirstImage}>
          <Unicons.UilArrowLeft style={styleIcon} />
        </ButtonPrev>
        <ButtonNext onClick={goToNextImage} disabled={isLastImage}>
          <Unicons.UilArrowRight style={styleIcon} />
        </ButtonNext>
      </HeaderButton>
      <InfoFullScreen planet={planet} />
      
      <ButtonClose onClick={goExitFullScreen}>
        <Unicons.UilMultiply style={styleIcon} />
      </ButtonClose>
    </FullScreenContainer>
  );
};
