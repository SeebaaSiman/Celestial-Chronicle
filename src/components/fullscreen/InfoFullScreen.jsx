import { useFetch } from "../../hook/useFetch";
import { LoaderaAtronaut } from "../Loader/LoaderaAtronaut";
import { useState } from "react";
import { ModalFullScreen } from "./ModalFullScreen";
import { InfoContainer, InfoText } from "./infoFullScreenStyle";

export const InfoFullScreen = (planet) => {
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => setIsLoading(!isLoading);
  const url = `https://api.le-systeme-solaire.net/rest/bodies/${planet.planet}`;
  const { data, error, loading } = useFetch(url);
  if (loading) {
    return <LoaderaAtronaut />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  function kelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return celsius;
  }
  return (
    <InfoContainer>
      <h1>{data?.englishName}</h1>
      <InfoText>
        {data?.discoveredBy || data?.discoveryDate ? (
          <>
            <h5>Discovered</h5>
            <p>By: {data?.discoveredBy}</p>
            <p>Date: {data?.discoveryDate}</p>
          </>
        ) : null}
        <h5>Distance of sun (km)</h5>
        <p>
          Perihelio: {data?.perihelion?.toLocaleString()} (Punto más cercano al
          Sol en la órbita heliocéntrica de un cuerpo celeste)
        </p>
        <p>
          Afelio: {data?.aphelion?.toLocaleString()} (Punto más alejado de la
          órbita de un planeta alrededor del Sol. Es el opuesto al perihelio )
        </p>
        <p>Radio ecuatorial {data?.equaRadius?.toLocaleString()} km</p>
        <p>
          Masa del objeto: {data?.mass?.massValue} x 10
          <sup>{data?.mass?.massExponent}</sup> km<sup>3</sup>
        </p>
        <p>
          Temperatura media {data?.avgTemp}K |
          {kelvinToCelsius(data?.avgTemp)?.toFixed(2)}°C
        </p>
        <p>gravedad {data?.gravity}</p>
        <p>
          Volumen del objeto: {data?.vol?.volValue} x 10
          <sup>{data?.vol?.volExponent}</sup> km<sup>3</sup>
        </p>
        <p>
          Período sideral en días terrestres {data?.sideralOrbit}(tiempo que
          toma un objeto para hacer una órbita completa)
        </p>
        <p>
          Rotación sideral en horas {data?.sideralRotation} (tiempo requerido
          para que la estrella complete una revolución sobre sí misma)
        </p>
      </InfoText>
      {data?.moons?.length === 0 || data?.moons === null ? null : (
        <h4 onClick={toggle}> - Moons({data?.moons?.length}) - </h4>
      )}

      <ModalFullScreen isLoading={isLoading} toggle={toggle}>
        {data?.moons?.map((item, index) => (
          <span key={index}> {item.moon} | </span>
        ))}
      </ModalFullScreen>
    </InfoContainer>
  );
};
