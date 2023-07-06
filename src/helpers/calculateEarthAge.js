// Función auxiliar para calcular la edad en años terrestres
export const calculateEarthAge = (birthDate) => {
 const currentDate = new Date();
 const ageInMillis = currentDate.getTime() - birthDate.getTime();
 const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Aproximadamente 365.25 días en un año para tener en cuenta los años bisiestos

 const ageInYears = ageInMillis / millisecondsPerYear;
 return ageInYears;
};