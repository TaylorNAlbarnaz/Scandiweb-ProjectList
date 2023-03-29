import { useState } from 'react';
import './ProductSingle.css';

function ProductSingle({ product, type, onSelect }) {
  const [selected, setSelected] = useState(false);

  function selectProduct() {
    setSelected(!selected);
    onSelect();
  }

  return (
    <div className={ selected ? 'product selected' : 'product' } onClick={() => selectProduct()}>
      <div className='delete-checkbox'> { selected && 'X'} </div>

      <div className='product-details'>
        <span>{product.sku}</span>
        <span>{product.name}</span>
        <span>{product.price} $</span>

        {/*DVD*/}
        {type == 1 &&
          <span>Size: {product.size}</span>
        }

        {/*Furniture*/}
        {type == 2 &&
          <span>Dimensions: {product.height}x{product.width}x{product.length}</span>
        }

        {/*Book*/}
        {type == 3 &&
          <span>Weight: {product.weight}</span>
        }
      </div>
    </div>
  );
}

export default ProductSingle;
