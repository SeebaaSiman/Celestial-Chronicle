import { useMemo } from "react";
import { calculateNextBirthdayOnPlanet } from "../helpers/calculateNextBirthdayOnPlanet";
import { calculateAgeOnPlanet } from "../helpers/calculateAgeOnPlanet";
import { calculateDaysToNextBirthdayOnPlanet } from "../helpers/calculateDaysToNextBirthdayOnPlanet";
import { useState } from "react";
import { useEffect } from "react";
import { calculateTimeRemainingForNextBirthday } from "../helpers/calculateTimeRemainingForNextBirthday";

export const useCountDownTimer = (planet) => {
 const storedDate = useMemo(() => localStorage.getItem("birthDate"), []);
 const age = useMemo(
  () => calculateAgeOnPlanet(storedDate, planet),
  [planet, storedDate]
 );
 const nextBirthday = useMemo(
  () => calculateNextBirthdayOnPlanet(storedDate, planet),
  [planet, storedDate]
 );

 const daysOld = useMemo(
  () => calculateDaysToNextBirthdayOnPlanet(storedDate, planet),
  [storedDate, planet]
 );

 const [timeRemaining, setTimeRemaining] = useState(
  calculateTimeRemainingForNextBirthday(storedDate, planet)
 );

 useEffect(() => {
  const intervalId = setInterval(() => {
   const newTimeRemaining = calculateTimeRemainingForNextBirthday(
    storedDate,
    planet
   );
   setTimeRemaining(newTimeRemaining);
  }, 1000); // Actualizar cada 1 segundo (1000 milisegundos)

  return () => {
   clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonta
  };
 }, [storedDate, planet]);
 return { age, nextBirthday, daysOld, ...timeRemaining }
}

