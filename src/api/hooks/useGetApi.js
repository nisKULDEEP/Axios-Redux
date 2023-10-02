// api/hooks/useGetApi.js
import useApi from './useApi';

const useGetApi = (url, queryParams) => {
  return useApi('get', url, queryParams);
};

export default useGetApi;
