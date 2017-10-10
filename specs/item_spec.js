var assert = require("assert");
var Item = require("../item");
var ShoppingBasket = require("../shopping_basket");

describe("Item", function() {

  var item1;
  var item2;

  beforeEach(function() {
    item1 = new Item("Milk", 2, false);
    item2 = new Item("Biscuits", 3, true);
  });

  it("should have a name", function() {
    assert.strictEqual(item1.name, "Milk");
  });

  it("should have a price", function() {
    assert.strictEqual(item1.price, 2);
  });

  it("should have a boolean value", function() {
    assert.strictEqual(item1.isEligible, false);
  });

});
