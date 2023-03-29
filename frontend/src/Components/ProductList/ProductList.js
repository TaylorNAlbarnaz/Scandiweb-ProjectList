import { useEffect, useContext } from 'react';

import './ProductList.css';
import { ProductSingle } from '../';
import { ProductsContext } from '../../Pages/MainPage';

import { Book, DVD, Furniture } from '../../Models/';

function ProductList() {
  const [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);

  function getSampleProducts() {
    const productList = [];

    // Generates 4 sample DVDs
    for (let i = 0; i < 4; i++) {
      const product = new DVD("JVC200123", "Acme Disc", "1.00", "700 MB");
      product.name += i;
      product.type = 1;
      productList.push(product);
    }

    // Generates 4 sample Furnitures
    for (let i = 0; i < 4; i++) {
      const product = new Furniture("FNU200123", "Acme Disc Player", "1.00", "100", "200", "300");
      product.name += i;
      product.type = 2;
      productList.push(product);
    }

    // Generates 4 sample Books
    for (let i = 0; i < 4; i++) {
      const product = new Book("BKK200123", "Acme Book", "1.00", "6KG");
      product.name += i;
      product.type = 3;
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
                  product={product}
                  type={product.type}
                  onSelect={() => updateProductsToDelete(product)}
                />
      })}
    </section>
  );
}

export default ProductList;
