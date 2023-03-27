import { Header, ProductList, DeleteModal} from '../Components';
import { useState } from 'react';

function MainPage() {
  const [deleteModal, setDeleteModal] = useState(false);

  function openDeleteModal() {
    setDeleteModal(true);
  }

  function closeDeleteModal() {
    setDeleteModal(false);
  }

  return (
    <div className='container'>
      <Header onDelete={openDeleteModal}/>
      <ProductList/>

      {deleteModal && <DeleteModal onCancel={closeDeleteModal}/>}
    </div>
  );
}

export default MainPage;
