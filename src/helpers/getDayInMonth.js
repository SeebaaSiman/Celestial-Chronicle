// se encarga de calcular la cantidad de días en un mes específico
export const getDaysInMonth = (month, year) => {
  if (month === "" || year === "") {
    return 0;
  }
  // se convierten los valores del mes y el año a números enteros utilizando parseInt() para realizar operaciones numéricas
  const parsedMonth = monthMap[month]; // Utilizar monthMap para obtener el número del mes
  const parsedYear = parseInt(year, 10);

  // se verifica si el resultado de la conversión es un valor numérico válido utilizando isNaN(). Si alguno de los dos valores no es un número válido, se retorna 0.
  // La función parseInt toma una cadena de texto y devuelve un número entero. El segundo argumento, en este caso 10, se utiliza para especificar la base numérica. Al utilizar 10, se indica que se espera una representación decimal.
  if (isNaN(parsedMonth) || isNaN(parsedYear)) {
    return 0;
  }

  // Validar si el año es bisiesto según matemática estándar
  //  Un año es bisiesto si es divisible por 4.
  // Sin embargo, los años divisibles por 100 no son bisiestos, a menos que también sean divisibles por 400.
  const isLeapYear = (parsedYear % 4 === 0 && parsedYear % 100 !== 0) || parsedYear % 400 === 0;


  // se utiliza una declaración switch para determinar la cantidad de días en el mes específico. Los meses se representan como números enteros: enero es 1, febrero es 2, marzo es 3, y así sucesivamente. Dependiendo del valor del mes, se retorna la cantidad correspondiente de días. Se tienen en cuenta los meses con 30 días (abril, junio, septiembre y noviembre), febrero y los demás meses, que tienen 31 días.
  switch (parsedMonth) {
    case 2:
      return isLeapYear ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
};

export const monthMap = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: 10,
  November: 11,
  December: 12,
};



