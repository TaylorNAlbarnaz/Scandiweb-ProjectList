import { useState, createContext, useContext } from 'react';
import { Header, ProductList} from '../Components';

import { ProductsContext } from '../App';

function MainPage() {
  let [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);

  function massDelete() {
    // Filters only products that aren't part of productsToDelete
    products = products.filter(p => productsToDelete.indexOf(p) == -1);
    setProducts(products);
    setProductsToDelete([]);
  }

  return (
    <div className='container'>
      <Header onDelete={() => massDelete()}/>
      <ProductList/>
    </div>
  );
}

export default MainPage;
