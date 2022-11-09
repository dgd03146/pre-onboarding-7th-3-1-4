import { queryState } from "./../recoil/state";
import { IData } from "./../interface/IData";
import { useRecoilState } from "recoil";
import { cacheState, searchState } from "../recoil/state";
import { searchService } from "../service/SearchService";
// import { useEffect } from "react";

export const useSearch = () => {
  const [cachedData, setCachedData] = useRecoilState(cacheState);
  const [searchList, setSearchList] = useRecoilState(searchState);
  const [query, setQuery] = useRecoilState(queryState);

  const search = async (query: string) => {
    setQuery(query);

    // TODO: Map으로 한번 바꿔보자
    if (Object.prototype.hasOwnProperty.call(cachedData, query)) {
      setSearchList(cachedData[query]);
      return;
    }

    const { data } = await searchService.search(query);
    const startQueryData = data.filter(({ sickNm }: IData) =>
      sickNm.startsWith(query)
    );

    setCachedData((prev) => {
      return { ...prev, [query]: startQueryData };
    });
    setSearchList(startQueryData);
  };

  return { search, cachedData, setCachedData, searchList, query, setQuery };
};
