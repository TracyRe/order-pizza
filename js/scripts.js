//** BUSINESS LOGIC

function Pizza() {
  this.size = [];
  this.toppings = [];
}

var size = [
  [large, 16]
  [medium, 12]
  [small, 8]
]

var toppings = [
  [mushrooms, 2],
  [olives, 2],
  [pepperoni, 3],
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

// cost
// small : 8
// medium : 12
// large : 16
//
// pepperoni : 3
// olives : 2
// mushrooms : 2
//** UI LOGIC

$(document).ready(function(){
  $("#place-order").submit (function(event) {
    event.preventDefault();


  });
});
