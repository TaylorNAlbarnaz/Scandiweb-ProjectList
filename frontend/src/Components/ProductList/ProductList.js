import { useContext } from 'react';
import './ProductList.css';

import { ProductSingle } from '../';
import { ProductsContext } from '../../App';

function ProductList() {
  const [products] = useContext(ProductsContext);

  return (
    <section className='product-list'>
      {products.map((product)=>{
         return <ProductSingle
                  key={product.sku}
                  product={product}
                  type={product.type}
                />
      })}
    </section>
  );
}

export default ProductList;
