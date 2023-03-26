import { useState } from 'react';
import './Product.css';

function Product() {
  const [selected, setSelected] = useState(false);

  return (
    <div className='product' onClick={() => setSelected(!selected)}>
      <div className='delete-checkbox'> { selected && 'X'} </div>

      <div className='product-details'>
        <span>JVC200123</span>
        <span>Acme Disc aaaaaaaaaaaaaaaaaaaaaaaaaaaa</span>
        <span>1.00 $</span>
        <span>Size: 700 MB</span>
      </div>
    </div>
  );
}

export default Product;
