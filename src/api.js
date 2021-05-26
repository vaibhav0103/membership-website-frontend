import axios from 'axios';
const localBaseUrl = 'http://127.0.0.1:8000/api/'

export default axios.create({
  baseURL: localBaseUrl
});

// export const instance = axios.create({
//   baseURL: localBaseUrl,
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });