import styled from "styled-components";

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
  color: blue;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
