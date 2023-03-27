import './Header.css';
import { ButtonsMain, ButtonsAddProduct } from '../';

function Header(props) {
  return (
    <header>
      <div>
        <h2>Product {props.AddProduct ? "Add" : "List"}</h2>
      </div>

      {props.AddProduct ? 
        <ButtonsAddProduct/>
      :
        <ButtonsMain/>
      }
    </header>
  );
}

export default Header;
