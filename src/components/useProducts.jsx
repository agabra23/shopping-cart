import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=5`
        );
        setProductList(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProductList(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { productList, error, isLoading };
};

export default useProducts;
