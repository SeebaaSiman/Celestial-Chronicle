import { useMemo } from "react";
import { styled } from "styled-components";
import { Footer, Navbar } from "@/components";
import { CardPlanet } from "@/components/cards/CardPlanet";
import { ButtonStyle, Content, NavLinks } from "@/style/StylesGlobal";
import { planetData } from "../data/planetData";
import { AccordionCard } from "../components/AccordionCard";

export const Age = () => {
  const storedDate = useMemo(() => localStorage.getItem("birthDate"), []);
  return (
    <>
      <Navbar />
      <Content>
        Se calcula la edad del usuario en años para cada planeta utilizando la
        ley de Kepler y datos astronómicos como los períodos orbitales y de
        rotación de cada planeta en comparación con la Tierra. Esto permite
        obtener edades precisas para cada planeta y mostrar cómo varían en
        relación con la edad en la Tierra.
      </Content>
      <Content>
        <AccordionCard title={"leyes de Kepler"}>
          Las leyes de Kepler son tres principios formulados por el astrónomo
          Johannes Kepler en el siglo XVII para describir el movimiento de los
          planetas alrededor del Sol: La primera ley de Kepler: Los planetas
          describen órbitas elípticas alrededor del Sol, donde el Sol se
          encuentra en uno de los focos de la elipse. La segunda ley de Kepler:
          La línea que une un planeta al Sol barre áreas iguales en tiempos
          iguales, lo que implica que un planeta se mueve más rápido cuando está
          más cerca del Sol y más lento cuando está más lejos. La tercera ley de
          Kepler: El cuadrado del período orbital de un planeta es proporcional
          al cubo de su distancia media al Sol. En otras palabras, cuanto más
          lejos está un planeta del Sol, más tiempo tarda en completar una
          órbita.
        </AccordionCard>
      </Content>
      <Content>
        <AccordionCard title={"período orbital / período de rotación"}>
          El período orbital es el tiempo que le toma a un planeta completar una
          órbita alrededor del Sol. Es equivalente a un año en la Tierra. Por
          otro lado, el período de rotación se refiere al tiempo que tarda un
          planeta en girar sobre su propio eje, lo que determina la duración de
          un día en ese planeta. Cada planeta tiene su propio período orbital y
          de rotación, lo que resulta en días y años de diferentes duraciones en
          cada planeta.
        </AccordionCard>
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
