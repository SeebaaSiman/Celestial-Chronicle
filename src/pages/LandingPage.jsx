import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { ButtonStyle, Content, NavLinks } from "../style/StylesGlobal";
const LandingPageContainer = styled.div`
  margin: 1rem;
`;
export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <h1>Celestial Chronicle</h1>
      <Content>
        Celestial Chronicle es una página web que te permite calcular tu edad en
        diferentes planetas del sistema solar. La idea principal es brindarte
        información divertida y educativa sobre cómo sería tu edad en otros
        mundos.
      </Content>
      <Content>
        En ésta página principal, encontrarás una breve introducción que explica
        el concepto de la página y cómo funciona. A continuación, tendrás la
        opción de ingresar tu fecha de nacimiento, incluyendo el día, mes y año.
      </Content>
      <Content>
        Una vez que ingreses tu fecha de nacimiento, la página calculará
        automáticamente tu edad en la Tierra y te mostrará la edad
        correspondiente en cada uno de los planetas del sistema solar,
        incluyendo la Luna. Esto te dará una idea de cuántos años tendrías si
        vivieras en Marte, Júpiter, Saturno y otros cuerpos celestes.
      </Content>
      <Content>
        Además de la calculadora de edades, la página también proporcionará
        información adicional sobre cada planeta, como su tiempo de traslación
        alrededor del Sol, su tamaño relativo y otras características
        interesantes. También podrás explorar imágenes y datos curiosos
        relacionados con cada uno de los planetas.
      </Content>
      <Content>
        Celestial Chronicle es una forma divertida y educativa de aprender sobre
        el sistema solar y entender cómo nuestro concepto de tiempo y edad se
        relaciona con los diferentes cuerpos celestes. ¡Esperamos que disfrutes
        explorando el cosmos desde la comodidad de tu pantalla!
      </Content>
      <NavLinks to="/Home">
        <ButtonStyle>GET START</ButtonStyle>
      </NavLinks>
    </LandingPageContainer>
  );
};
