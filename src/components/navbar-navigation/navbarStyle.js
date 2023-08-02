import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { ShowInNavBar, linksIn } from "./animationsNavBar";
import { BoxStyle, device } from "../../style/StylesGlobal";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 5rem;
  border-radius: 0 0 10px 10px;
  z-index: 200;
  background-color: #000000;
  display: inline-flex;
  display: flex;
  box-shadow: ${BoxStyle.boxShadow};
  justify-content: space-between;
  align-items: center;
animation: ${ShowInNavBar} 1s ease-in-out;
`;
export const Text = styled.span`
  @media ${device.md} {
    display: none;
    transform: translateX(-20px);
  }
`;
export const Link = styled(NavLink)`
  filter: drop-shadow(3px 3px 3px #222);
  text-decoration: none;
  flex: 1;
  color: #222;
  font-size: 1.5rem;
  display: block;
  z-index: 10;
  &.active {
    color: #e2dfdd;
  }
  @media ${device.md} {
    &:hover ${Text} {
      position: absolute;
      transform: translateX(7px);
      display: inline;
      color: #fff;
      text-decoration: underline;
    }
  }
`;

export const LinksContainer = styled.div`
  //!First mobile, con el menú
  position: absolute;
  top: -700px;
  left: -2000px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &.open-menu {
    top: 20%;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
    ${Link} {
      font-size: 2.5rem;
      color: #ffff;
      margin-top: 3rem;
      animation-delay: 1s;
      animation: ${linksIn} 1s ease-in-out;

      &:hover {
        color: #b3ff00;
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
  }
`;
//! mobile
export const Menu = styled.div`
  @media ${device.md} {
    display: none;
  }
`;
