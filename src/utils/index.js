/**
 * Convert string to valid format for URL
 * @param {string} str
 * @returns string
 * @example "Jorge Baumann" => "jorge-baumann"
 */
export const stringToKebabCase = (str) =>
  str.toLowerCase().replace(/\s+/g, '-');


export const calculateCoffees = () => {
  const startYear = 2015;
  const endYear = new Date().getFullYear();
  const month = new Date().getMonth() + 1; // JavaScript months are 0-11
  const day = new Date().getDate();

  const coffeeDaysPerWeek = 4; // Monday to Thursday
  const weeksInYear = 52;
  const weeksOff = 8; // 8 weeks of vacation
  const workingWeeksPerYear = weeksInYear - weeksOff;
  const coffeeDaysPerYear = workingWeeksPerYear * coffeeDaysPerWeek;

  // Calculate full years with coffee from startYear to the year before endYear
  const fullYears = endYear - startYear - 1;
  const fullYearsCoffees = fullYears * coffeeDaysPerYear;

  // Calculate coffee days in the current year
  const currentYearStart = new Date(`${endYear}-01-01`);
  const currentDate = new Date(`${endYear}-${month}-${day}`);
  const daysPassedThisYear = Math.floor(
    (currentDate - currentYearStart) / (1000 * 60 * 60 * 24)
  );

  const daysPassedThisYearWeeks =
    Math.floor(daysPassedThisYear / 7) * coffeeDaysPerWeek;
  const remainingDays = daysPassedThisYear % 7;
  const extraCoffeeDays = Math.min(remainingDays, coffeeDaysPerWeek);

  const currentYearCoffees = daysPassedThisYearWeeks + extraCoffeeDays;

  // Sum total coffees
  const totalCoffees = fullYearsCoffees + currentYearCoffees;

  return Math.floor(totalCoffees);
};
