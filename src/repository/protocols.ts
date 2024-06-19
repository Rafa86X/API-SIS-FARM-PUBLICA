
export interface HttpResponse<T> {
    statusCode: HttpStatusCode;
    send: T;
  }
  
export interface HttpRequest<B> {
    params?: unknown;
    headers?: unknown;
    body?: B;
  }
  
export enum HttpStatusCode {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NO_FOUND = 404,
    SERVER_ERROR = 500,
  }
  
export interface IRepository {
      getAll(): Promise<HttpResponse<unknown>>;
      getOne(httpRequest?: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
      create(data?: unknown): Promise<HttpResponse<unknown>>;
      update(httpRequest?: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
      delete(httpRequest?: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
  }

export interface IRepositoryPharmaco {
    getAllForAnimal(httpRequest?: HttpRequest<unknown>): Promise<HttpResponse<unknown>>;
}


