<?php
require_once __ROOT__ . '/src/db.php';
require_once __DIR__ . '/product.php';

class Book extends Product {
  public $weight;

  public function __construct(string $sku, string $name, int $price, int $weight)
  {
    $this->sku = $sku;
    $this->name = $name;
    $this->price = $price;
    $this->weight = $weight;
  }

  public function AddToDatabase()
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("INSERT INTO products (sku, name, price, weight, type)
                                VALUES (:sku, :name, :price, :weight, :type);");

      // Executes the query with it's parameters and adds a Book to the database
      $query->execute(array(
        ':sku' => $this->sku,
        ':name' => $this->name,
        ':price' => $this->price,
        ':weight' => $this->weight,
        ':type' => 1,
      ));
    }
}
?>