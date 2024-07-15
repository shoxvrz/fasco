import { useEffect, useState } from "react";
import axios from "axios";

const useGetData = () => {
  const [itemData, setItemData] = useState([]);
  const [userData, setUserData] = useState([]);
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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/userData');
        setUserData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchUserData();
  }, []);

  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/userData/${id}`);
      setUserData((prevUsers) => prevUsers.filter(user => user.id !== id));
    } catch (error) {
      setError(error);
    }
  };

  return { itemData, userData, loading, error, deleteItem, setItemData };
};

export default useGetData;
