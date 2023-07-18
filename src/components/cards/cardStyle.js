import { styled } from "styled-components";
import { BoxStyle, ButtonStyle, device, showIn } from "../../style/StylesGlobal";

export const Title = styled(ButtonStyle)`
  position: absolute;
  width: 60%;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transform: translate(-50%, 100%);
  text-transform: uppercase;
  font-family: monospace;
  font-size: 1rem;
`;
export const CardContainer = styled.div`
  position: relative;
  width: 88%;
  min-height: 450px;
  background-image: ${({ imgsrc }) => `url(${imgsrc})`};
  background-position: center;
  background-size: cover;
  box-shadow: ${BoxStyle.boxShadow};
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
    transition: all 1s;
  animation: ${showIn} 1.5s ease-in-out;
  animation-fill-mode: forwards;
@media ${device.md}{
  width:45%;
}
@media ${device.lg}{
  width:30%;
}
h2,h4{
  display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    border-radius:20px;
    margin:8px;
    box-shadow:${BoxStyle.boxShadow};
    color: white;
}
  &:hover {
h4,div{

  filter:blur(8px);
}

${Title} {
      filter:blur(0px);
      transform: translate(-50%, -10%);
      opacity: 1;
    }
  }
`;
