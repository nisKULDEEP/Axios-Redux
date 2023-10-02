
import axiosMethods from '../../axios/methods';
import { apiRequest, apiSuccess, apiFailure } from '../redux/apiSlice';

const fetchData = async (dispatch, method, url, data, apiName) => {
  try {
    dispatch(apiRequest({ apiName }));

    const response = await axiosMethods[method](url, { params: data });

    dispatch(apiSuccess({ apiName, data: response.data }));
  } catch (error) {
    dispatch(apiFailure({ apiName, error: error.message }));
  }
};

export default fetchData;
