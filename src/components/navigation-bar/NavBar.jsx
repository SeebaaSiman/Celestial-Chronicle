import { NavLink } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import { MenuButton } from "./MenuButton";
import logo from "@/assets/logo.gif";
import {
  BgMenu,
  LinksContainer,
  Logo,
  Menu,
  NavBarContainer,
} from "./NavBarStyle";
import { useNavBar } from "./useNavBar";
// import useDeviceType from "../../hook/useDeviceType";

export const NavBar = () => {
  const { clicked, handleLinkClick, toggleClicked } = useNavBar();
  const styleIcon = {
    color:"white",
    filter: " drop-shadow(1px 1px 1px #3333)",
    marginRight: "0.5rem",
    height: "100%",
  };
  // const iconSize = "2rem";

  // const deviceType = useDeviceType();
  return (
    <NavBarContainer>
      <Logo src={logo} alt="Logo" />

      <LinksContainer className={`${clicked ? "open-menu" : ""} `}>
        <NavLink onClick={handleLinkClick} className="link" to="/">
          <Unicons.UilEstate  style={styleIcon} />
          <span className="text">Home</span>
        </NavLink>

        <NavLink onClick={handleLinkClick} className="link" to="/Home">
          <Unicons.UilHourglass  style={styleIcon} />
          <span className="text">put your age</span>
        </NavLink>

        <NavLink onClick={handleLinkClick} className="link" to="/Planets">
          <Unicons.UilTelescope  style={styleIcon} />
          <span className="text">Planets </span>
        </NavLink>

        {/* <NavLink onClick={handleLinkClick} className="link" to="/History">
          <Unicons.UilChartBar style={styleIcon} />
          <span className="text">History</span>
        </NavLink> */}
      </LinksContainer>

      <Menu>
        <MenuButton clicked={clicked} toggleClicked={toggleClicked} />
        <BgMenu className={`${clicked ? "open-menu" : ""} `}></BgMenu>
      </Menu>
    </NavBarContainer>
  );
};
