<?php
require_once __ROOT__ . '/src/db.php';
require_once __DIR__ . '/product.php';

class Furniture extends Product {
  public int $width;
  public int $height;
  public int $length;

  public function __construct(string $sku, string $name, float $price, int $width, int $height, int $length)
  {
    $this->sku = $sku;
    $this->name = $name;
    $this->price = $price;
    $this->width = $width;
    $this->height = $height;
    $this->length = $length;
  }

  public function AddToDatabase()
    {
      $db = new Connection();

      // Sets the query data
      $query = $db->prepare("INSERT INTO products (sku, name, price, width, height, length, type)
                                VALUES (:sku, :name, :price, :width, :height, :length, :type);");

      // Executes the query with it's parameters and creates a Furniture to the database
      $query->execute(array(
        ':sku'    => $this->sku,
        ':name'   => $this->name,
        ':price'  => $this->price,
        ':width'  => $this->width,
        ':height' => $this->height,
        ':length' => $this->length,
        ':type'   => 3,
      ));
    }
}
?>