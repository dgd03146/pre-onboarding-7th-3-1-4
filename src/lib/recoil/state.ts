import { atom } from "recoil";
import { IData } from "../interface/IData";
import { keys } from "./keys";

interface ISearch {
  [key: string]: IData[];
}

export const cacheState = atom<ISearch>({
  key: keys.cache,
  default: {
    "": [
      {
        sickCd: "",
        sickNm: ""
      }
    ]
  }
});

export const searchState = atom<IData[]>({
  key: keys.search,
  default: []
});

export const queryState = atom<string>({
  key: keys.query,
  default: ""
});

export const selectState = atom<number>({
  key: keys.select,
  default: -1
});
