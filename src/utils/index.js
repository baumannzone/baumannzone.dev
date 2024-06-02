/**
 * Convert string to valid format for URL
 * @param {string} str
 * @returns string
 * @example "Jorge Baumann" => "jorge-baumann"
 */
export const stringToKebabCase = (str) =>
  str.toLowerCase().replace(/\s+/g, '-');
