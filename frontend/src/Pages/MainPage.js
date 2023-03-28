import { useRef } from 'react';
import { Header, ProductList} from '../Components';

function MainPage() {
  const productsToDelete = useRef([]);

  function massDelete() {
    console.log("Products Deleted", productsToDelete);
  }

  return (
    <div className='container'>
      <Header onDelete={() => massDelete()}/>
      <ProductList deleteRef={productsToDelete}/>
    </div>
  );
}

export default MainPage;
