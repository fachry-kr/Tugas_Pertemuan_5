export class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    
    updateDetails(newName, newQuantity, newPrice) {
      this.name = newName;
      this.quantity = newQuantity;
      this.price = newPrice;
    }
  
   
    displayDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
  }
  