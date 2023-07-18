import { planetData } from "../data/planetData";
import { calculateAgeOnPlanet } from "./calculateAgeOnPlanet";
// Función para calcular el próximo cumpleaños en el planeta especificado...

export function calculateNextBirthdayOnPlanet(dateOfBirth, planetName) {
  const planet = planetData.find((planet) => planet.name === planetName);
  const planetAge = calculateAgeOnPlanet(dateOfBirth, planetName);
  const planetDays = planetAge * planet.orbitalPeriod;
  const daysToNextBirthdayOnPlanet = planet.orbitalPeriod - (planetDays % planet.orbitalPeriod);

  const currentDate = new Date();
  const nextBirthday = new Date(currentDate.getTime() + daysToNextBirthdayOnPlanet * 24 * 60 * 60 * 1000);

  return nextBirthday;
}