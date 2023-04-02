<?php
require_once __DIR__ . '/src/db.php';

// Models
require_once __DIR__ . '/src/models/book.php';
require_once __DIR__ . '/src/models/dvd.php';
require_once __DIR__ . '/src/models/furniture.php';

// Settings to allow for any type of request
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

class API {
    function GetProducts() {
        $db = new Connection();

        // Gets every single product and orders them by id
        $query = $db->prepare('SELECT * FROM products ORDER BY id');
        $query->execute();

        // Returns the treated data from the database
        return $this->TreatData($query);
    }

    function AddBook($book)
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("INSERT INTO products (sku, name, price, weight, type)
                                VALUES (:sku, :name, :price, :weight, :type");

      // Executes the query with it's parameters and creates a DVD in the database
      $query->execute(array(
        ':sku' => $book->sku,
        ':name' => $book->name,
        ':price' => $book->price,
        ':weight' => $book->size,
        ':type' => 1,
      ));
    }

    function AddDVD($dvd)
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("INSERT INTO products (sku, name, price, size, type)
                                VALUES (:sku, :name, :price, :size, :type");

      // Executes the query with it's parameters and creates a DVD in the database
      $query->execute(array(
        ':sku' => $dvd->sku,
        ':name' => $dvd->name,
        ':price' => $dvd->price,
        ':size' => $dvd->size,
        ':type' => 2,
      ));
    }

    function AddFurniture($furniture)
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("INSERT INTO products (sku, name, price, width, height, length, type)
                                VALUES (:sku, :name, :price, :width, :height, :length, :type");

      // Executes the query with it's parameters and creates a DVD in the database
      $query->execute(array(
        ':sku' => $furniture->sku,
        ':name' => $furniture->name,
        ':price' => $furniture->price,
        ':width' => $furniture->width,
        ':height' => $furniture->height,
        ':length' => $furniture->length,
        ':type' => 2,
      ));
    }

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
                'id'            => $OutputData['id'],
                'sku'          => $OutputData['sku'],
                'name'    => $OutputData['name'],
                'price'           => $OutputData['price'],
                'size'       => $OutputData['size'],
                'width'         => $OutputData['width'],
                'height'      => $OutputData['height'],
                'length'   => $OutputData['length'],
                'weight'   => $OutputData['weight']
            );
        }
        
        return $products;
    }
}

// Configures all of the API's routes
$API = new API();

$method = $_SERVER['REQUEST_METHOD'];
if ($method == 'GET')
{
  echo json_encode($API->GetProducts());
}

if ($method == 'POST')
{
    try {
        $API->CriarCliente($Requisicao->dados);
        echo "Product succesfully added!";
    } catch (Exception $ex) {
        echo "There was a problem while adding the product. ";
        echo $ex->getMessage();
    }
}

if ($method == 'DELETE')
{
    try {
        $API->DeleteProduct($_REQUEST['sku']);

        echo "Product succesfully deleted!";
    } catch (Exception $ex) {
        echo "There was a problem while deleting the product. ";
        echo $ex->getMessage();
    }
}
?>