import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { useEffect, useState } from "react";
import useProducts from "./components/useProducts";

export default function Router() {
  const { productList, error, isLoading } = useProducts();
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },

        {
          path: "shop",
          element: (
            <Shop
              productList={productList}
              error={error}
              isLoading={isLoading}
              addToCart={addToCart}
            />
          ),
        },
        {
          path: "checkout",
          element: <Checkout cart={cart} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
