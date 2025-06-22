import { useMemo } from "react";
import { Country } from "../../types";

export const useCurrencies = (countries: Country[] | undefined) => {
  return useMemo(() => {
    if (!countries) return [];
    const uniqueCurrencies = new Set<string>();
    countries.forEach((country) => {
      if (country.currency) {
        uniqueCurrencies.add(country.currency);
      }
    });
    return Array.from(uniqueCurrencies).sort();
  }, [countries]);
};
