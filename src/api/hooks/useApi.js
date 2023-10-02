// api/hooks/useApi.js
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../services/apiService';
import { SHA256 } from 'crypto-js';

const generateApiName = (method, url, data) => {
  // Use SHA-256 hash for stability
  return SHA256(`${method}_${url}_${JSON.stringify(data)}`).toString();
};

const useApi = (method, url, data) => {
  const dispatch = useDispatch();
  const apiName = generateApiName(method, url);
  const apiState = useSelector((state) => state.api[apiName] || {});

  const refetch = useCallback(
    () => fetchData(dispatch, method, url, data, apiName),
    [dispatch, method, url, data, apiName]
  );

  useEffect(() => {
    const fetchDataIfNeeded = async () => {
      if (!apiState.data || Date.now() - apiState.lastFetched > 120000) {
        await refetch();
      }
    };

    fetchDataIfNeeded();
  }, [apiState.data, apiState.lastFetched]); // Removed refetch from the dependencies

  return { ...apiState, refetch };
};

export default useApi;
