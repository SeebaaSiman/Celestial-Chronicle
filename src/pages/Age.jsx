import { useMemo } from "react";
import { styled } from "styled-components";
import { Footer, Navbar } from "@/components";
import { CardPlanet } from "@/components/cards/CardPlanet";
import { ButtonStyle, Content, NavLinks } from "@/style/StylesGlobal";
import { planetData } from "../data/planetData";

export const Age = () => {
  const storedDate = useMemo(() => localStorage.getItem("birthDate"), []);

  return (
    <>
      <Navbar />
      <Content>
        Al hacer click en cada card abre en pantalla completa la información del
        planeta que sería el carousel en full screen
      </Content>
      <Content>
        Cada planeta es una card con un contador de años, meses, días, horas,
        minutos y segundos. También muestra cuánto tiempo terrestre es un año
        para ese planeta
      </Content>
      <Content>Datos del local Storage: {storedDate}</Content>

      <WrapperCards>
        {planetData?.map((a, index) => (
          <CardPlanet key={index} planet={a.name} />
        ))}
      </WrapperCards>
      <NavLinks to="/Planets">
        <ButtonPlanets>go to planets</ButtonPlanets>
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
