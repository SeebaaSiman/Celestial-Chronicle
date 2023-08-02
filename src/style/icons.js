import { UilEstate, UilHourglass, UilTelescope, UilArrowLeft, UilArrowRight, UilMultiply, UilParagraph, UilPlus } from "@iconscout/react-unicons";
import { css, styled } from "styled-components";

// Styles
const styleNavbar = css`
color: white;
filter:  drop-shadow(1px 1px 1px #3333);
  margin-right: 0.5rem;
  height: 100%;
  `;
const styleFullScreen = css`
color:#b3ff00;
`
// const hover = css`
// transform: scale(1.2);
// filter: drop-shadow(0px 0px 0px ${(props) => props.theme.bg});
// color: ${(props) => props.theme.textColor};
// `
// Size
export const sizeIconFullScreen = `3rem`;
export const iconSizeBooks = `8rem`

//* Navbar
export const IconHome = styled(UilEstate)`
 ${styleNavbar}
`;
export const IconBirthdate = styled(UilHourglass)`
 ${styleNavbar}
`;
export const IconPlanets = styled(UilTelescope)`
 ${styleNavbar}
`;
//* FullScreenContent
export const IconArrowLeft = styled(UilArrowLeft)`
 ${styleFullScreen}
 /* ${sizeIconFullScreen} */
`;
export const IconArrowRight = styled(UilArrowRight)`
 ${styleFullScreen}
`;
export const IconClose = styled(UilMultiply)`
 ${styleFullScreen}
`;
//* AccordionCard
export const IconParagraph = styled(UilParagraph)`
`;
export const IconPlus = styled(UilPlus)`
`;


// export const IconBooks = styled(UilBooks)`
//     color: ${(props) => props.theme.textColor};
// `
