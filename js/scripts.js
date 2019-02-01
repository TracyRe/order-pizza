//** BUSINESS LOGIC

function Pizza() {
  this.sizes = [];
  this.toppings = [];
}

var size = ["large", "medium", "small"]
var toppings = ["mushrooms", "olives", "pepperoni"]


Pizza.prototype.addSize = function(size) {
  this.sizes.push(size);
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

if (size === "large") {
  sizeCost = 16;
} else if (size === "medium") {
  sizeCost = 12;
} else {
  sizeCost = 8;
}

var topping;

if (topping === "pepperoni") {
  toppingCost = 3;
} else {
  toppingCost = 2;
}

Pizza.prototype.price = function(size, topping) {
  return sizeCost + toppingCost;
}


//** UI LOGIC

$(document).ready(function(){

  var myPizza = new Pizza();

  $("#place-order").submit (function(event) {
    event.preventDefault();
    var size = $("input[name='size']:checked").val();
    var topping = $("input[name='topping']:checked").val();

    myPizza.addSize(size);
    myPizza.addTopping(topping);
    myPizza.price(size, topping);
    console.log(size);
    console.log(topping);
    console.log(myPizza);
    console.log(myPizza.price(size, topping));

    // size + " pizza " + "with " + topping + " and " + price "."
    $(".thankyou").show();
    $(".order").show();

  });
});
