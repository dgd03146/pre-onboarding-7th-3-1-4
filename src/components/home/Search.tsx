import { useSearch } from "@/lib/hooks/useSearch";
import React from "react";

const Search = () => {
  const { search } = useSearch();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          e.target.value !== "" && search(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
