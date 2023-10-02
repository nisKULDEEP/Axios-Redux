// usePatchApi.js
import useApi from '../apiHooks';

const usePatchApi = (url, patchData) => useApi('patch', url, patchData);

export default usePatchApi;
