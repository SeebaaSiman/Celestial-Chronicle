import { useEffect, useState } from "react";
import { BgMenuContainer, BgMenuStripe } from "./bgMenuStyle";

export const BgMenu = ({ isopen }) => {
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
      {isLoaded && (
        <BgMenuContainer isopen={isopen} isloaded={isLoaded}>
          <BgMenuStripe className="top" />
          <BgMenuStripe className="middle" />
          <BgMenuStripe className="bottom" />
        </BgMenuContainer>
      )}
    </>
  );
};
