import { useState } from "react";

export const useCountryContinent = () => {
  const [selectedContinent, setSelectedContinent] = useState<
    string | undefined
  >(undefined);

  const handleContinentChange = (value: string | undefined) => {
    setSelectedContinent(value);
  };

  const clearContinent = () => {
    setSelectedContinent(undefined);
  };

  return {
    selectedContinent,
    handleContinentChange,
    clearContinent,
  };
};
