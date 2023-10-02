// usePutApi.js
import useApi from '../apiHooks';

const usePutApi = (url, putData) => useApi('put', url, putData);

export default usePutApi;
