import {
  ButtonStyle,
  Content,
  NavLinks,
  PageContainer,
} from "../style/StylesGlobal";
import { Footer } from "@/components/";
import { Title } from "../components/title";
import { styled } from "styled-components";
import { SwitchLanguage } from "../language/SwitchLanguage";
import { useLanguage } from "../language/LanguageContext";
export const LandingPage = () => {
  const { texts } = useLanguage();
  const landingPageTxt = [
    { txt: texts.text1 },
    { txt: texts.text2 },
    { txt: texts.text3 },
    { txt: texts.text4 },
    { txt: texts.text5 },
  ];
  return (
    <Container>
      <SwitchLanguage />
      <HeaderTitle>
        <Title>{texts.title1}</Title>
        <Title>{texts.title2}</Title>
      </HeaderTitle>
      <PageContainer>
        {landingPageTxt.map((item, index) => (
          <Content key={index}>
            <p>{item.txt}</p>
          </Content>
        ))}
        <NavLinks to="/Birthdate">
          <ButtonStyle>{texts.buttonStyle}</ButtonStyle>
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
  :nth-child(1) {
    margin-top: 1.5rem;
  }
`;
