import styled from "styled-components";
import { BoxStyle, device } from "../../style/StylesGlobal";
import { useLanguage } from "../../language/LanguageContext";

export const ShowCounter = ({
  years,
  months,
  days,
  hours,
  minutes,
  seconds,
}) => {
  const { texts } = useLanguage();
  const arr = [
    { text: `${texts.showCounter1}`, value: years },
    { text: `${texts.showCounter2}`, value: months },
    { text: `${texts.showCounter3}`, value: days },
    { text: `${texts.showCounter4}`, value: hours },
    { text: `${texts.showCounter5}`, value: minutes },
    { text: `${texts.showCounter6}`, value: seconds },
  ];
  return (
    <CountdownContainer>
      {arr?.map((item, index) => {
        if (
          (item.text === `${texts.showCounter1}` && item.value === 0) ||
          (item.text === `${texts.showCounter2}` && item.value === 0) ||
          (item.text === `${texts.showCounter3}` && item.value === 0)
        ) {
          return null;
        }

        return (
          <div key={index}>
            <span>{item.value}</span>
            <span>{item.text}</span>
          </div>
        );
      })}
    </CountdownContainer>
  );
};
const CountdownContainer = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  div {
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 25%;
    box-shadow: ${BoxStyle.boxShadow};
    @media ${device.md} {
      width: 50%;
    }
    @media ${device.lg} {
      width: 30%;
    }
  }
`;
