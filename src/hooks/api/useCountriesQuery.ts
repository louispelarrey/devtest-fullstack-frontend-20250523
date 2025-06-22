import { useQuery } from "@apollo/client";
import { COUNTRIES_QUERY } from "../../graphql/countries";
import { CountriesData } from "../../types";

export const useCountriesQuery = () => {
  const { data, loading, error } = useQuery<CountriesData>(COUNTRIES_QUERY);
  return { data, loading, error };
};
