import { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:3004';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseURL}${url}`);
        setData(response.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
