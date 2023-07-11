import styled, { keyframes } from "styled-components";
import { BoxStyle, device } from "@/style/StylesGlobal";
// import { NavLink } from "react-router-dom";

const ShowInNavBar = keyframes`
  0% {
    opacity: 0;
    transform: translate3D(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3D(0, 0, 0);
  }
`

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 5rem;
  box-shadow: ${BoxStyle.boxShadow};
border-radius: 0 0 10px 10px;
z-index: 200;
  background-color: black;
  display: inline-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${ShowInNavBar} 1s ease-in-out;
`;

export const Logo = styled.img`
  height: 4.6rem;
  filter: drop-shadow(3px 3px 3px #222);
`;
const show = keyframes`
0% {
  display: inline;
    opacity: 0;
transform:scale(0.2)
}
100% {
  opacity: 1;
  transform:scale(1)
  }
`;
export const LinksContainer = styled.div`
  //!First mobile, con el menú
  position: absolute;
  top: -700px;
  left: -2000px;
  /* margin-left: auto;
  margin-right: auto; */
  text-align: center;
  display:flex;
  justify-content: center;
  align-items: center;
  .link {
    //
    filter: drop-shadow(3px 3px 3px #222);
    text-decoration: none;
    flex: 1;
    color: #222;
    font-size: 1.5rem;
    display: block;
    z-index: 10;
  }

  & .active {
    color: #e2dfdd;
  }

  &.open-menu {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    z-index: 10;
    .link {
      font-size: 2.5rem;
      color: #000;
      margin-top: 3rem;
      &:hover{
        color:white;
      }
    }
  }

  //! Desktop
  @media ${device.md} {
    position: initial;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    width: 100%;
    height: 100%;
    .text {
      display: none;
      transform: translateX(-20px);
    }
    .link{

      &:hover .text{
        position:absolute;
transform:translateX(7px);        display: inline;
        color:#fff;
        text-decoration: underline;
        animation: ${show} 1s ease-in-out;
      }
    }
  }
  `;

//! mobile
export const Menu = styled.div`
  @media ${device.md} {
    display: none;
  }
`;

const showBg = keyframes`
 0% {
     background-position: 0% 50%;
 }
 50% {
   background-position: 100% 50%;
   }
 100% {
   background-position: 0% 50%;
   }
`

export const BgMenu = styled.div`
  /* background-color: #e2dfdd; */
  background: linear-gradient(45deg,#222, #333,#444,#555);
  background-size: 200% 200%;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;
  box-shadow: ${BoxStyle.boxShadow};
  animation: ${showBg} 12s ease-in-out infinite;

  &.open-menu {
    border-radius: 0 0 20% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
`;
