import { FullScreenContainer, useFullScreen } from "../components/carousel";
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
  } = useFullScreen();

  if (!currentImage) {
    return <div>Cargando...</div>;
  }
  const planetName = currentImage ? Object.keys(currentImage)[0] : "";
  const imageUrl = currentImage ? currentImage[planetName] : "";

  return (
    <FullScreenContainer>
      <img src={imageUrl} alt={planetName} />
      <HeaderButton>
        <ButtonPrev onClick={goToPrevImage} disabled={isFirstImage}>
          Anterior
        </ButtonPrev>
        <ButtonNext onClick={goToNextImage} disabled={isLastImage}>
          Siguiente
        </ButtonNext>
      </HeaderButton>

      <ButtonClose onClick={goExitFullScreen}>X</ButtonClose>
    </FullScreenContainer>
  );
};