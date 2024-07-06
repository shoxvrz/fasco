import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/data");
        setItemData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { itemData, loading, error };
};

export default useGetData;
