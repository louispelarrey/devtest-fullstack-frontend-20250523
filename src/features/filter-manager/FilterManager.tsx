import { FilterSection } from "../../components";
import { useContinents, useCurrencies } from "../../hooks";
import { Country } from "../../types";

interface FilterManagerProps {
  countries: Country[] | undefined;
  searchText: string;
  selectedContinent: string | undefined;
  selectedCurrency: string | undefined;
  isSearchPending?: boolean;
  onSearchTextChange: (value: string) => void;
  onContinentChange: (value: string | undefined) => void;
  onCurrencyChange: (value: string | undefined) => void;
  onClearFilters: () => void;
}

export const FilterManager = ({
  countries,
  searchText,
  selectedContinent,
  selectedCurrency,
  isSearchPending = false,
  onSearchTextChange,
  onContinentChange,
  onCurrencyChange,
  onClearFilters,
}: FilterManagerProps) => {
  const continents = useContinents(countries);
  const currencies = useCurrencies(countries);

  return (
    <FilterSection
      searchText={searchText}
      selectedContinent={selectedContinent}
      selectedCurrency={selectedCurrency}
      continents={continents}
      currencies={currencies}
      isSearchPending={isSearchPending}
      onSearchTextChange={onSearchTextChange}
      onContinentChange={onContinentChange}
      onCurrencyChange={onCurrencyChange}
      onClearFilters={onClearFilters}
    />
  );
};
