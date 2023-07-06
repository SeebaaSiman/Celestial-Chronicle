import { useState } from "react";

export const useFullScreen = (data) => {
 const [isFullScreen, setIsFullScreen] = useState(false);
 const [fullScreenIndex, setFullScreenIndex] = useState(0);

 const handleImageClick = (index) => {
  setIsFullScreen(true);
  setFullScreenIndex(index);
 };

 const handlePrevClick = () => {
  if (fullScreenIndex > 0) {
   setFullScreenIndex(fullScreenIndex - 1);
  }
  console.log(fullScreenIndex)
 };

 const handleNextClick = () => {
  if (fullScreenIndex < data.length - 1) {
   setFullScreenIndex((nextIndex) => nextIndex + 1);
  }
  console.log(fullScreenIndex)
 };

 const handleExitFullScreen = () => {
  setIsFullScreen(false);
 };
 return { isFullScreen, fullScreenIndex, handleImageClick, handlePrevClick, handleNextClick, handleExitFullScreen }
}
