<?php
// The base class for all products, it has the base properties and a function to add it to the database
abstract class Product {
  public $id;
  public $sku;
  public $name;
  public $price;

  abstract function AddToDatabase();
}
?>