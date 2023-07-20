import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import styled from "styled-components";
import { showIn } from "../style/StylesGlobal";

export const AccordionCard = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  return (
    <CardWrapper>
      <CardHeader onClick={toggleOpen}>
        <CardTitle open={open}>{title}</CardTitle>
        <CardArrow open={open}>
          {open ? <Unicons.UilParagraph /> : <Unicons.UilPlus />}
        </CardArrow>
      </CardHeader>
      <CardContent open={open}>{children}</CardContent>
    </CardWrapper>
  );
};
const CardWrapper = styled.div`
  margin: 2rem;
  animation: ${showIn} 1s ease-in-out;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  opacity: ${({ open }) => (open ? "0.5" : "1")};
  color: ${({ open }) => (open ? "#000" : "#222222")};
`;

const CardArrow = styled.span``;

const CardContent = styled.div`
  margin-top: 0.5rem;
  overflow: hidden;
  width: 100%;
  max-height: ${({ open }) => (open ? "auto" : "0")};
  transform: ${({ open }) =>
    open ? "translate(0%, 0%)" : "translate(0%, 20%)"};
  transition: all 1s ease-in-out;
  animation-fill-mode: forwards;
  h3 {
    font-weight: normal;
  }
`;
