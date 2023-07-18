import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { dataImg } from "../data/dataImg";

export const useCardPlanet = (planet) => {
 // Buscar el objeto correspondiente en el array utilizando el string recibido del padre
 const planetObj = useMemo(
  () => dataImg?.find((obj) => Object.keys(obj)[0] === planet),
  [planet]
 );
 // Obtener la URL de la imagen del objeto encontrado
 const imgsrc = useMemo(
  () => (planetObj ? Object.values(planetObj)[0] : null),
  [planetObj]
 );

 const navigate = useNavigate();
 const [showHover, setShowHover] = useState(false);
 const toggleshow = () => setShowHover(!showHover);
 const onCardFullScreen = () => {
  navigate(`/Planets/${planet}`);
 };



 return { onCardFullScreen, imgsrc, toggleshow }
}
