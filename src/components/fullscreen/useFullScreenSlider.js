import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataImg } from "@/data/dataImg";

export const useFullScreenSlider = () => {
 const navigate = useNavigate();
 const { id } = useParams();
 const [currentImage, setCurrentImage] = useState(null);
 const [currentIndex, setCurrentIndex] = useState(0);


 useEffect(() => {
  const image = dataImg.find((item) => item.hasOwnProperty(id));
  setCurrentImage(image);
  setCurrentIndex(dataImg.indexOf(image));
 }, []);

 const goToNextImage = () => {
  const nextIndex = (currentIndex + 1) % dataImg.length;
  const nextImage = dataImg[nextIndex];
  setCurrentImage(nextImage);
  setCurrentIndex(nextIndex);
  const nextPlanet = Object.keys(nextImage)[0];
  navigate(`/Planets/${nextPlanet}`);
 };

 const goToPrevImage = () => {
  const prevIndex = (currentIndex - 1 + dataImg.length) % dataImg.length;
  const prevImage = dataImg[prevIndex];
  setCurrentImage(prevImage);
  setCurrentIndex(prevIndex);
  const prevPlanet = Object.keys(prevImage)[0];
  navigate(`/Planets/${prevPlanet}`);
 };
 const goExitFullScreen = () => {
  navigate("/Planets")
 };
 const isFirstImage = currentIndex === 0;
 const isLastImage = currentIndex === dataImg.length - 1;





 return { isFirstImage, isLastImage, currentImage, goToNextImage, goToPrevImage, goExitFullScreen };
};
