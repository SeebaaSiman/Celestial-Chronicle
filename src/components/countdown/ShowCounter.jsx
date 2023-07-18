import styled from "styled-components";
import { BoxStyle, device } from "../../style/StylesGlobal";

export const ShowCounter = ({
  years,
  months,
  days,
  hours,
  minutes,
  seconds,
}) => {
  const arr = [
    { text: "Years", value: years },
    { text: "Months", value: months },
    { text: "Days", value: days },
    { text: "Hours", value: hours },
    { text: "Minutes", value: minutes },
    { text: "Seconds", value: seconds },
  ];
  return (
    <CountdownContainer>
      {arr.map((item, index) => {
        if (
          (item.text === "Years" && item.value === 0) ||
          (item.text === "Months" && item.value === 0) ||
          (item.text === "Days" && item.value === 0)
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
    width: 15%;
    box-shadow: ${BoxStyle.boxShadow};
    @media ${device.md} {
      width: 50%;
    }
    @media ${device.lg} {
      width: 30%;
    }
  }
`;
