import { memo } from "react";
import { Country } from "../../types";
import { CountryCard } from "../country-card";
interface CountriesGridProps {
  countries: Country[];
}

export const CountriesGrid = memo(({ countries }: CountriesGridProps) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {countries.map((country) => (
        <CountryCard key={country.code} country={country} />
      ))}
    </div>
  );
});
