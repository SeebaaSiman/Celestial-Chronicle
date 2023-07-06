import { NavBar } from "@/components";
import { useAgeOnPlanet } from "../hook/useAgeOnPlanet";
import { styled } from "styled-components";

export const Age = () => {
  const birthDate = new Date("1990-01-01");
  const ageOnMars = useAgeOnPlanet("Marte", birthDate);
  const ageonMoon = useAgeOnPlanet("Luna", birthDate);
  return (
    <div>
      <NavBar />
      <p>
        Al hacer click en cada card abre en pantalla completa la información del
        planeta que sería el carousel en full screen
      </p>
      <p>Edad en Marte: {ageOnMars}</p>
      <p>Edad en Luna: {ageonMoon}</p>
      <Card></Card>
    </div>
  );
};
const Card = styled.div``;
