import { useState } from "react";

export const useCountryCurrency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string | undefined>(
    undefined
  );

  const handleCurrencyChange = (value: string | undefined) => {
    setSelectedCurrency(value);
  };

  const clearCurrency = () => {
    setSelectedCurrency(undefined);
  };

  return {
    selectedCurrency,
    handleCurrencyChange,
    clearCurrency,
  };
};
