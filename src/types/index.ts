export type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export type Continent = {
  name: string;
  code: string;
};

export type Country = {
  name: string;
  code: string;
  capital: string;
  emoji: string;
  continent: Continent;
  currency: string;
};

export type CountriesData = {
  countries: Country[];
};
