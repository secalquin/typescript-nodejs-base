import axios from 'axios';

interface IAxiosResponse {
  error: boolean;
  data: unknown;
  statusCode: number;
  message: string;
}

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});

// create a request and response interceptor to return custom error messages
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return Promise.reject({
        error: true,
        data: [],
        statusCode: error.response.status,
        message: error.response.data.message,
      } as IAxiosResponse);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return Promise.reject({
        error: true,
        data: [],
        statusCode: 500,
        message: error.request,
      } as IAxiosResponse);
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject({
        error: true,
        data: [],
        statusCode: 500,
        message: error.message,
      } as IAxiosResponse);
    }
  }
);

export default api;