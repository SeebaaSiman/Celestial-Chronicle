import { keyframes, styled } from "styled-components";
import { ButtonPrev } from "../../style/button";
import { BoxStyle, device } from "../../style/StylesGlobal";
import { IconClose } from "../../style/icons";

export const ModalFullScreen = ({ isLoading, children, toggle }) => {
  return (
    isLoading && (
      <Container>
        <Content>
          {children}
          <Button onClick={toggle}>
            <IconClose size={"2rem"} />
          </Button>
        </Content>
      </Container>
    )
  );
};

const fadeInFromBottom = keyframes`
  from {
    transform: translateY(100%)scale(0.1);

  }

  to {
    transform: translateY(0)scale(1);
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 800;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.5);
  animation: ${fadeInFromBottom} 0.6s ease-in-out;
`;
const Content = styled.div`
  position: relative;
  height: 85%;
  width: 85%;
  background-color: #000;
  margin: 2.5rem;
  padding: 2.5rem;
  box-shadow: ${BoxStyle.boxShadow};
  border-radius: 30px;

  @media ${device.md} {
    width: 60%;
    height: 75%;
  }
  @media ${device.lg} {
    height: 70%;
    width: 50%;
  }
`;
const Button = styled(ButtonPrev)`
  position: absolute;
  bottom: 2%;
  left: 50%;
`;
