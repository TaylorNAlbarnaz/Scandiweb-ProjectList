import Product from "./Product";

export default class Book extends Product {
  constructor(sku, name, price, weight) {
    super(sku, name, price);
    this.weight = weight;
  }
}