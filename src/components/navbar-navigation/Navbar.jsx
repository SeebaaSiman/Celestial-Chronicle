import * as Unicons from "@iconscout/react-unicons";
import { useNavBarLineal } from "./useNavBarLineal";
import logo from "@/assets/logo.gif";
import { BgMenu } from "./BgMenu";
import {
  Link,
  LinksContainer,
  Menu,
  NavBarContainer,
  Text,
} from "./navbarStyle";
import { NavBarButton } from "./NavBarButton";
export const Navbar = () => {
  const styleIcon = {
    color: "white",
    filter: " drop-shadow(1px 1px 1px #3333)",
    marginRight: "0.5rem",
    height: "100%",
  };
  const link_data = [
    { to: "/", icon: <Unicons.UilEstate style={styleIcon} />, text: "Home" },
    {
      to: "/Birthdate",
      icon: <Unicons.UilHourglass style={styleIcon} />,
      text: "Birthdate",
    },
    {
      to: "/Planets",
      icon: <Unicons.UilTelescope style={styleIcon} />,
      text: "Planets",
    },
  ];
  const { isOpen, handleLinkClick, toggleOpen } = useNavBarLineal();

  return (
    <NavBarContainer>
      <img src={logo} alt="Logo" style={{ height: "4.6rem" }} />

      <LinksContainer className={`${isOpen ? "open-menu" : ""} `}>
        {link_data.map((l, index) => (
          <Link onClick={handleLinkClick} to={l.to} key={index}>
            {l.icon}
            <Text>{l.text}</Text>
          </Link>
        ))}
      </LinksContainer>

      <Menu>
        <NavBarButton isopen={isOpen} toggleopen={toggleOpen} />
        <BgMenu isopen={isOpen} />
      </Menu>
    </NavBarContainer>
  );
};
