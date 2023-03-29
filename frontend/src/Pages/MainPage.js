import { useState, createContext } from 'react';
import { Header, ProductList} from '../Components';

export const ProductsContext = createContext();

function MainPage() {
  let [products, setProducts] = useState([]);
  let [productsToDelete, setProductsToDelete] = useState([]);

  function massDelete() {
    // Filters only products that aren't part of productsToDelete
    products = products.filter(p => productsToDelete.indexOf(p) == -1);
    setProducts(products);
    setProductsToDelete([]);
  }

  return (
    <ProductsContext.Provider value={[products, setProducts, productsToDelete ,setProductsToDelete]}>
      <div className='container'>
        <Header onDelete={() => massDelete()}/>
        <ProductList/>
      </div>
    </ProductsContext.Provider>
  );
}

export default MainPage;
