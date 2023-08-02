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
import { IconBirthdate, IconHome, IconPlanets } from "../../style/icons";

export const Navbar = () => {
  const { texts } = useLanguage();
  const link_data = [
    {
      to: "/",
      icon: <IconHome />,
      text: `${texts.home}`,
    },
    {
      to: "/Birthdate",
      icon: <IconBirthdate />,
      text: `${texts.birthdate}`,
    },
    {
      to: "/Planets",
      icon: <IconPlanets />,
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
