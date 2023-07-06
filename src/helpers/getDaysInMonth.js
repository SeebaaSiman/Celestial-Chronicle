const isLeapYear = (year) => {
 return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInMonth = (month, year) => {
 const monthIndex = parseInt(month, 10) - 1;
 const daysInMonth = [
  31, // January
  28, // February (default)
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31, // December
 ];

 if (monthIndex === 1 && isLeapYear(year)) {
  return 29; // February (leap year)
 }

 return daysInMonth[monthIndex];
};