import { calculateNextBirthdayOnPlanet } from "./calculateNextBirthdayOnPlanet";

export function calculateDaysToNextBirthdayOnPlanet(dateOfBirth, planetName) {
 const nextBirthdayOnPlanet = calculateNextBirthdayOnPlanet(dateOfBirth, planetName);
 const currentDate = new Date();
 const daysToNextBirthday = (nextBirthdayOnPlanet - currentDate) / (1000 * 60 * 60 * 24);
 return Math.ceil(daysToNextBirthday);
}