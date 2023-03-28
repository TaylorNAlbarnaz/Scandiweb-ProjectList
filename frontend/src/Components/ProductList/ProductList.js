import { useState, useEffect } from 'react';

import './ProductList.css';
import { Product } from '../';

function ProductList() {
  const [products, setProducts] = useState([{sku: "JVC200123", name: "Acme Disc",
    price: "1.00", size: "700 MB"}]);

  function getSampleProducts() {
    const product = {};
    product.sku = "JVC200123";
    product.name = "Acme Disc";
    product.price = "1.00";
    product.size = "700 MB";

    let productList = new Array(20).fill(product);
    console.log(productList);
    setProducts(productList);
  }

  useEffect(() => {
    getSampleProducts();
  }, []);

  return (
    <section className='product-list'>
      {products.map((product, id)=>{
         return <Product
                  key={id}
                  sku={product.sku}
                  name={product.name}
                  price={product.price}
                  size={product.size}
                />
      })}
    </section>
  );
}

export default ProductList;
