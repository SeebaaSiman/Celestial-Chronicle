import { NavBar } from "@/components";
import { useAgeOnPlanet } from "../hook/useAgeOnPlanet";

export const Age = () => {
  const birthDate = new Date("1990-01-01");
  const ageOnMars = useAgeOnPlanet("Marte", birthDate);

  return (
    <div>
      <NavBar />
      <p>
        Al hacer click en cada card abre en pantalla completa la información del
        planeta que sería el carousel en full screen
      </p>
      <p>Edad en Marte: {ageOnMars}</p>
    </div>
  );
};
