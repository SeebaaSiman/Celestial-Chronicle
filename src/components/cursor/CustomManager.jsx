import { createContext, useState } from "react";

export const CursorContext = createContext({
  size: "small",
  setSize: () => {},
  handleCursorMedium: () => {},
  handleCursorRegular: () => {},
  handleCursorSmall: () => {},
  handleCursorXs: () => {},
});
export default function CursorManager({ children }) {
  const [size, setSize] = useState("small");
  const handleCursorMedium = () => {
    setSize("medium");
  };
  const handleCursorSmall = () => {
    setSize("small");
  };
  const handleCursorRegular = () => {
    setSize("regular");
  };
  const handleCursorXs = () => {
    setSize("xs");
  };
  return (
    <CursorContext.Provider
      value={{
        size,
        setSize,
        handleCursorRegular,
        handleCursorMedium,
        handleCursorSmall,
        handleCursorXs,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
}

//Importar en la parte más alta de la app. Es un provider

// Importar fx y efectos
// const { handleCursorRegular, handleCursorMedium } = useContext(CursorContext);
