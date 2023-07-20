import img from "@/assets/astronauta.gif";
import { styled } from "styled-components";
export const LoaderaAtronaut = () => {
  return (
    <Container>
      <img src={img} alt="astronauta" />
    </Container>
  );
};
const Container = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
