import { useRef, useState } from "react";

export const useSlider = (data) => {
 const [currentIndex, setCurrentIndex] = useState(0);

 const cmSliderWrapper = useRef();
 const cmSlider = useRef();
 const imageRefs = useRef([]);

 const getWindowWidth = () =>
  window.innerWidth || document.documentElement.clientWidth;

 const getWidthAdjustment = () =>
  (getWindowWidth() - cmSliderWrapper.current.offsetWidth) / 2;

 //es un controlador de eventos que se ejecuta cuando ocurre el evento mousemove en el elemento contenedor. Recibe un evento e que contiene información sobre la posición del cursor.
 const handleMouseMove = (e) => {
  //se realiza el cálculo del porcentaje de desplazamiento basado en la posición del cursor en relación con el ancho del contenedor (cmSliderWrapper)
  //El porcentaje se calcula dividiendo la diferencia entre la posición del cursor (e.clientX) y el ajuste de ancho (getWidthAdjustment()) por el ancho total del contenedor (cmSliderWrapper.current.offsetWidth), y luego se multiplica por 100 para obtener un valor en porcentaje.
  let percentage =
   ((e.clientX - getWidthAdjustment()) /
    cmSliderWrapper.current.offsetWidth) *
   100;
  //El valor del porcentaje se limita entre 0 y 100 utilizando operadores ternarios para asegurarse de que esté dentro de ese rango.
  percentage = percentage > 100 ? 100 : percentage < 0 ? 0 : percentage;

  // Cálculo del índice actual
  const totalImages = data.length;
  const imageIndex = Math.round((percentage / 100) * (totalImages - 1));

  setCurrentIndex(imageIndex);


  let animateDuration = 1800; // cuanto más alto el valor más suave y lenta las animaciones

  //se utiliza la función animate en el ref cmSlider.current para animar la transformación del elemento del carousel. Se utiliza una animación de desplazamiento horizontal (translateX) aplicando el porcentaje de desplazamiento calculado.
  cmSlider.current.animate(
   {
    transform: `translate(${-percentage}%, -50%)`,
   },
   {
    duration: animateDuration,
    fill: "forwards",
   }
  );
  //Después, se itera sobre los refs de las imágenes (imageRefs.current) y se aplica una animación a cada una de ellas utilizando la función animate. Se anima la propiedad objectPosition para cambiar la posición del objeto de la imagen y crear el efecto de desplazamiento de la imagen dentro del carousel.
  imageRefs.current.forEach((imageRef) => {
   const image = imageRef.current;

   if (image) {
    image.animate(
     {
      objectPosition: `${percentage}% center`,
     },
     {
      duration: animateDuration,
      fill: "forwards",
     }
    );
   }
  });
 };

 return {
  cmSliderWrapper, cmSlider, imageRefs, handleMouseMove, currentIndex
 };
};
