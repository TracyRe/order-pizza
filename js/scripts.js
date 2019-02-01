//** BUSINESS LOGIC

function Pizza() {
  this.size = size;
  this.toppings = [];
}

function SizeCost() {
  large = 16;
  medium = 12;
  small = 8;
}

function ToppingCost() {
  mushrooms = 2;
  olives = 2;
  pepperoni = 3;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.price = function(sizeCost, toppingCost) {
  return sizeCost + toppingCost;
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
