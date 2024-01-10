import { useState, useEffect } from "react";
import axios from "axios";

const useCrud = (baseUrl) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl]);

  const createItem = async (newItem) => {
    try {
      const response = await axios.post(baseUrl, newItem);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      setError(error);
    }
  };

  const updateItem = async (itemId, updatedItem) => {
    try {
      await axios.put(`${baseUrl}/${itemId}`, updatedItem);
      setData((prevData) =>
        prevData.map((item) => (item.id === itemId ? updatedItem : item))
      );
    } catch (error) {
      setError(error);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${baseUrl}/${itemId}`);
    } catch (error) {
      setError(error);
    }
  };

  return { data, loading, error, createItem, updateItem, deleteItem, setData };
};

export default useCrud;
