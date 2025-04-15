class Product {
    static #products = [];
  
    constructor(name, description) {
      this.name = name;
      this.description = description;
    }
  
    static getAll() {
      return this.#products;
    }
  
    static add(product) {
      this.#products.push(product);
    }
  
    static findByName(name) {
      return this.#products.find(p => p.name === name);
    }
  
    static deleteByName(name) {
      const index = this.#products.findIndex(p => p.name === name);
      if (index !== -1) {
        this.#products.splice(index, 1);
      }
    }
  
    static getLast() {
      if (this.#products.length === 0) {
        return null;
      }
      return this.#products[this.#products.length - 1];
    }
  }
  
  module.exports = Product;
