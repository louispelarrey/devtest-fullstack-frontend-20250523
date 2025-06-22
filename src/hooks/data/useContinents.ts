import { useMemo } from "react";
import { Continent, Country } from "../../types";

export const useContinents = (countries: Country[] | undefined) => {
  return useMemo(() => {
    if (!countries) return [];
    const uniqueContinents = new Map<string, Continent>();
    countries.forEach((country) => {
      if (!uniqueContinents.has(country.continent.code)) {
        uniqueContinents.set(country.continent.code, country.continent);
      }
    });
    return Array.from(uniqueContinents.values());
  }, [countries]);
};
