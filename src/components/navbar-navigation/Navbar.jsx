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
import { useLanguage } from "../../language/LanguageContext";
export const Navbar = () => {
  const styleIcon = {
    color: "white",
    filter: " drop-shadow(1px 1px 1px #3333)",
    marginRight: "0.5rem",
    height: "100%",
  };
  const { texts } = useLanguage();
  const link_data = [
    {
      to: "/",
      icon: <Unicons.UilEstate style={styleIcon} />,
      text: `${texts.home}`,
    },
    {
      to: "/Birthdate",
      icon: <Unicons.UilHourglass style={styleIcon} />,
      text: `${texts.birthdate}`,
    },
    {
      to: "/Planets",
      icon: <Unicons.UilTelescope style={styleIcon} />,
      text: `${texts.planets}`,
    },
  ];
  const { isopen, handleLinkClick, toggleOpen } = useNavBarLineal();

  return (
    <NavBarContainer>
      <img src={logo} alt="Logo" style={{ height: "4.6rem" }} />

      <LinksContainer className={`${isopen ? "open-menu" : ""} `}>
        {link_data.map((l, index) => (
          <Link onClick={handleLinkClick} to={l.to} key={index}>
            {l.icon}
            <Text>{l.text}</Text>
          </Link>
        ))}
      </LinksContainer>

      <Menu>
        <NavBarButton isopen={isopen} toggleopen={toggleOpen} />
        <BgMenu isopen={isopen} />
      </Menu>
    </NavBarContainer>
  );
};
