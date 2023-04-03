import { useContext } from 'react';
import { Header, ProductList} from '../Components';

import { ProductsContext } from '../App';
import { getProducts, removeProductBySKU } from '../Services/ProductService';

function MainPage() {
  let [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);

  async function massDelete() {
    // Get all projects to delete
    const checkboxes = document.getElementsByClassName('delete-checkbox');
    for (const checkbox of checkboxes) {
      const productSku = checkbox.id;
      if (checkbox.checked) {
        productsToDelete.push(productSku);
      }
    }

    // Remove all projects from the database
    for (const sku of productsToDelete) {
      console.log(sku);
      await removeProductBySKU(sku);
    }
    
    // Updates the projects list
    const productList = await getProducts();
    setProducts(productList);

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
