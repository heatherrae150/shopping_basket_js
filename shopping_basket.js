var Item = require("./item");

var ShoppingBasket = function(discountCard) {
  this.items = [];
  this.discountCard = discountCard;
}

module.exports = ShoppingBasket;

ShoppingBasket.prototype.addItem = function(item) {
  this.items.push(item);
  if (item.isEligible) {
    var freeItem = new Item(item.name, item.price, false);
    this.items.push(item);
    item.price = item.price/2;
    freeItem.price = freeItem.price/2;
 }
}



ShoppingBasket.prototype.addItems = function() {
  for (item of arguments) {
    this.items.push(item);
  }
}

ShoppingBasket.prototype.removeItem = function(nameOfItem) {
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].name === nameOfItem) {
      this.items.splice(i, 1);
    }
  }
}

ShoppingBasket.prototype.getTotalPrice = function() {
  var totalPrice = 0;
  var discount = 0;
  for (item of this.items) {
    totalPrice += item.price;
  }
  if (totalPrice > 20) {
    discount += totalPrice/10;
  }
  if (this.discountCard) {
    discount += totalPrice/20;
  }
  totalPrice -= discount;
  return totalPrice;
}
