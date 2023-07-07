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
    { planet: "Earth", result: ageonEarth },
    { planet: "Moon", result: ageonMoon },
    { planet: "Mercúrio", result: ageonMercurio },
    { planet: "Venus", result: ageonVenus },
    { planet: "Mars", result: ageOnMars },
    { planet: "Saturn", result: ageonSaturno },
    { planet: "Júpiter", result: ageonJupiter },
    { planet: "Urano", result: ageonUrano },
    { planet: "Neptuno", result: ageonNeptuno },
    { planet: "Plutón", result: ageonPluton },
  ];

  return { arrAgeResults, storedDate };
};
