import { planetData } from "../data/planetData";
// Función para calcular la edad en el planeta especificado...
export function calculateAgeOnPlanet(dateOfBirth, planetName) {
 const birthDate = new Date(dateOfBirth);
 const currentDate = new Date();
 const earthAge = (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.26);
 const planet = planetData.find((planet) => planet.name === planetName);
 const ageOnPlanet = earthAge * (365.26 / planet.orbitalPeriod);
 return ageOnPlanet;
}