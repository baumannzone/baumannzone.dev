/**
 * Convert string to valid format for URL
 * @param {string} str
 * @returns string
 * @example "Jorge Baumann" => "jorge-baumann"
 */
const stringToKebabCase = (str) =>
  str.toLowerCase().replace(/\s+/g, '-');

const DAY_MS = 24 * 60 * 60 * 1000;
const COFFEE_START = Date.UTC(2015, 0, 1);
// Training, afternoons and two kids: more coffee from here on.
const TRAINING_START = Date.UTC(2026, 1, 1);
const VACATION_SHARE = 44 / 52; // 8 weeks off a year

/**
 * Average coffees on a given day
 * @param {Date} date - a UTC midnight
 * @returns number
 */
const coffeesOn = (date) => {
  const weekday = date.getUTCDay(); // 0 = Sunday
  const isWeekend = weekday === 0 || weekday === 6;

  // Until February 2026: one coffee from Monday to Thursday.
  if (date.getTime() < TRAINING_START) {
    return weekday >= 1 && weekday <= 4 ? VACATION_SHARE : 0;
  }

  // Since then: three a day from Monday to Friday, three on about half of
  // the weekends, and half as much in July and August.
  const perDay = isWeekend ? 3 * 0.5 : 3;
  const month = date.getUTCMonth();
  const isSummer = month === 6 || month === 7;
  return isSummer ? perDay * 0.5 : perDay;
};

/**
 * Calculate the number of coffees consumed since 2015
 * @returns number
 */
const calculateCoffees = () => {
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());

  let total = 0;
  for (let time = COFFEE_START; time <= today; time += DAY_MS) {
    total += coffeesOn(new Date(time));
  }

  return Math.floor(total);
};

export { stringToKebabCase, calculateCoffees };