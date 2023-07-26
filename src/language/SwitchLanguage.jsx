import { useLanguage } from "./LanguageContext";
import { SwitchContainer } from "./switchStyle";
import eeuu from "./eeuu.png";
import spain from "./spain.png";
export const SwitchLanguage = () => {
  const { setLanguage, language, texts } = useLanguage();

  const eeuuSelect = {
    filter: language === "es" ? "grayscale(1)" : "grayscale(0)",
  };
  const spainSelect = {
    filter: language === "en" ? "grayscale(1)" : "grayscale(0)",
  };
  const onLanguage = (newLanguage) => {
    localStorage.setItem("language", newLanguage); // Guardar el idioma seleccionado en localStorage
    setLanguage(newLanguage);
  };
  return (
    <SwitchContainer>
      <li onClick={() => onLanguage("en")}>
        <img src={eeuu} alt="eeuu flag" style={eeuuSelect} />
        {texts.english}
      </li>
      <li onClick={() => onLanguage("es")}>
        <img src={spain} alt="spain flag" style={spainSelect} />
        {texts.spain}
      </li>
    </SwitchContainer>
  );
};
