import { Header, ProductForm } from "../Components/";

function AddProductPage() {
  return (
    <div className='container'>
      <Header AddProduct/>
      <ProductForm/>
    </div>
  );
}

export default AddProductPage;
