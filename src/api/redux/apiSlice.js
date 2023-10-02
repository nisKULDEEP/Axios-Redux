// api/redux/apiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {},
  reducers: {
    apiRequest: (state, action) => {
      const { apiName } = action.payload;
      state[apiName] = { ...state[apiName], isLoading: true, isError: false, error: null };
    },
    apiSuccess: (state, action) => {
      const { apiName, data } = action.payload;
      state[apiName] = { ...state[apiName], data, isLoading: false, lastFetched: Date.now() };
    },
    apiFailure: (state, action) => {
      const { apiName, error } = action.payload;
      state[apiName] = { ...state[apiName], isLoading: false, isError: true, error };
    }
  }
});

export const { apiRequest, apiSuccess, apiFailure } = apiSlice.actions;

export default apiSlice.reducer;
