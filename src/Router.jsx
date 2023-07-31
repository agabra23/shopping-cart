import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { useState } from "react";
import useProducts from "./components/useProducts";

export default function Router() {
  const { productList, error, isLoading } = useProducts();

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
            />
          ),
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
