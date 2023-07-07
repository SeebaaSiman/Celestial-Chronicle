import { NavBar } from "@/components";
import { useAgeOnPlanet } from "../hook/useAgeOnPlanet";
import { styled } from "styled-components";

export const Age = () => {
  const storedDate = localStorage.getItem("birthDate");
  const birthDate = new Date(storedDate);
  const ageOnMars = useAgeOnPlanet("Marte", birthDate);
  const ageonMoon = useAgeOnPlanet("Luna", birthDate);
  const ageonSaturno = useAgeOnPlanet("Saturno", birthDate);
  const ageonEarth = useAgeOnPlanet("Tierra", birthDate);

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
      <p>Edad en Marte: {ageOnMars}</p>
      <p>Edad en Luna: {ageonMoon}</p>
      <p>Edad en Saturno: {ageonSaturno}</p>
      <p>Edad en Tierra: {ageonEarth}</p>
      <Card></Card>
    </div>
  );
};
const Card = styled.div``;
