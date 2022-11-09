import { HttpClient } from "./HttpClient";

class API extends HttpClient {
  constructor(baseURL: string) {
    super(baseURL);
  }

  getSearch = async (query: string) => {
    const data = await this.instance.get(`/sick?q=${query}`);
    return data;
  };
}

const api = new API(process.env.REACT_APP_API_URL);
export { api };
