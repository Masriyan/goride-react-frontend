import axios from 'axios';

export function setTokenHeader(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
export function apiCall(method, path, data) {
  const BASE_URL = 'https://bncc-goride-api.herokuapp.com/api/v1';
  return new Promise((resolve, reject) => {
    return axios[method](BASE_URL + path, data).then(res => {
      if (res.status >= 200 && res.status < 300)
        resolve(res.data);
      else {
        reject(res);
      }
    })
      .catch(err => {
        reject(err.response);
      })
  })
}