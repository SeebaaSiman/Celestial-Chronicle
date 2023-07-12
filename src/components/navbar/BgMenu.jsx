import { useEffect, useState } from "react";
import { BgMenuContainer, BgMenuStripe } from "./bgMenuStyle";

export const BgMenu = ({ isOpen }) => {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen && isFirstOpen) {
      setIsLoaded(true);
      setIsFirstOpen(false);
    }
  }, [isOpen, isFirstOpen]);
  return (
    <>
      {isLoaded && (
        <BgMenuContainer isOpen={isOpen} isLoaded={isLoaded}>
          <BgMenuStripe className="top" />
          <BgMenuStripe className="middle" />
          <BgMenuStripe className="bottom" />
        </BgMenuContainer>
      )}
    </>
  );
};
