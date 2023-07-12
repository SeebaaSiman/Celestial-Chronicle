import { useState, useEffect } from "react";

export const useNavBarLineal = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleOpen = () => setIsOpen(!isOpen);

 const handleLinkClick = () => {
  if (window.innerWidth < 768 && isOpen) {
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

 return { isOpen, handleLinkClick, toggleOpen }
}
