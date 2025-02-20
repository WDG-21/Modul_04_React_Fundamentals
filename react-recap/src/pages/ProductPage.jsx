function ProductPage({ product }) {
  //   const handleBuy = () => {
  //     alert('added to your cart');
  //   };

  return (
    <div>
      <h2 className='text-red-500'>{product.title}</h2>
      <img src={product.image} alt={product.title} width='20%' />
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <button onClick={() => alert('added to your Cart')}>add to Cart</button>
    </div>
  );
}

export default ProductPage;
