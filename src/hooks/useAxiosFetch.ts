import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';

export const useAxiosFetch = (params: AxiosRequestConfig<any>) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await axios.request(params);
      setData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError('Axios Error with Message: ' + error.message);
      } else {
        setError(error);
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, error, loading, fetchData] as const;
};
