import { useState } from 'react';
import './ProductSingle.css';

function ProductSingle(props) {
  const [selected, setSelected] = useState(false);

  function selectProduct() {
    setSelected(!selected);
    props.onSelect();
  }

  return (
    <div className={selected ? 'product selected' : 'product'} onClick={() => selectProduct()}>
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

export default ProductSingle;
