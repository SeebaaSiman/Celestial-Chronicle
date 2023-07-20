import {
  ButtonStyle,
  Content,
  NavLinks,
  PageContainer,
  device,
} from "../style/StylesGlobal";
import { Footer } from "@/components/";
import { Title } from "../components/title";
import { styled } from "styled-components";
import { landingPageTxt } from "../data/text";
export const LandingPage = () => {
  return (
    <Container>
      <HeaderTitle>
        <Title>Celestial</Title>
        <Title>Chronicle</Title>
      </HeaderTitle>
      <PageContainer>
        {landingPageTxt.map((item, index) => (
          <Content key={index}>
            <p>{item.text}</p>
          </Content>
        ))}
        <NavLinks to="/Birthdate">
          <ButtonStyle>GET START</ButtonStyle>
        </NavLinks>
      </PageContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  background-color: #000;
  color: #fff;
`;
const HeaderTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
