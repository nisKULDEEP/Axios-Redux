// axios/methods.js
import instance from './axiosInstance';

const get = (url) => instance.get(url);
const post = (url, data) => instance.post(url, data);
const put = (url, data) => instance.put(url, data);
const patch = (url, data) => instance.patch(url, data);
const del = (url) => instance.delete(url);
const axiosMethods = {
  get: get,
  post: post,
  put: put,
  patch: patch,
  del: del
};

export default axiosMethods;
