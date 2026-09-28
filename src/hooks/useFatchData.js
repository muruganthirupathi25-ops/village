import { useEffect, useState } from "react";
import axios from "axios";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(url);

        setData(response.data);
      } catch (error) {
        setError("Unable to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetchD'''''''l,,,ata;