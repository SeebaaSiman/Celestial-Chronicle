import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
 const [debouncedValue, setDebouncedValue] = useState(value);

 useEffect(() => {
  const timeoutId = setTimeout(() => {
   setDebouncedValue(value);
  }, delay);

  return () => {
   clearTimeout(timeoutId);
  };
 }, [value, delay]);

 return debouncedValue;
};



//* Uso

//* 1. Añadir un estado useState
// const [debouncedSubmit, setDebouncedSubmit] = useState(false);

//* 2. Envuelve tu función onSubmit con useDebounce para aplicar el retraso deseado. Pasa onSubmit como primer argumento y el tiempo de retraso en milisegundos como segundo argumento.
// const debouncedOnSubmit = useDebounce(onSubmit, 500);

//*3.Actualiza el onSubmit original para cambiar el estado debouncedSubmit a true. Esto activará el retraso y desencadenará la llamada a la función debounced onSubmit después de que pase el tiempo de retraso.
// const onSubmit = () => {
//  // ... tu lógica actual de guardar en el localStorage
//  setDebouncedSubmit(true);
// };

//*4.Añade un efecto useEffect que controle el cambio de debouncedSubmit. Este efecto llamará a debouncedOnSubmit cada vez que debouncedSubmit cambie.
// useEffect(() => {
//  if (debouncedSubmit) {
//    debouncedOnSubmit();
//    setDebouncedSubmit(false);
//  }
// }, [debouncedSubmit, debouncedOnSubmit]);

// Con estos cambios, cuando se active onSubmit, se establecerá debouncedSubmit en true, lo que desencadenará el retraso a través de useDebounce. Después de que pase el tiempo de retraso (en este caso, 500 ms), se llamará a la función debounced onSubmit para guardar los valores en el localStorage.