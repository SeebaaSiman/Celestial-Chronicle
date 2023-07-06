import { useForm } from "../../hook/useForm";

export const Calendar = () => {
  // const initialForm = {
  //   day,
  //   month,
  //   year,
  // };
  const {
    day,
    month,
    year,
    suggestions,
    handleInputChange,
    handleOptionSelect,
    handleSubmit,
  } = useForm();

  // const { day, month, year } = formState;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="day">Día:</label>
      <input
        type="number"
        id="day"
        name="day"
        value={day}
        onChange={handleInputChange}
        onClick={handleOptionSelect}
      />
      {suggestions && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleOptionSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <label htmlFor="month">Mes:</label>
      <input
        type="number"
        id="month"
        name="month"
        value={month}
        onChange={handleInputChange}
        onClick={handleOptionSelect}
      />
      {suggestions && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleOptionSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <label htmlFor="year">Año:</label>
      <input
        type="number"
        id="year"
        name="year"
        value={year}
        onChange={handleInputChange}
        onClick={handleOptionSelect}
      />
      {suggestions && (
        <ul>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => handleOptionSelect(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}

      <button type="submit">Enviar</button>
    </form>
  );
};
