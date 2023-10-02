// components/YourComponent.js
import React, { useEffect } from 'react';
import useGetApi from '../api/hooks/useGetApi';
import { GET_RECIPE_DATA } from '../api/services/apiConstants';

const YourComponent = () => {
  const apiUrl = '/recipes/complexSearch';
  const queryParams = {
    s: 'Avengers Endgame',
    r: 'json',
    page: '1'
  };

  const { data, isLoading, isError, refetch } = useGetApi('/entries', queryParams);
  console.log(JSON.stringify(data));

  return (
    <div>
      <>Testing</>
      <button onClick={refetch}>Refetch</button>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching data: {data?.error}</p>}
      {data && (
        <div>
          <h2>Data fetched successfully:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
