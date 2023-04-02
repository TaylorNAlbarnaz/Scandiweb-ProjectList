<?php
class Book {
  public $id;
  public $sku;
  public $name;
  public $price;
  public $weight;

  public function __construct($sku, $name, $price, $weight)
  {
    $this->sku = $sku;
    $this->name = $name;
    $this->price = $price;
    $this->weight = $weight;
  }
}
?>