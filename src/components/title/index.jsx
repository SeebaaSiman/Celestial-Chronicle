import styled from "styled-components";
import backgroundImage from "./../../assets/galaxy.jpg";

const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const TitleText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: transparent;
  background-image: url(${backgroundImage});
  -webkit-background-clip: text;
  background-clip: text;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export const Title = () => {
  return (
    <TitleContainer>
      <TitleText>Celestial Chronicle</TitleText>
      <BackgroundImage src={backgroundImage} alt="Imagen de fondo" />
    </TitleContainer>
  );
};
