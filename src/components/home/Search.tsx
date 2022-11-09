import { useSearch } from "@/lib/hooks/useSearch";
import { selectState } from "@/lib/recoil/state";
import { useRecoilState } from "recoil";

const Search = () => {
  const { searchList, search, query, setQuery } = useSearch();
  const [select, setSelect] = useRecoilState(selectState);

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
        if (select > 0) {
          setSelect((prev) => prev - 1);
          setQuery(searchList[select - 1].sickNm);
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
