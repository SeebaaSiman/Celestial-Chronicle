import { styled } from "styled-components";
import { Footer, Navbar } from "@/components";
import { CardPlanet } from "@/components/cards/CardPlanet";
import { ButtonStyle, Content, NavLinks } from "@/style/StylesGlobal";
import { planetData } from "../data/planetData";
import { AccordionCard } from "../components/AccordionCard";
import { useLanguage } from "../language/LanguageContext";

export const Age = () => {
  const { texts } = useLanguage();
  return (
    <>
      <Navbar />
      <Content>
        <h3>{texts.ageTxt1}</h3>
      </Content>
      <AccordionCard title={`${texts.ageTitle1}`}>
        <h3>
          {texts.ageTxt2}
          <br />
          {texts.ageTxt3}
          <br />
          {texts.ageTxt4}
          <br />
          {texts.ageTxt5}
        </h3>
      </AccordionCard>
      <AccordionCard title={`${texts.ageTitle2}`}>
        <h3>{texts.ageTxt6}</h3>
      </AccordionCard>

      <WrapperCards>
        {planetData?.map((a, index) => (
          <CardPlanet key={index} planet={a.name} />
        ))}
      </WrapperCards>
      <NavLinks to="/Planets">
        <ButtonPlanets>{texts.buttonAge}</ButtonPlanets>
      </NavLinks>
      <Footer />
    </>
  );
};
const WrapperCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;
const ButtonPlanets = styled(ButtonStyle)`
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
