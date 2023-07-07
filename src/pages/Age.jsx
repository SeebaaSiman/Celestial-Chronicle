import { styled } from "styled-components";
import { NavBar } from "@/components";
import { CardPlanet } from "@/components/cards/CardPlanet";
import { usePageAge } from "../hook/usePageAge";
import { FullScreenContent, useFullScreen } from "../components/carousel";
import { dataImg } from "../helpers/dataImg";

export const Age = () => {
  const { arrAgeResults, storedDate } = usePageAge();

  return (
    <div>
      <NavBar />
      <p>
        Al hacer click en cada card abre en pantalla completa la información del
        planeta que sería el carousel en full screen
      </p>
      <p>
        Cada planeta es una card con un contador de años, meses, días, horas,
        minutos y segundos. También muestra cuánto tiempo terrestre es un año
        para ese planeta
      </p>
      <p>Datos del local Storage: {storedDate}</p>

      <WrapperCards>
        {arrAgeResults.map((a, index) => (
          <CardPlanet key={index}>
            <p>
              Edad en {a.planet}: {a.result}
            </p>
          </CardPlanet>
        ))}
      </WrapperCards>
    </div>
  );
};
const WrapperCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
