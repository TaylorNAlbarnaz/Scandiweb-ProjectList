import { useState, createContext, useContext } from 'react';
import { Header, ProductList} from '../Components';

import { ProductsContext } from '../App';

function MainPage() {
  let [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);

  function massDelete() {
    // Get all projects to delete
    const checkboxes = document.getElementsByClassName('delete-checkbox');
    for (const checkbox of checkboxes) {
      const productSku = checkbox.id;
      const productToDelete = products.filter(p => p.sku == productSku);
      productsToDelete.push(productToDelete);
    }

    // Filters only products that aren't part of productsToDelete
    products = products.filter(p => productsToDelete.filter(ptd => ptd == p.sku) == []);
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
