import { keyframes, styled } from "styled-components";
import { device } from "../../style/StylesGlobal";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  /* width: 100%; */
  min-width: 280px;
  flex-direction: column;
  /* gap: 35px; */
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  border-radius: 8px;
  @media ${device.sm}{
    width:80%;
  }
  @media ${device.lg}{
    width:50%;
  }
`;
export const InputBox = styled.div`
  margin-bottom: 2rem;
  position: relative;
  width: 250px;
  input {
    width: 100%;
    padding: 10px;
    outline: none;
    border: none;
    color: #000;
    font-size: 1em;
    background: transparent;
    border-left: 2px solid #000;
    border-bottom: 2px solid #000;
    transition: 0.1s;
    border-bottom-left-radius: 8px;
    &:valid ~ span,
    &:focus ~ span
    {
      transform: translateX(113px) translateY(-15px);
      font-size: 0.8em;
      padding: 5px 10px;
      background: #000;
      letter-spacing: 0.2em;
      color: #fff;
      border: 2px;
    }
    &:valid,
    &:focus {
      border: 2px solid #000;
      border-radius: 8px;
    }
  }
  span {
    margin-top: 5px;
    position: absolute;
    left: 0;
    transform: translateY(-4px);
    margin-left: 10px;
    padding: 10px;
    pointer-events: none;
    font-size: 12px;
    color: #000;
    text-transform: uppercase;
    transition: 0.5s;
    letter-spacing: 3px;
    border-radius: 8px;
  }
`;
export const BtnSubmit = styled.button`
position:relative;
  height: 45px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #000;
  cursor: pointer;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 1em;
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
  }
`;

const showIn = keyframes`
0%{
 transform: scale(0.3), translateY(-100);
 opacity: 0;
 }
100%{
 transform: scale(1), translateY(0);
 opacity: 1;
 }
`
export const Ul = styled.ul`
position: absolute;
width:100%;
max-height: 350px;
overflow: auto;
margin-left: auto;
margin-right: auto;
top: 100%;
left: 0;
padding: 0;
margin: 0;
border: 2px solid #000;
border-radius: 10px;
background-color: #ffffff;
z-index: 399;
list-style: none;
animation:${showIn} .5s ease-in-out;
`
export const Li = styled.li`
display: flex;
justify-content: center;
align-items:center;
 border-radius: 10px;
padding: 10px;
transform: scale(80%);
transition: all 0.3s ease-in-out;
&:hover {
  background-color: #f0f0f0;
transform: scale(110%);
  cursor: pointer;
}`