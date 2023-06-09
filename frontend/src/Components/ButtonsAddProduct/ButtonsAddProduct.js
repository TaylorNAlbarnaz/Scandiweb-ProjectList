import { Link } from 'react-router-dom';

function ButtonsAddProduct() {
  return (
      <div className='buttons'>
        <button type='submit' form='product_form' className='btn btn-primary' id='add-product-btn'>
          Save
        </button>

        <Link to='/'>
          <button className='btn btn-secondary' id='add-product-btn'>
            Cancel
          </button>
        </Link>
      </div>
  );
}

export default ButtonsAddProduct;
