import { Link } from 'react-router-dom';

function ButtonsMain(props) {
  return (
      <div className='buttons'>
        <Link to='/add-product'>
          <button className='btn btn-primary' id='add-product-btn'>
            ADD
          </button>
        </Link>

        <button className='btn btn-danger' id='delete-product-btn' onClick={props.onDelete}>
          MASS DELETE
        </button>
      </div>
  );
}

export default ButtonsMain;
