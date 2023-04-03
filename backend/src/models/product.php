<?php
// The base class for all products, it has the base properties and a function to add it to the database
abstract class Product {
  public int $id;
  public string $sku;
  public string $name;
  public float $price;

  abstract function AddToDatabase();
}
?>