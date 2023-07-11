import { useMemo } from "react";
import { useAgeOnPlanet } from "./useAgeOnPlanet";

export const usePageAge = () => {
  const storedDate = useMemo(() => localStorage.getItem("birthDate"), []);
  const birthDate = useMemo(() => new Date(storedDate), [storedDate]);
  const ageOnMars = useAgeOnPlanet("Marte", birthDate);
  const ageonMoon = useAgeOnPlanet("Luna", birthDate);
  const ageonSaturno = useAgeOnPlanet("Saturno", birthDate);
  const ageonEarth = useAgeOnPlanet("Tierra", birthDate);
  const ageonMercurio = useAgeOnPlanet("Mercurio", birthDate);
  const ageonVenus = useAgeOnPlanet("Venus", birthDate);
  const ageonJupiter = useAgeOnPlanet("Júpiter", birthDate);
  const ageonUrano = useAgeOnPlanet("Urano", birthDate);
  const ageonNeptuno = useAgeOnPlanet("Neptuno", birthDate);
  const ageonPluton = useAgeOnPlanet("Plutón", birthDate);

  const arrAgeResults = [
    { planet: "earth", result: ageonEarth },
    { planet: "moon", result: ageonMoon },
    { planet: "mercury", result: ageonMercurio },
    { planet: "venus", result: ageonVenus },
    { planet: "mars", result: ageOnMars },
    { planet: "saturn", result: ageonSaturno },
    { planet: "jupiter", result: ageonJupiter },
    { planet: "uranus", result: ageonUrano },
    { planet: "neptune", result: ageonNeptuno },
    { planet: "pluto", result: ageonPluton },
  ];

  return { arrAgeResults, storedDate };
};
