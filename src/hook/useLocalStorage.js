import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
 const [value, setValue] = useState(() => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : initialValue;
 });

 const setLocalStorageValue = (newValue) => {
  setValue(newValue);
  localStorage.setItem(key, JSON.stringify(newValue));
 };

 const removeLocalStorageValue = () => {
  setValue(null);
  localStorage.removeItem(key);
 };

 return [value, setLocalStorageValue, removeLocalStorageValue];
};

//const storedDate = localStorage.getItem('fechaNacimiento');

// con el método getItem(key) obtengo los datos almacenados, los almacena en string, así que si quiero usar números o arrays. Puedes utilizar funciones como parseInt o JSON.parse