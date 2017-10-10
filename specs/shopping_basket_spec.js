var assert = require("assert");
var Item = require("../item");
var ShoppingBasket = require("../shopping_basket");

describe("Shopping Basket", function() {

  var basket;
  var basket2;
  var item1;
  var item2;
  var item3;

  beforeEach(function() {
    basket = new ShoppingBasket(false);
    basket2 = new ShoppingBasket(true)
    item1 = new Item("Milk", 2, false);
    item2 = new Item("Biscuits", 3, true);
    item3 = new Item("Milk", 40, false);
  });

  it("should start empty", function() {
    assert.strictEqual(basket.items.length, 0);
  });

  it("can add 1 item", function() {
    basket.addItem(item1);
    assert.strictEqual(basket.items.length, 1);
  });

  it("can add multiple items", function() {
    basket.addItems(item1, item2);
    assert.strictEqual(basket.items.length, 2);
  });

  it("can remove item", function() {
    basket.addItems(item1, item2);
    basket.removeItem("Milk");
    assert.strictEqual(basket.items.length, 1);
    assert.strictEqual(basket.items[0].name, "Biscuits");
  });

  it("can remove multiple items", function() {
    basket.addItems(item1, item2, item3);
    basket.removeItem("Milk");
    assert.strictEqual(basket.items.length, 1);
  });

  it("can get total price", function() {
    basket.addItems(item1, item2);
    assert.strictEqual(basket.getTotalPrice(), 5);
  });

  it("can get total price including 10% discount", function() {
    basket.addItems(item1, item2, item3);
    assert.strictEqual(basket.getTotalPrice(), 40.5);
  });

  it("can have a discount card", function() {
    assert.strictEqual(basket2.discountCard, true);
  });

  it("can get total price including 5% discount", function() {
    basket2.addItems(item1, item2);
    assert.strictEqual(basket2.getTotalPrice(), 4.75);
  });

  it("can get total price including 10% and 5% discounts", function() {
    basket2.addItems(item1, item2, item3);
    assert.strictEqual(basket2.getTotalPrice(), 38.25);
  });

  it("can add BOGOF item", function() {
    basket.addItem(item2);
    assert.strictEqual(basket.items.length, 2);
    assert.strictEqual(basket.getTotalPrice(), 3);
  });

});
