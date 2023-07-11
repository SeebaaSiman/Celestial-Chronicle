import { useNavigate } from "react-router-dom";
import { CardContainer, Title } from "./cardStyle";
import { dataImg } from "../../data/dataImg";

export const CardPlanet = ({ planet, result }) => {
  // Buscar el objeto correspondiente en el array utilizando el string recibido del padre
  const planetObj = dataImg?.find((obj) => Object.keys(obj)[0] === planet);
  // Obtener la URL de la imagen del objeto encontrado
  const imgsrc = planetObj ? Object.values(planetObj)[0] : null;
  const navigate = useNavigate();

  const onCardFullScreen = () => {
    navigate(`/Planets/${planet}`);
  };
  return (
    <CardContainer imgsrc={imgsrc} onClick={onCardFullScreen}>
      <p>
        Edad en {planet}: {result}
      </p>
      <Title>{planet}</Title>
    </CardContainer>
  );
};
