import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import { Book, DVD, Furniture } from './Models';

import MainPage from './Pages/MainPage';
import AddProductPage from './Pages/AddProductPage';

export const ProductsContext = createContext();

function App() {
  let [products, setProducts] = useState([]);
  let [productsToDelete, setProductsToDelete] = useState([]);

  function getSampleProducts() {
    const productList = [];

    // Generates 4 sample DVDs
    for (let i = 0; i < 4; i++) {
      const product = new DVD("JVC200123", "Acme Disc", "1.00", "700 MB");
      product.sku += i;
      product.type = 1;
      productList.push(product);
    }

    // Generates 4 sample Furnitures
    for (let i = 0; i < 4; i++) {
      const product = new Furniture("FNU200123", "Acme Disc Player", "1.00", "100", "200", "300");
      product.sku += i;
      product.type = 2;
      productList.push(product);
    }

    // Generates 4 sample Books
    for (let i = 0; i < 4; i++) {
      const product = new Book("BKK200123", "Acme Book", "1.00", "6KG");
      product.sku += i;
      product.type = 3;
      productList.push(product);
    }

    setProducts(productList);
  }

  useEffect(() => {
    getSampleProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[products, setProducts, productsToDelete ,setProductsToDelete]}>
      <Routes>
          <Route exact path="/" Component={MainPage}/>
          <Route exact path="/add-product" Component={AddProductPage}/>
      </Routes>
    </ProductsContext.Provider>
  );
}

export default App;
