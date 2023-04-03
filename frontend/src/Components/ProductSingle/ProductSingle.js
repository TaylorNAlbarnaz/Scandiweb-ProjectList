import { useState } from 'react';
import './ProductSingle.css';

function ProductSingle({ product, type }) {
  const [selected, setSelected] = useState(false);

  function selectProduct() {
    const checkbox = document.getElementById(product.sku);
    checkbox.checked = !checkbox.checked;

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
        <span>{Number(product.price).toFixed(2)} $</span>

        {/*Book*/}
        {type == 1 &&
          <span>Weight: {product.weight} KG</span>
        }

        {/*DVD*/}
        {type == 2 &&
          <span>Size: {product.size} MB</span>
        }

        {/*Furniture*/}
        {type == 3 &&
          <span>Dimensions: {product.height}x{product.width}x{product.length}</span>
        }
      </div>
    </div>
  );
}

export default ProductSingle;
