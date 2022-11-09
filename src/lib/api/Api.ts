import { AxiosResponse } from "axios";
import { HttpClient } from "./HttpClient";

export interface APIService {
  fetch: (endPoint: string) => Promise<AxiosResponse<any, any>>;
}

export class APIServiceImpl extends HttpClient implements APIService {
  constructor(baseURL: string) {
    super(baseURL);
  }

  fetch = (endPoint: string) => {
    console.info("calling api");
    return this.instance.get(this.baseURL + endPoint);
  };
}
