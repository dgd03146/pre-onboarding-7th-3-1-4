import { useRecoilState } from "recoil";
import { cacheState, searchState } from "../recoil/state";
import { searchService } from "../service/SearchService";
// import { useEffect } from "react";

interface props {
  sickNm: string;
}

export const useSearch = () => {
  const [cachedData, setCachedData] = useRecoilState(cacheState);
  const [searchList, setSearchList] = useRecoilState(searchState);

  const search = async (query: string) => {
    // TODO: Map으로 한번 바꿔보자
    if (Object.prototype.hasOwnProperty.call(cachedData, query)) {
      setSearchList(cachedData[query]);
      return;
    }
    const { data } = await searchService.search(query);
    const startQueryData = data.filter(({ sickNm }: props) =>
      sickNm.startsWith(query)
    );

    setCachedData((prev) => {
      return { ...prev, [query]: startQueryData };
    });
    setSearchList(startQueryData);
  };

  return { search, cachedData, setCachedData, searchList };
};
