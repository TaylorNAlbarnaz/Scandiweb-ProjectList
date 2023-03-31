import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, DVD, Furniture } from '../../Models';
import './ProductForm.css';

import { ProductsContext } from '../../App';

function ProductForm() {
  const [products, setProducts] = useContext(ProductsContext);
  const [type, setType] = useState(1);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const changeProductType = (e) => {
    setType(e.target.value);
  };

  function addProduct(e) {
    e.preventDefault();

    createProduct();
  }

  function createProduct() {
    let newProduct = null;
    setError(false);

    // Gets the pd(Product Data) from all input fields
    const pd = {};
    pd.sku = document.getElementById('sku')?.value;
    pd.name = document.getElementById('name')?.value;
    pd.price = document.getElementById('price')?.value;
    pd.size = document.getElementById('size')?.value;
    pd.height = document.getElementById('height')?.value;
    pd.width = document.getElementById('width')?.value;
    pd.length = document.getElementById('length')?.value;
    pd.weight = document.getElementById('weight')?.value;

    // Gets the current selected type of product and validates the project data input
    const type = parseInt(document.getElementById('productType').value);
    if (!isProductDataValid(pd, type)) {
      return;
    }

    // If data is valid, create an instance of the object
    switch (type) {
      case 1:
        newProduct = new DVD(pd.sku, pd.name, pd.price, pd.size);
        break;
      case 2:
        newProduct = new Furniture(pd.sku, pd.name, pd.price, pd.height, pd.width, pd.length);
        break;
      case 3:
        newProduct = new Book(pd.sku, pd.name, pd.price, pd.weight);
        break;
    }
    
    // Posts the object and goes back to main page
    products.push(newProduct)
    setProducts(products);
    navigate('/');
  }

  function isProductDataValid(pd, type) {
    if (!pd.sku || !pd.name || !pd.price) {
      setError(true);
      return false;
    }

    switch (type) {
      case 1:
        if (!pd.size) {
          setError(true);
          return false;
        }
        break;
      case 2:
        if (!pd.height || !pd.width || !pd.length) {
          setError(true);
          return false;
        }
        break;
      case 3:
        if (!pd.weight) {
          setError(true);
          return false;
        }
        break;
    }

    return true;
  }
  
  return (
    <form id='product_form' onSubmit={addProduct}>
      <div className='form-group row'>
        <label htmlFor='sku' className='col-sm-2 col-form-label'>SKU</label>
        <div className='col-sm-10'>
          <input type='text' className='form-control' id='sku'/>
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor='name' className='col-sm-2 col-form-label'>Name</label>
        <div className='col-sm-10'>
          <input type='text' className='form-control' id='name'/>
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor='price' className='col-sm-2 col-form-label'>Price ($)</label>
        <div className='col-sm-10'>
          <input type='number' className='form-control' id='price'/>
        </div>
      </div>

      <div className='form-group row'>
        <label htmlFor='productType' className='col-sm-2 col-form-label'>Type Switcher</label>
        <div className='col-sm-10'>
          <select value={type} onChange={changeProductType} className="form-select mb-3" id="productType">
            <option value="1">DVD</option>
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
            <label htmlFor='size' className='col-sm-2 col-form-label'>Size (MB)</label>
            <div className='col-sm-10'>
              <input type='number' className='form-control' id='size'/>
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
            <label htmlFor='height' className='col-sm-2 col-form-label'>Height (CM)</label>
            <div className='col-sm-10'>
              <input type='number' className='form-control' id='height'/>
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='width' className='col-sm-2 col-form-label'>Width (CM)</label>
            <div className='col-sm-10'>
              <input type='number' className='form-control' id='width'/>
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='length' className='col-sm-2 col-form-label'>Length (CM)</label>
            <div className='col-sm-10'>
              <input type='number' className='form-control' id='length'/>
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
            <label htmlFor='weight' className='col-sm-2 col-form-label'>Weight (KG)</label>
            <div className='col-sm-10'>
              <input type='number' className='form-control' id='weight'/>
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
