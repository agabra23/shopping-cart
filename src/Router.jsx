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

  const deleteItem = (id) => {
    let targetIndex = 0;
    cart.forEach((item, index) => {
      if (item.id === id) targetIndex = index;
    });

    let tempCart = [...cart];
    tempCart.splice(targetIndex, 1);
    setCart(tempCart);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App itemCount={cart.length} />,
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
          element: (
            <Checkout
              cart={cart}
              handleQuantityChange={handleQuantityChange}
              deleteItem={deleteItem}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
