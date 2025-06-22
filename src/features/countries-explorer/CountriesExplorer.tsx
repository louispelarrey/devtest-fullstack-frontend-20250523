import { Typography } from "antd";
import {
  CountriesGrid,
  ErrorMessage,
  Header,
  LoadingSpinner,
} from "../../components";
import {
  useCountriesQuery,
  useCountryContinent,
  useCountryCurrency,
  useCountrySearch,
  useFilteredCountries,
} from "../../hooks";
import { FilterManager } from "../filter-manager";

export const CountriesExplorer = () => {
  const { data, loading, error } = useCountriesQuery();

  const {
    searchText,
    deferredSearchText,
    isSearchPending,
    handleSearchTextChange,
    clearSearch,
  } = useCountrySearch();

  const { selectedContinent, handleContinentChange, clearContinent } =
    useCountryContinent();

  const { selectedCurrency, handleCurrencyChange, clearCurrency } =
    useCountryCurrency();

  const filteredCountries = useFilteredCountries(
    data?.countries,
    deferredSearchText,
    selectedContinent,
    selectedCurrency
  );

  const handleClearFilters = () => {
    clearSearch();
    clearContinent();
    clearCurrency();
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography.Text type="secondary">
          Aucune donnée disponible
        </Typography.Text>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 max-w-7xl mx-auto">
      <Header countriesCount={filteredCountries.length} />

      <FilterManager
        countries={data.countries}
        searchText={searchText}
        selectedContinent={selectedContinent}
        selectedCurrency={selectedCurrency}
        isSearchPending={isSearchPending}
        onSearchTextChange={handleSearchTextChange}
        onContinentChange={handleContinentChange}
        onCurrencyChange={handleCurrencyChange}
        onClearFilters={handleClearFilters}
      />

      <CountriesGrid countries={filteredCountries} />
    </div>
  );
};
