//** BUSINESS LOGIC

function Pizza() {
  this.sizes = [];
  this.toppings = [];
}

var size = ["Large", "Medium", "Small"]
var toppings = ["mushrooms", "olives", "pepperoni"]


Pizza.prototype.addSize = function(size) {
  this.sizes.push(size);
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}
// debugger;
if (this.size === "Large") {
  sizeCost = 16;
} else if (this.size === "Medium") {
  sizeCost = 12;
} else {
  sizeCost = 8;
}


if (this.toppings === "pepperoni") {
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
    var price = myPizza.price(size, topping);
    console.log(size);
    console.log(topping);
    console.log(myPizza);
    console.log(price);

    $(".order").text(size + " pizza " + "with " + topping + ": $" + price);
    $(".thankyou").show();
    $(".order").show();
    $("input[name='size']").prop("checked",false);
    $("input[name='topping']:checked").prop("checked",false);

  });
});
