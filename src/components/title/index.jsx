import styled from "styled-components";
import backgroundImage from "./../../assets/back.mp4";
import { device } from "../../style/StylesGlobal";

const TitleContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 85px;
  overflow: hidden;
  @media ${device.md} {
    height: 115px;
  }
  @media ${device.lg} {
    height: 145px;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Label = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000;
  font-family: "Roboto Serif";
  font-weight: bold;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  mix-blend-mode: multiply;
  @media ${device.md} {
    font-size: 60px;
  }
  @media ${device.lg} {
    font-size: 70px;
  }
`;
export const Title = ({ children }) => {
  return (
    <TitleContainer>
      <video autoPlay loop muted>
        <source src={backgroundImage} type="video/mp4" />
      </video>
      <Label>
        <h1>{children}</h1>
      </Label>
    </TitleContainer>
  );
};
