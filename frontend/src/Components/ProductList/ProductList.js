import { useEffect, useContext } from 'react';

import './ProductList.css';
import { ProductSingle } from '../';
import { ProductsContext } from '../../Pages/MainPage';

import Product from '../../Models/Product';

function ProductList() {
  const [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);

  function getSampleProducts() {
    const productList = [];

    // Generates 20 sample products
    for (let i = 0; i < 20; i++) {
      const product = new Product("JVC200123", "Acme Disc", "1.00", "700 MB");
      product.name += i;
      productList.push(product);
    }

    setProducts(productList);
  }

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

  useEffect(() => {
    getSampleProducts();
  }, []);

  return (
    <section className='product-list'>
      {products.map((product)=>{
         return <ProductSingle
                  key={product.name}
                  sku={product.sku}
                  name={product.name}
                  price={product.price}
                  size={product.size}
                  product={product}
                  onSelect={() => updateProductsToDelete(product)}
                />
      })}
    </section>
  );
}

export default ProductList;
