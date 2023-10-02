// api/hooks/usePostApi.js
import useApi from './useApi';

const usePostApi = (url, data, apiName) => {
  return useApi('post', url, data, apiName);
};

export default usePostApi;
