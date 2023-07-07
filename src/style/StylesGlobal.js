import { createGlobalStyle, styled } from "styled-components";
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
export const ButtonStyle = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: 45px;
  width: 250px;
  border: 2px solid  rgba(255, 255, 255, 1);
  border-radius: 9999px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.625rem 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgba(0, 0, 0, 1);
  outline: none;
  transition: all .2s ease-in-out;
  box-shadow: ${BoxStyle};
  &:hover {
  color: rgba(255, 255, 255, 1);
  background-color:  rgba(0, 0, 0, 1);
}
`;
export const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
  margin: 2rem;
`;

export const StylesGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
*,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select:none;
    scroll-behavior: smooth;
    /* cursor: none; */
    /* overflow-x: hidden; */
}
body {
  overflow-x: hidden;
}
html{
    background-color: #e2dfdd;
    color: #000;
}
::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`
//  #b3ff00
