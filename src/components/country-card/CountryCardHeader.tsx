import { Country } from "../../types";

interface CountryCardHeaderProps {
  country: Country;
}

export const CountryCardHeader = ({ country }: CountryCardHeaderProps) => {
  return (
    <div className="p-6 text-center bg-white border-b border-gray-100">
      <div className="mb-3">
        <span className="text-4xl">{country.emoji}</span>
      </div>
      <h3 className="text-lg font-medium text-gray-900 m-0">{country.name}</h3>
    </div>
  );
};
