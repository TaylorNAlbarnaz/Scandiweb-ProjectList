import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, DVD, Furniture } from '../../Models';
import './ProductForm.css';

import { ProductsContext } from '../../App';
import { addProduct, getProducts } from '../../Services/ProductService';

function ProductForm() {
  const [products, setProducts, productsToDelete, setProductsToDelete] = useContext(ProductsContext);
  const [type, setType] = useState(1);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const changeProductType = (e) => {
    setType(e.target.value);
  };

  async function createProduct(e) {
    e.preventDefault();

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
    if (await isProductDataValid(pd, type) == false) {
      return;
    }

    // If data is valid, create an instance of the object
    switch (type) {
      case 1:
        newProduct = new Book(pd.sku, pd.name, pd.price, pd.weight);
        break;
      case 2:
        newProduct = new DVD(pd.sku, pd.name, pd.price, pd.size);
        break;
      case 3:
        newProduct = new Furniture(pd.sku, pd.name, pd.price, pd.height, pd.width, pd.length);
        break;
    }
    newProduct.type = type;

    // Posts the object and goes back to main page
    await addProduct(newProduct);
    const productList = await getProducts();
    setProducts(productList);

    navigate('/');
  }

  async function isProductDataValid(pd, type) {
    // Checks if the basic properties are set
    if (!pd.sku || !pd.name || !pd.price) {
      setError("Please, submit required data");
      return false;
    }

    // Check if the SKU is unique
    let products = await getProducts();
    products = products.filter(p => p.sku == pd.sku);
    if (products.length > 0) {
      setError("There is already a product with this SKU!");
      return false;
    }

    // Check for individual properties for each type
    switch (type) {
      case 1:
        if (!pd.weight) {
          setError("Please, submit required data");
          return false;
        }
        break;
      case 2:
        if (!pd.size) {
          setError("Please, submit required data");
          return false;
        }
        break;
      case 3:
        if (!pd.height || !pd.width || !pd.length) {
          setError("Please, submit required data");
          return false;
        }
        break;
    }

    return true;
  }
  
  return (
    <form id='product_form' onSubmit={createProduct}>
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
            <option value="1">Book</option>
            <option value="2">DVD</option>
            <option value="3">Furniture</option>
          </select>
        </div>
      </div>

      {type == 1 && // Book Inputs
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

      {type == 2 && // DVD Inputs
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

      {type == 3 && // Furniture Inputs
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

      {error &&
        <div className='error'>
          <span className='text-danger'>{error}</span>
        </div>
      }
    </form>
  );
}

export default ProductForm;
