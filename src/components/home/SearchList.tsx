import styled from "styled-components";
import { useSearch } from "@/lib/hooks/useSearch";

import React from "react";
import { IData } from "@/lib/interface/IData";

const SearchList = () => {
  const { searchList } = useSearch();
  console.log(searchList);

  return (
    <Container>
      {searchList.map((it: IData) => (
        <li key={it.sickCd}>{it.sickNm}</li>
      ))}
    </Container>
  );
};

export default SearchList;

const Container = styled.ul``;
