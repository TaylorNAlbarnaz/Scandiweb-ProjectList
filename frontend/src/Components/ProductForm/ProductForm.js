import { useState } from 'react';
import './ProductForm.css';

function ProductForm() {
  const [type, setType] = useState(1);
  const [error, setError] = useState(false);

  const changeProductType = (e) => {
    setType(e.target.value);
  };
  
  return (
    <form id='product_form'>
      <div className='form-group row'>
        <label for='sku' className='col-sm-2 col-form-label'>SKU</label>
        <div class='col-sm-10'>
          <input type='text' class='form-control' id='sku'/>
        </div>
      </div>

      <div className='form-group row'>
        <label for='name' className='col-sm-2 col-form-label'>Name</label>
        <div class='col-sm-10'>
          <input type='text' class='form-control' id='name'/>
        </div>
      </div>

      <div className='form-group row'>
        <label for='price' className='col-sm-2 col-form-label'>Price ($)</label>
        <div class='col-sm-10'>
          <input type='number' class='form-control' id='price'/>
        </div>
      </div>

      <div className='form-group row'>
        <label for='productType' className='col-sm-2 col-form-label'>Type Switcher</label>
        <div class='col-sm-10'>
          <select value={type} onChange={changeProductType} class="form-select mb-3" id="productType">
            <option value="1" selected>DVD</option>
            <option value="2">Furniture</option>
            <option value="3">Book</option>
          </select>
        </div>
      </div>

      {type == 1 && // DVD Inputs
        <>
          <div className='d-flex justify-content-center'>
            <span className='description'>Please, provide size</span>
          </div>
          <div className='form-group row'>
            <label for='size' className='col-sm-2 col-form-label'>Size (MB)</label>
            <div class='col-sm-10'>
              <input type='number' class='form-control' id='size'/>
            </div>
          </div>
        </>
      }

      {type == 2 && // Furniture Inputs
        <>
          <div className='d-flex justify-content-center'>
            <span className='description'>Please, provide dimensions</span>
          </div>

          <div className='form-group row'>
            <label for='height' className='col-sm-2 col-form-label'>Height (CM)</label>
            <div class='col-sm-10'>
              <input type='number' class='form-control' id='height'/>
            </div>
          </div>

          <div className='form-group row'>
            <label for='width' className='col-sm-2 col-form-label'>Width (CM)</label>
            <div class='col-sm-10'>
              <input type='number' class='form-control' id='width'/>
            </div>
          </div>

          <div className='form-group row'>
            <label for='length' className='col-sm-2 col-form-label'>Length (CM)</label>
            <div class='col-sm-10'>
              <input type='number' class='form-control' id='length'/>
            </div>
          </div>
        </>
      }

      {type == 3 && // Book Inputs
        <>
          <div className='d-flex justify-content-center'>
            <span className='description'>Please, provide weight</span>
          </div>

          <div className='form-group row'>
            <label for='weight' className='col-sm-2 col-form-label'>Weight (KG)</label>
            <div class='col-sm-10'>
              <input type='number' class='form-control' id='weight'/>
            </div>
          </div>
        </>
      }
      {error &&
        <div className='error'>
          <span className='text-danger'>Please, submit required data</span>
        </div>
      }
    </form>
  );
}

export default ProductForm;
