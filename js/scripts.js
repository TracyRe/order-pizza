//** BUSINESS LOGIC

function Pizza() {
  this.sizes = [];
  this.toppings = [];
}

var size = [
  ["large", 16],
  ["medium", 12],
  ["small", 8]
]

var toppings = [
  ["mushrooms", 2],
  ["olives", 2],
  ["pepperoni", 3],
]

Pizza.prototype.addSize = function(size) {
  this.sizes.push(size[0]);
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping[0]);
}

Pizza.prototype.price = function(size, topping) {
  return size[1] + topping[1];
}


//** UI LOGIC

$(document).ready(function(){

  var myPizza = new Pizza();

  $("#place-order").submit (function(event) {
    event.preventDefault();


  });
});
