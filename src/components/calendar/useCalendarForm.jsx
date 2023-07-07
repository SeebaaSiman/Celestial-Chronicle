import { useMemo } from "react";
import { useState } from "react";
import { getDaysInMonth, monthMap } from "../../helpers/getDayInMonth";
import { useCallback } from "react";
import { useLocalStorage } from "../../hook/useLocalStorage";
import { useDebounce } from "../../hook/useDebounce";
import { useNavigate } from "react-router-dom";

export const useCalendarForm = () => {
  const [showOptionsDay, setShowOptionsDay] = useState(false);
  const [showOptionsMonth, setShowOptionsMonth] = useState(false);
  const [showOptionsYear, setShowOptionsYear] = useState(false);

  const handleFocusDay = () => {
    setShowOptionsDay(true);
    setShowOptionsMonth(false);
    setShowOptionsYear(false);
  };
  const handleFocusMonth = () => {
    setShowOptionsMonth(true);
    setShowOptionsDay(false);
    setShowOptionsYear(false);
  };
  const handleFocusYear = () => {
    setShowOptionsYear(true);
    setShowOptionsMonth(false);
    setShowOptionsDay(false);
  };

  const [day, setDay] = useState("29");
  const [month, setMonth] = useState("July");
  const [year, setYear] = useState("1991");

  const handleOptionSelect = useCallback((value, inputName) => {
    if (inputName === "day") {
      setDay(value);
      setShowOptionsDay(false);
      setShowOptionsMonth(false);
      setShowOptionsYear(false);
    } else if (inputName === "month") {
      setMonth(value);
      setShowOptionsDay(false);
      setShowOptionsMonth(false);
      setShowOptionsYear(false);
    } else if (inputName === "year") {
      setYear(value);
      setShowOptionsDay(false);
      setShowOptionsMonth(false);
      setShowOptionsYear(false);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "day") {
      setDay(value);
    } else if (name === "month") {
      setMonth(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  const arrOptionsDay = useMemo(() => {
    const lastDayOfMonth = getDaysInMonth(month, year);
    const options = [];
    for (let i = 1; i <= lastDayOfMonth; i++) {
      options.push({
        fnOnclick: handleOptionSelect,
        text: i.toString().padStart(2, "0"), // Agregar padStart para asegurar que tenga dos dígitos
        inputName: "day",
      });
    }
    return options;
  }, [month, year, handleOptionSelect]);

  const arrOptionsMonth = [
    { fnOnclick: handleOptionSelect, text: "January", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "February", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "March", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "April", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "May", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "June", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "July", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "August", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "September", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "October", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "November", inputName: "month" },
    { fnOnclick: handleOptionSelect, text: "December", inputName: "month" },
  ];

  const arrOptionsYear = useMemo(() => {
    const options = [];
    for (let i = 2023; i >= 1920; i--) {
      options.push({
        fnOnclick: handleOptionSelect,
        text: String(i),
        inputName: "year",
      });
    }
    return options;
  }, [handleOptionSelect]);

  const arr = [
    {
      fnOnFocus: handleFocusDay,
      fnValue: day,
      stateOptions: showOptionsDay,
      textSpan: "day",
    },
    {
      fnOnFocus: handleFocusMonth,
      fnValue: month,
      stateOptions: showOptionsMonth,
      textSpan: "month",
    },
    {
      fnOnFocus: handleFocusYear,
      fnValue: year,
      stateOptions: showOptionsYear,
      textSpan: "year",
    },
  ];
  const [birthDate, setBirthDate] = useLocalStorage("birthDate", "");
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const currentDay = day;
    const currentMonth = monthMap[month]; // Obtén el número del mes a partir del nombre
    const currentYear = year;
    // Concatena los valores en el formato deseado: "yyyy-mm-dd"
    const formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;
    // Usa el hook useLocalStorage para guardar la fecha en el localStorage
    setBirthDate(formattedDate);
    navigate("/Age");
  };

  return {
    arr,
    arrOptionsDay,
    arrOptionsMonth,
    arrOptionsYear,
    handleInputChange,
    onSubmit,
  };
};
