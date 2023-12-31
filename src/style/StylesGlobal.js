import { createGlobalStyle, keyframes, styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const device = {
  sm: `(min-width: 480px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1200px)`,
};
export const BoxStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,' +
    'rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,' +
    'rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,' +
    'rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,' +
    'rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
};
export const showIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0.2);
  transform: translateX(-20px);
}
100% {
  opacity: 1;
  transform: scale(1);
}`;
export const NavLinks = styled(NavLink)`
text-decoration: none;
`

export const ButtonStyle = styled.div`
  height: 45px;
  width: 250px;
  border: 2px solid  rgba(255, 255, 255, 1);
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.625rem 1.5rem;
  text-align: center;
margin-left: auto;
margin-right: auto;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(0, 0, 0, 1);
  outline: none;
  transition: all .2s ease-in-out;
  box-shadow: ${BoxStyle.boxShadow};
  animation: ${showIn} 1s ease-in-out;

  &:hover {
  color: rgba(255, 255, 255, 1);
  background-color:  rgba(0, 0, 0, 1);
  transform: scale(0.9);
}
`;
export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
  margin: 2rem;
animation: ${showIn} 1s ease-in-out;
p,h3{
  font-size: 1rem;
  font-weight: normal;
  @media ${device.md}{
    font-size: 1.5rem;

  }
}

`;
export const PageContainer = styled.div`
 min-height: 100vh;
  margin: 1rem;`


// Define tus estilos de tema aquí
const darkTheme = {
  backgroundColor: '#1a1a1a',
  textColor: '#ffffff',
};
const lightTheme = {
  backgroundColor: '#e2dfdd',
  textColor: '#1a1a1a',
};
export const StylesGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Serif';
  }
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none; /* evita que se seleccione el texto */

}
body {
  overflow-x: hidden;
}
html{
    background-color: ${(props) =>
    props.theme === 'dark' ? darkTheme.backgroundColor : lightTheme.backgroundColor};
    color: ${(props) =>
    props.theme === 'dark' ? darkTheme.textColor : lightTheme.textColor};
}
::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`
//  #b3ff00
