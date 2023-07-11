import { planetData } from "../data/planetData";
import { calculateEarthAge } from "./calculateEarthAge";

export const getAgeOnPlanet = (planetName, birthDate) => {
 const planet = planetData.find((planet) => planet.name === planetName);
 if (!planet) {
  throw new Error(`No se encontró el planeta "${planetName}".`);
 }

 const earthAge = calculateEarthAge(birthDate);
 const ageOnPlanet = earthAge / planet.orbitalPeriod;

 return ageOnPlanet.toFixed(2); // Redondea el resultado a 2 decimales
};