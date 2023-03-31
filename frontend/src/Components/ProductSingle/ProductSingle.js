import { useState } from 'react';
import './ProductSingle.css';

function ProductSingle({ product, type }) {
  const [selected, setSelected] = useState(false);

  function selectProduct() {
    const checkbox = document.getElementById(product.sku);
    checkbox.checked = true;

    setSelected(checkbox.checked);
  }

  return (
    <div className={ selected ? 'product selected' : 'product' } onClick={() => selectProduct()}>
      <input
        className='delete-checkbox form-check-input'
        type='checkbox'
        id={product.sku}
        onClick={() => false}
      ></input>

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
