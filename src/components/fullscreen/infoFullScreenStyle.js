import { styled } from "styled-components";
import { BoxStyle, device } from "../../style/StylesGlobal";

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin:8px;
  h1 {
    color: white;
  }
  h4 {
    margin-left: auto;
    margin-right: 10px;
    margin-top: 15px;
    color: white;
    backdrop-filter: blur(8px);
    box-shadow: ${BoxStyle.boxShadow};
    border-radius: 15px;

    cursor: pointer;
    &:hover {
      color: white;
      transform: scale(1.2);
    }
  }
  `;
export const InfoText = styled.div`
    overflow: scroll;
  @media ${device.lg} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  h5,
  h4,
  p {
    display: inline-block;
    font-size: 1rem;
    color: #000;
    border-radius: 15px;
    padding: 4px;
    margin-top: 10px;
    margin-right: 6px;
    box-shadow: ${BoxStyle.boxShadow};
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.8);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;