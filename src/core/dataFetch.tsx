import { useCallback, useEffect, useState } from "react";
const BASE_URL = "https://api.escuelajs.co/api/v1";

const dataFetch = (url: string, options = {}) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${url}`, options);
      if (!response.ok) {
        throw new Error("Fail to load API");
      }
      const result = await response.json();
      setData(result);
      setError(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setData(null);
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading, fetchData };
};

export default dataFetch;
