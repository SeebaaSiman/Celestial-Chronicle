import { useEffect, useState } from "react";
import { CloseTrigger, MenuTrigger } from "./navBarButtonStyle";

export const NavBarButton = ({ toggleOpen, isOpen }) => {
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
      <MenuTrigger onClick={toggleOpen} isOpen={isOpen}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </MenuTrigger>

      {isLoaded && (
        <CloseTrigger onClick={toggleOpen} isOpen={isOpen} isLoaded={isLoaded}>
          <div className="left"></div>
          <div className="right"></div>
        </CloseTrigger>
      )}
    </>
  );
};
