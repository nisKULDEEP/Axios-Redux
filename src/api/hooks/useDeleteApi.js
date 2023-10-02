// useDeleteApi.js
import useApi from '../apiHooks';

const useDeleteApi = (url) => useApi('delete', url, null);

export default useDeleteApi;
