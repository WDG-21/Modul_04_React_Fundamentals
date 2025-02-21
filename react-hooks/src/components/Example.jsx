import axios from 'axios';
import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';

function Example() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error('error fetching products', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Oval
        visible={true}
        height='80'
        width='80'
        color='#4fa94d'
        ariaLabel='oval-loading'
        wrapperStyle={{}}
        wrapperClass=''
      />
    );
  }

  //   console.log(products);

  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt='something' width='20%' />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <p>
            {product.rating.rate} / 5 by {product.rating.count} Reviews
          </p>
          <button>add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Example;
