import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://contact.mediusware.com/api/';

const useDynamicDataFetching = (endpoint, searchTerm) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await axios.get(BASE_URL + endpoint + `?search=${searchTerm}`);
        setData(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, [endpoint, searchTerm]);

  return { data, loading, error };
};

export default useDynamicDataFetching;
