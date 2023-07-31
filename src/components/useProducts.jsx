import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [productList, setProductList] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products?limit=5`
        );
        setProductList(response.data);
        setError(null);
      } catch (err) {
        setError(er.message);
        setProductList(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { productList, error, loading };
};

export default useProducts;
