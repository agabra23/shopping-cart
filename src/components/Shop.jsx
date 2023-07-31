import "../styles/Shop.css";

export default function Shop({ productList, error, isLoading, addToCart }) {
  const formatPrice = (price) => {
    return price.toFixed(2);
  };

  if (error) return <p>A network error was encountered</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    productList && (
      <>
        <div className="products-grid">
          <h2>Shop</h2>

          <ul>
            {productList.map((product) => {
              return (
                <div className="product-div" key={product.id}>
                  <img src={product.image} alt={product.title} width="100px" />
                  <div className="content-div">
                    <h4>{product.title}</h4>
                    <p>{product.category}</p>
                  </div>
                  <div className="btn-div">
                    <h4>${formatPrice(product.price)}</h4>
                    <button onClick={() => addToCart(product)}>
                      Add to cart
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </>
    )
  );
}
