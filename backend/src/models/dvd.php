<?php
require_once __ROOT__ . '/src/db.php';
require_once __DIR__ . '/product.php';

class DVD extends Product {
  public int $size;

  public function __construct(string $sku, string $name, float $price, int $size)
  {
    $this->sku = $sku;
    $this->name = $name;
    $this->price = $price;
    $this->size = $size;
  }

  public function AddToDatabase()
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("INSERT INTO products (sku, name, price, size, type)
                                VALUES (:sku, :name, :price, :size, :type);");

      // Executes the query with it's parameters and adds a DVD to the database
      $query->execute(array(
        ':sku'    => $this->sku,
        ':name'   => $this->name,
        ':price'  => $this->price,
        ':size'   => $this->size,
        ':type'   => 2,
      ));
    }
}
?>