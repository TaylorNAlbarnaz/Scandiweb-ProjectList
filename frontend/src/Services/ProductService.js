const URL = 'https://lightproductlist.000webhostapp.com';

// Gets all products in the database
export async function getProducts() {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
      console.error(error)
      return [];
  }
}

// Adds a new product to the database
export async function addProduct(product) {
  try {
      await fetch(URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
  } catch (error) {
      console.error(error);
  }
}

// Removes a product from the database through it's sku
export async function removeProductBySKU(sku) {
  try {
    await fetch(`${URL}/?sku=${sku}`, {
      method: 'POST',
      headers: {
        'Accept': '*/*'
      }
    });
  } catch (error) {
    console.error(error);
  }
}