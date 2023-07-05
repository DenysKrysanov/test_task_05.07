type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

class BaseApi {
  // This value can be extracted to the .env file
  BASE_URL = 'some api url';

  protected async request<T>(url: string, method: RequestMethod = 'GET', data: any = null): Promise<T> {
    const options: RequestInit = { method };
    const headers = new Headers();

    if (data) {
      headers.set('Content-Type', 'application/json; charset=UTF-8');
      options.body = JSON.stringify(data);
    }

    options.headers = headers;
    const response = await fetch(this.BASE_URL + url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  }

  protected get<T>(url: string): Promise<T> {
    return this.request<T>(url);
  }

  protected post<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, 'POST', data);
  }

  protected put<T>(url: string, data: any): Promise<T> {
    return this.request<T>(url, 'PUT', data);
  }

  protected delete(url: string): Promise<void> {
    return this.request<void>(url, 'DELETE');
  }
}

export default BaseApi;
