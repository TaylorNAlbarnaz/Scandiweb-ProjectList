import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <h2>Product List</h2>
      </div>

      <div className='buttons'>
        <Link to='/add-product'>
          <button className="btn btn-primary" id="add-product-btn">
            Add
          </button>
        </Link>

        <button className="btn btn-primary" id="delete-product-btn">
          Mass Delete
        </button>
      </div>
    </header>
  );
}

export default Header;
