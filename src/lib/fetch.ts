import axios from 'axios';

class FetchData {
  private head: any;
  private body: any;

  constructor(url: string, body = {}, customHeader = '') {
    this.head = {};
    this.head = {
      method: 'GET',
      url,
      baseURL: 'http://localhost:8880',
      headers: {
        'Content-Type': customHeader !== '' ? customHeader : 'application/json',
      },
    };

    this.body = body;
  }

  async exec() {
    if (localStorage.token) {
      Object.assign(this.head.headers, {
        Authorization: 'Bearer ' + localStorage?.token,
      });
    }

    if (this.body) {
      let datas = this.head.method === 'GET' ? 'params' : 'data';
      Object.assign(this.head, {
        [datas]: this.body,
      });
    }

    try {
      let response = await axios(this.head, {
        timeout: 30000,
      });
      return response.data;
    } catch (error: any) {
      // eslint-disable-next-line no-throw-literal
      return {
        error: error?.response?.data.errors,
        status: error?.response?.status,
      };
    }
  }

  get() {
    this.head.method = 'GET';
    return this.exec();
  }

  patch() {
    this.head.method = 'PATCH';
    return this.exec();
  }

  post() {
    this.head.method = 'POST';
    return this.exec();
  }

  put() {
    this.head.method = 'PUT';
    return this.exec();
  }

  delete() {
    this.head.method = 'DELETE';
    return this.exec();
  }
}

const fetchData = (url: string, body = {}, customHeader = '') => {
  let fetch = new FetchData(url, body, customHeader);
  return fetch;
};

export default fetchData;
