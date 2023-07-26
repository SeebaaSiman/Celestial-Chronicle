import { useState, useEffect } from "react";

export const useNavBarLineal = () => {
 const [isopen, setIsOpen] = useState(false);

 const toggleOpen = () => setIsOpen(!isopen);

 const handleLinkClick = () => {
  if (window.innerWidth < 768 && isopen) {
   setIsOpen(false);
  }
 };
 useEffect(() => {
  function handleResize() {
   if (window.innerWidth > 768) {
    setIsOpen(false);
   }
  }
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
 }, []);

 return { isopen, handleLinkClick, toggleOpen }
}
