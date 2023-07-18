// Función para calcular el tiempo restante para el próximo cumpleaños...

import { calculateNextBirthdayOnPlanet } from "./calculateNextBirthdayOnPlanet";


export function calculateTimeRemainingForNextBirthday(dateOfBirth, planetName) {
 const nextBirthdayOnPlanet = calculateNextBirthdayOnPlanet(dateOfBirth, planetName);
 const currentDate = new Date();
 const timeRemainingInMilliseconds = nextBirthdayOnPlanet - currentDate;

 const timeRemainingInSeconds = Math.floor(timeRemainingInMilliseconds / 1000);
 const seconds = timeRemainingInSeconds % 60;

 const timeRemainingInMinutes = Math.floor(timeRemainingInSeconds / 60);
 const minutes = timeRemainingInMinutes % 60;

 const timeRemainingInHours = Math.floor(timeRemainingInMinutes / 60);
 const hours = timeRemainingInHours % 24;

 const timeRemainingInDays = Math.floor(timeRemainingInHours / 24);
 const days = timeRemainingInDays % 30; // Using 30 days as an approximate value for a month

 const timeRemainingInMonths = Math.floor(timeRemainingInDays / 30);
 const months = timeRemainingInMonths % 12;

 const timeRemainingInYears = Math.floor(timeRemainingInMonths / 12);
 const years = timeRemainingInYears;

 return { years, months, days, hours, minutes, seconds };
}