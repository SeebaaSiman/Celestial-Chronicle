export function formattedYearsOld(years) {
 // const months = Math.floor(years * 12);
 // const remainingMonths = months % 12;
 // const daysInYear = 365.26; // Promedio de días en un año terrestre (tomando en cuenta años bisiestos)
 // const remainingDays = Math.round((years * daysInYear - Math.floor(years) * daysInYear) * (remainingMonths / 12));

 // return { years: Math.floor(years), months: remainingMonths, days: remainingDays };
 const totalMonths = Math.floor(years * 12);
 const yearsWithoutMonths = Math.floor(years);
 const remainingMonths = totalMonths - yearsWithoutMonths * 12;

 const daysInYear = 365.26; // Promedio de días en un año terrestre (tomando en cuenta años bisiestos)
 const daysInMonths = Math.floor(daysInYear / 12);
 const totalDaysInMonths = remainingMonths * daysInMonths;

 const remainingDays = Math.round((years * daysInYear - Math.floor(years) * daysInYear) - totalDaysInMonths);

 return { years: yearsWithoutMonths, months: remainingMonths, days: remainingDays };
}
