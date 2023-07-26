import { useState, createContext, useContext } from "react";
import { enTexts, esTexts } from "./text";

// Crea el contexto
const LanguageContext = createContext();

// Crea un proveedor para el contexto
export const LanguageProvider = ({ children }) => {
  const storedLanguage = localStorage.getItem("language"); // Obtener el idioma almacenado en localStorage
  const defaultLanguage =
    storedLanguage && ["en", "es"].includes(storedLanguage)
      ? storedLanguage
      : "en"; // Establecer un idioma predeterminado

  const [language, setLanguage] = useState(defaultLanguage); // Establece el idioma inicial

  // Determina los textos según el idioma seleccionado
  const texts = language === "en" ? enTexts : esTexts;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

// En cualquier componente donde quieras utilizar los textos, utiliza el hook useLanguage para acceder al contexto y los textos según el idioma seleccionado:

// import { useLanguage } from './LanguageContext';

// const MyComponent = () => {
//   const { language, setLanguage, texts } = useLanguage();

//   return (
//     <div>
//       <button onClick={() => setLanguage('en')}>English</button>
//       <button onClick={() => setLanguage('es')}>Español</button>
//       <h1>{texts.welcome}</h1>
//       <p>{texts.about}</p>
//       <p>{texts.contact}</p>
//       {/* Resto de tu contenido */}
//     </div>
//   );
// };

// export default MyComponent;
