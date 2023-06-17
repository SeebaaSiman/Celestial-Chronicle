import { useEffect, useState } from "react";

export const useNavBar = () => {
 const [clicked, setClicked] = useState(false);

 const toggleClicked = () => setClicked(!clicked);

 const handleLinkClick = () => {
  if (window.innerWidth < 768 && clicked) {
   setClicked(false);
  }
 };
 useEffect(() => {
  function handleResize() {
   if (window.innerWidth > 768) {
    setClicked(false);
   }
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 return { clicked, handleLinkClick, toggleClicked }
}