import { AxiosResponse } from "axios";
import { APIServiceImpl, APIService } from "./../api/API";

interface ResponseType {
  sickCd: string;
  sickNm: string;
}

interface SearchService {
  search(query: string): Promise<AxiosResponse<ResponseType[]>>; // query PROMISE로 바꿔야함
}

class SearchServiceImpl implements SearchService {
  private api;

  constructor(api: APIService) {
    this.api = api;
  }

  search(query: string) {
    return this.api.fetch(`/sick?q=${query}`);
  }
}

const api = new APIServiceImpl(process.env.REACT_APP_API_URL);
const searchService = new SearchServiceImpl(api);
export { searchService };
