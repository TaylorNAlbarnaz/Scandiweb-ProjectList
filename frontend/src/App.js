import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import { getProducts } from './Services/ProductService';

import MainPage from './Pages/MainPage';
import AddProductPage from './Pages/AddProductPage';

export const ProductsContext = createContext();

function App() {
  let [products, setProducts] = useState([]);
  let [productsToDelete, setProductsToDelete] = useState([]);

  async function getDatabaseProducts() {
    const productList = await getProducts();
    setProducts(productList);
  }

  useEffect(() => {
    getDatabaseProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts, productsToDelete, setProductsToDelete]}>
      <Routes>
          <Route exact path="/" Component={MainPage}/>
          <Route exact path="/add-product" Component={AddProductPage}/>
      </Routes>
    </ProductsContext.Provider>
  );
}

export default App;
