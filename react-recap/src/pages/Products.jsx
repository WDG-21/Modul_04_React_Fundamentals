import { products } from '../data/products';
import ProductPage from './ProductPage';

function Products() {
  return (
    <div>
      <h2>Product.JSX</h2>
      {products.map((product) => (
        <ProductPage key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;
