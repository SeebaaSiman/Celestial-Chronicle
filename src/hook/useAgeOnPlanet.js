import { useEffect, useState } from "react";
import { getAgeOnPlanet } from "./helpers";

export const useAgeOnPlanet = (planetName, birthDate) => {
 const [age, setAge] = useState(null);

 useEffect(() => {
  try {
   const ageOnPlanet = getAgeOnPlanet(planetName, birthDate);
   setAge(ageOnPlanet);
  } catch (error) {
   console.error(error);
  }
 }, [planetName, birthDate]);

 return age;
};

