<?php
class Furniture {
  public $id;
  public $sku;
  public $name;
  public $price;
  public $width;
  public $height;
  public $length;

  public function __construct($sku, $name, $price, $width, $height, $length)
  {
    $this->sku = $sku;
    $this->name = $name;
    $this->price = $price;
    $this->width = $width;
    $this->height = $height;
    $this->length = $length;
  }
}
?>