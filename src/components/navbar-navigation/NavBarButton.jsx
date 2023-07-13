import { useEffect, useState } from "react";
import { CloseTrigger, MenuTrigger } from "./navBarButtonStyle";

export const NavBarButton = ({ toggleopen, isopen }) => {
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isopen && isFirstOpen) {
      setIsLoaded(true);
      setIsFirstOpen(false);
    }
  }, [isopen, isFirstOpen]);

  return (
    <>
      <MenuTrigger onClick={toggleopen} isopen={isopen}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </MenuTrigger>

      {isLoaded && (
        <CloseTrigger onClick={toggleopen} isopen={isopen} isloaded={isLoaded}>
          <div className="left"></div>
          <div className="right"></div>
        </CloseTrigger>
      )}
    </>
  );
};
