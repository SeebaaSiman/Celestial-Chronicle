// import axios from "axios";

// const apiKey = "RQKruTXbxbEwaQiKjSwqopjU5Ge9vmdLm5Gq6uGV";
const planetData = [
 { name: 'Mercurio', orbitalPeriod: 0.2408467 },
 { name: 'Venus', orbitalPeriod: 0.61519726 },
 { name: 'Tierra', orbitalPeriod: 1 },
 { name: 'Marte', orbitalPeriod: 1.8808158 },
 { name: 'Júpiter', orbitalPeriod: 11.862615 },
 { name: 'Saturno', orbitalPeriod: 29.447498 },
 { name: 'Urano', orbitalPeriod: 84.016846 },
 { name: 'Neptuno', orbitalPeriod: 164.79132 },
 { name: 'Plutón', orbitalPeriod: 247.92065 },
 { name: 'Luna', orbitalPeriod: 0.0748 }, // Aproximadamente 27.3 días de período orbital
];
// Función auxiliar para calcular la edad en años terrestres
const calculateEarthAge = (birthDate) => {
 const currentDate = new Date();
 const ageInMillis = currentDate.getTime() - birthDate.getTime();
 const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Aproximadamente 365.25 días en un año para tener en cuenta los años bisiestos

 const ageInYears = ageInMillis / millisecondsPerYear;
 return ageInYears;
};
export const getAgeOnPlanet = (planetName, birthDate) => {
 const planet = planetData.find((planet) => planet.name === planetName);
 if (!planet) {
  throw new Error(`No se encontró el planeta "${planetName}".`);
 }

 const earthAge = calculateEarthAge(birthDate);
 const ageOnPlanet = earthAge / planet.orbitalPeriod;

 return ageOnPlanet.toFixed(2); // Redondea el resultado a 2 decimales
};
// Para calcular la edad en otros planetas, es necesario conocer el tiempo de traslación de cada planeta alrededor del Sol. Estos datos están disponibles y se basan en observaciones astronómicas y mediciones precisas.

// La fórmula general para calcular la edad en un planeta es:
// Edad en el planeta = Edad en años terrestres / Tiempo de traslación del planeta