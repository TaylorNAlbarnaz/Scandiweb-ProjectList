import './DeleteModal.css';

function DeleteModal(props) {
  return (
    <div className='delete-modal'>
      <div className='delete-dialog bg-dark'>
        <span>Are you sure?</span>

        <div className='delete-buttons'>
          <button className='btn btn-danger'>Delete</button>
          <button className='btn btn-secondary' onClick={() => props.onCancel()}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
