import { useState } from 'react';
import './Product.css';

function Product(props) {
  const [selected, setSelected] = useState(false);

  return (
    <div className={selected ? 'product selected' : 'product'} onClick={() => setSelected(!selected)}>
      <div className='delete-checkbox'> { selected && 'X'} </div>

      <div className='product-details'>
        <span>{props.sku}</span>
        <span>{props.name}</span>
        <span>{props.price} $</span>
        <span>Size: {props.size}</span>
      </div>
    </div>
  );
}

export default Product;
