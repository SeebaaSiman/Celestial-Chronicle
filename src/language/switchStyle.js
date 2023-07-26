import styled from "styled-components";
import { device, showIn } from "../style/StylesGlobal";

export const SwitchContainer = styled.ul`
display: flex;
font-size: 1.1rem;
gap: 0.8rem;
/* height: 2rem; */
list-style: none;
position:absolute;
right: 0%;
top:0%;
z-index: 800;
margin:5px;

    @media ${device.sm}{
font-size: 1.3rem;
    }
    @media ${device.lg}{
font-size: 1.5rem;
    }

  li {
    display: flex;
  justify-content: center;
  align-items: center;
    position: relative;
    font-family: 'Bebas Neue',sans-serif;
    gap:5px;
    color: #fff;
    transition: color 0.8s;
    animation: ${showIn} 0.5s ease-in-out forwards;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #332a40;
      border-radius: 4px;
      scale: 0.1;
      transform-origin: left;
      transition: scale 0.8s;
    }
    &:hover {
      color: #332a40;
    }
    &:hover::before {
      scale: 1;
    }
  }
    img{
  height: 1.1rem;
    @media ${device.sm}{
height: 1.3rem;
    }
    @media ${device.lg}{
height: 1.5rem;
    }}


`

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:5px;
  border: none;
  background-color: transparent;

    font-family: 'Bebas Neue',sans-serif;
    color: #000;
    filter:drop-shadow(1px 1px 1px #e2dfdd);
    transition: color 0.8s;
    animation: ${showIn} 0.5s ease-in-out forwards;
    font-size: 1.1rem;
    @media ${device.sm}{
font-size: 1.3rem;
    }
    @media ${device.lg}{
font-size: 1.5rem;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #000;
      border-radius: 4px;
      scale: 0.1;
      transform-origin: left;
      transition: scale 0.8s;
    }
    &:hover {
      color: #0005;
    }
    &:hover::before {
      scale: 1;
    }


    `