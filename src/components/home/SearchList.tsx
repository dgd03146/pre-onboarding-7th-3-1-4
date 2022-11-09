import styled from "styled-components";
import { useSearch } from "@/lib/hooks/useSearch";
import { useRecoilValue } from "recoil";
import { IData } from "@/lib/interface/IData";
import { selectState } from "@/lib/recoil/state";

const SearchList = () => {
  const { searchList, query } = useSearch();
  const select = useRecoilValue(selectState);

  // FIXME: 코드 별로 맘에 안듬 split 연산하는거 밖에서 하게 바꾸기
  return (
    <Container>
      {searchList.length === 0 && query !== "" && <p>검색어 없음</p>}
      {searchList.map(({ sickCd, sickNm }: IData, index: number) => {
        return (
          <List key={sickCd} selected={select === index}>
            {sickNm.split(query)[0]}
            <span style={{ fontWeight: "700" }}>{query}</span>
            {sickNm.split(query)[1]}
          </List>
        );
      })}
    </Container>
  );
};

export default SearchList;

const Container = styled.ul``;

const List = styled.li<{ selected: boolean }>`
  background-color: ${({ selected }) => selected && "#ececec"};
`;
