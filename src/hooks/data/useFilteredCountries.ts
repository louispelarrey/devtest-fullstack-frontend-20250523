import { useMemo } from "react";
import { Country } from "../../types";

export const useFilteredCountries = (
  countries: Country[] | undefined,
  searchText: string,
  selectedContinent: string | undefined,
  selectedCurrency: string | undefined
) => {
  return useMemo(() => {
    if (!countries) return [];

    if (!searchText && !selectedContinent && !selectedCurrency) {
      return countries;
    }

    const lowerSearchText = searchText.toLowerCase();

    return countries.filter((country) => {
      if (selectedContinent && country.continent.code !== selectedContinent) {
        return false;
      }

      if (selectedCurrency && country.currency !== selectedCurrency) {
        return false;
      }

      if (searchText && !country.name.toLowerCase().includes(lowerSearchText)) {
        return false;
      }

      return true;
    });
  }, [countries, searchText, selectedContinent, selectedCurrency]);
};
