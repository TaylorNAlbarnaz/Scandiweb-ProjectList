import Product from "./Product";

export default class Book extends Product {
  constructor(sku, name, price, height, width, length) {
    super(sku, name, price);
    this.height = height;
    this.width = width;
    this.length = length;
  }
}