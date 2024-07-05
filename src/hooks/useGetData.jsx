// hooks/useGetData.js
import { useEffect, useState } from 'react';
import axios from 'axios'; // Example - adjust based on your data fetching method

const useGetData = () => {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data'); // Replace with your API endpoint
        setItemData(response.data); // Assuming your API response contains item data
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


// http://localhost:3000/data'