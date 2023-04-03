<?php
define("__ROOT__", __DIR__);
require_once __ROOT__ . '/src/db.php';

// Models
require_once __ROOT__ . '/src/models/book.php';
require_once __ROOT__ . '/src/models/dvd.php';
require_once __ROOT__ . '/src/models/furniture.php';

// Settings to allow for any type of request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

class API {
    // Gets a list of all products
    function GetProducts() {
        $db = new Connection();

        // Gets every single product and orders them by id
        $query = $db->prepare('SELECT * FROM products ORDER BY id');
        $query->execute();

        // Returns the treated data from the database
        return $this->TreatData($query);
    }

    // Delete the product from the database based on it's SKU
    function DeleteProduct($sku)
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("DELETE FROM products WHERE sku = :sku");

      // Executes the query, deleting the product if it exists
      $query->execute(array(
        ':sku' => $sku
      ));
    }

    // Treats the json data received by a query from the database and turns it into an array
    function TreatData($query) {
      $products = array();
      while ($OutputData = $query->fetch(PDO::FETCH_ASSOC))
      {
        $products[] = array(
          'id'        => $OutputData['id'],
          'sku'       => $OutputData['sku'],
          'name'      => $OutputData['name'],
          'price'     => $OutputData['price'],
          'size'      => $OutputData['size'],
          'width'     => $OutputData['width'],
          'height'    => $OutputData['height'],
          'length'    => $OutputData['length'],
          'weight'    => $OutputData['weight'],
          'type'      => $OutputData['type']
        );
      }
        
      return $products;
    }
}

// Configures all of the API's routes
$API = new API();
$method = $_SERVER['REQUEST_METHOD'];

// Gets a list of all products in a GET request
if ($method == 'GET')
{
  try {
    echo json_encode($API->GetProducts());
  } catch (Exception $ex) {
    echo "There was a problem while getting the products from the database. ";
    echo $ex->getMessage();
  }
}

// Adding and Deleting Products in the POST request
if ($method == 'POST')
{
  $json = file_get_contents('php://input');
  $data = json_decode($json);
  
  if (isset($_REQUEST['sku'])) {
    // Since 000webhost doesn't allow Delete methods, if a SKU parameter is set in the post act as a DELETE
    try {
      $API->DeleteProduct($_REQUEST['sku']);
  
      echo "Product succesfully deleted!";
    } catch (Exception $ex) {
      echo "There was a problem while deleting the product to the database. ";
      echo $ex->getMessage();
    }
  } else {
    // If the SKU parameter is not set, then just act as a POST
    try {
      $newProduct = null;
      switch ($data->type) {
        case 1:
          $newProduct = new Book($data->sku, $data->name, $data->price, $data->weight);
          break;
        case 2:
          $newProduct = new DVD($data->sku, $data->name, $data->price, $data->size);
          break;
        case 3:
          $newProduct = new Furniture($data->sku, $data->name, $data->price, $data->width, $data->height, $data->length);
          break;
        }
      
        $newProduct->AddToDatabase();
      echo "Product succesfully added!";
    } catch (Exception $ex) {
      echo "There was a problem while adding the product to the database. ";
      echo $ex->getMessage();
    }
  }
}
?>