import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <h2>Product List</h2>
      </div>

      <div className='buttons'>
        <button className="btn btn-primary" id="add-product-btn">Add</button>
        <button className="btn btn-primary" id="delete-product-btn">Mass Delete</button>
      </div>
    </header>
  );
}

export default Header;
