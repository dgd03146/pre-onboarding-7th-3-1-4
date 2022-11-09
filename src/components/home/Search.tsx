import { useSearch } from "@/lib/hooks/useSearch";
import { selectState, showState } from "@/lib/recoil/state";
import { useRecoilState, useSetRecoilState } from "recoil";

const Search = () => {
  const { searchList, search, query, setQuery } = useSearch();
  const [select, setSelect] = useRecoilState(selectState);
  const setIsShowed = useSetRecoilState(showState);

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    search(query);
  };

  const handleKeyArrow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        if (searchList.length - 1 > select) {
          setSelect((prev) => prev + 1);
          setQuery(searchList[select + 1].sickNm);
        }

        break;
      case "ArrowUp":
        setSelect((prev) => (prev < 0 ? prev : prev - 1));
        if (select > 0) {
          setQuery(searchList[select - 1].sickNm);
        } else if (select - 1 < 0) {
          setIsShowed(false);
        }

        break;
      case "Escape":
        if (select > -1) {
          search(searchList[select].sickNm);
          setSelect(-1);
        }

        break;
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleQuery}
        onKeyDown={handleKeyArrow}
        value={query}
      />
      <p>{query}</p>
    </div>
  );
};

export default Search;
