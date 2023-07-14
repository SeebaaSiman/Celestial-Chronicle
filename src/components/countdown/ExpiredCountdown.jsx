import styled from "styled-components";

export const ExpiredCountdown = () => {
  return <ExpiredContainer>Waiting an age</ExpiredContainer>;
};
const ExpiredContainer = styled.div`
  margin: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
