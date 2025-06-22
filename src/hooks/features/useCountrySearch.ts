import { useDeferredValue, useState } from "react";

export const useCountrySearch = () => {
  const [searchText, setSearchText] = useState("");
  const deferredSearchText = useDeferredValue(searchText);
  const isSearchPending = searchText !== deferredSearchText;

  const handleSearchTextChange = (value: string) => {
    setSearchText(value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return {
    searchText,
    deferredSearchText,
    isSearchPending,
    handleSearchTextChange,
    clearSearch,
  };
};
