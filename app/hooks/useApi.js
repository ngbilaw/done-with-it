import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    let response;
    try {
      response = await apiFunc(...args);
      setLoading(false);
    } catch (error) {
      setError(!response.ok);
      return response
    }

    setData(response.data);
    return response;
  };

  return {
    data, error, loading, request
  }
};
