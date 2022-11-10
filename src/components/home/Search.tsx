import { useSearch } from "@/lib/hooks/useSearch";
import { selectState, showState } from "@/lib/recoil/state";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Search = () => {
  const { searchList, search, query, setQuery } = useSearch();
  const [select, setSelect] = useRecoilState(selectState);
  const [isShowed, setIsShowed] = useRecoilState(showState);
  const [initialQuery, setinitialQueryQuery] = useState<string>("");

  const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setIsShowed(true);
    setSelect(-1);
    setinitialQueryQuery(query);
    search(query);
  };

  // switch문 로직 수정
  const handleKeyArrow = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        if (searchList.length - 1 === select) {
          setSelect(0);
        } else if (searchList.length - 1 > select) {
          setSelect((prev) => prev + 1);
        }
        setIsShowed(true);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelect((prev) => (prev < 0 ? prev : prev - 1));
        if (select - 1 < 0) {
          setIsShowed(false);
          setQuery(initialQuery);
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
        onFocus={() => setIsShowed(true)}
        onBlur={() => {
          setIsShowed(false);
        }}
        value={query}
      />
      {isShowed && <p>{query}</p>}
    </div>
  );
};

export default Search;
