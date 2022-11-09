import axios, { AxiosInstance } from "axios";

// declare module "axios" {
//   interface AxiosResponse<T = any> extends Promise<T> {}
// }

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  constructor(protected readonly baseURL: string) {
    this.instance = axios.create({
      baseURL: this.baseURL
    });

    // this._initializeResponseInterceptor();
  }

  // private _initializeResponseInterceptor = () => {
  //   this.instance.interceptors.response.use(
  //     this._handleResponse,
  //     this._handleError
  //   );
  // };

  // private _handleResponse = ({ data }: AxiosResponse) => {
  //   return data;
  // };

  // protected _handleError = (error: any) => Promise.reject(error);
}

// baseurl을 클래스에서 기본 property로 설정하자!
//  추상 클래스는 구체 클래스의 도면 혹은 설계서이므로 객체 인스턴스를 생성할 수 없습니다
// interceptor는 error handle 하기 위해서
