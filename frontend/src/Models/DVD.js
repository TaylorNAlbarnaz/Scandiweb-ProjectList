import Product from "./Product";

export default class DVD extends Product {
  constructor(sku, name, price, size) {
    super(sku, name, price)
    this.size = size;
  }
}