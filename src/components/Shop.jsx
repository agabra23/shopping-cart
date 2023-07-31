import useProducts from "./useProducts";

export default function Shop() {
  const { productList, error, isLoading } = useProducts();

  if (error) return <p>A network error was encountered</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    productList && (
      <ul>
        {productList.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    )
  );
}
