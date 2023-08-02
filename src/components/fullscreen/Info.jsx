import { useState } from "react";
import { useFetch } from "@/hook/useFetch";
import { ModalFullScreen } from "./ModalFullScreen";
import { InfoContainer, InfoText } from "./infoFullScreenStyle";
import { LoaderAtronaut } from "../Loader";
import { useLanguage } from "../../language/LanguageContext";

export const Info = (planet) => {
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => setIsLoading(!isLoading);
  const { texts } = useLanguage();
  const url = `https://api.le-systeme-solaire.net/rest/bodies/${planet.planet}`;
  const { data, error, loading } = useFetch(url);
  if (loading) {
    return <LoaderAtronaut />;
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
      {/* <h1>{data?.englishName}</h1> */}
      <InfoText>
        {data?.discoveredBy || data?.discoveryDate ? (
          <p>
            {texts.discovered}
            {data?.discoveredBy},{texts.date}
            {data?.discoveryDate}
          </p>
        ) : null}
        <h5>{texts.distance}(km)</h5>
        <p>
          Perihelio: {data?.perihelion?.toLocaleString()} ({texts.perihelio})
        </p>
        <p>
          Afelio: {data?.aphelion?.toLocaleString()} ({texts.afelio})
        </p>
        <p>
          {texts.ecuadorian}
          {data?.equaRadius?.toLocaleString()} km
        </p>
        <p>
          {texts.mass}
          {data?.mass?.massValue} x 10
          <sup>{data?.mass?.massExponent}</sup> km<sup>3</sup>
        </p>
        <p>
          {texts.temperature}
          {data?.avgTemp}K |{kelvinToCelsius(data?.avgTemp)?.toFixed(2)}°C
        </p>
        <p>
          {texts.gravity}
          {data?.gravity}
        </p>
        <p>
          {texts.volume}
          {data?.vol?.volValue} x 10
          <sup>{data?.vol?.volExponent}</sup>km<sup>3</sup>
        </p>
        <p>
          {texts.sideral}
          {data?.sideralOrbit} ({texts.sideralInfo})
        </p>
        <p>
          {texts.rotation}
          {data?.sideralRotation} ({texts.rotationInfo})
        </p>
      </InfoText>
      {data?.moons?.length === 0 || data?.moons === null ? null : (
        <h4 onClick={toggle}>
          {" "}
          - {texts.moons} ({data?.moons?.length}) -{" "}
        </h4>
      )}

      <ModalFullScreen isLoading={isLoading} toggle={toggle}>
        {data?.moons?.map((item, index) => (
          <span key={index}> {item.moon} | </span>
        ))}
      </ModalFullScreen>
    </InfoContainer>
  );
};
