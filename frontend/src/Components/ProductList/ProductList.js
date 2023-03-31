import { useContext } from 'react';
import './ProductList.css';

import { ProductSingle } from '../';
import { ProductsContext } from '../../App';

function ProductList() {
  const [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);

  function updateProductsToDelete(product) {
    var index = productsToDelete.indexOf(product);

    // If already in the list, remove it, if not, add it
    if (index !== -1) {
      productsToDelete.splice(index, 1);
    } else {
      productsToDelete.push(product);
    }

    // Update parent's reference to the list
    setProductsToDelete(productsToDelete);
  }

  return (
    <section className='product-list'>
      {products.map((product)=>{
         return <ProductSingle
                  key={product.name}
                  product={product}
                  type={product.type}
                  onSelect={() => updateProductsToDelete(product)}
                />
      })}
    </section>
  );
}

export default ProductList;
