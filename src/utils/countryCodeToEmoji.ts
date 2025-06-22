/**
 * Converts a country code to its corresponding flag emoji
 * @param countryCode - The country code (e.g., "US", "FR", "AD")
 * @returns The flag emoji for the country
 */
export const countryCodeToEmoji = (countryCode: string): string => {
  if (!countryCode || countryCode.length !== 2) {
    return "🏳️"; // Default flag emoji for invalid codes
  }

  // Convert country code to flag emoji using Unicode regional indicator symbols
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  
  return String.fromCodePoint(...codePoints);
};
