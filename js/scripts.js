//** BUSINESS LOGIC

function Pizza() {
  this.sizes = [];
  this.toppings = [];
}

var size = ["Large", "Medium", "Small"]
var toppings = ["pepperoni", "mushrooms", "olives"]


Pizza.prototype.addSize = function(size) {
  this.sizes.push(size);
};

Pizza.prototype.addTopping = function(topping) {
  for ( var i = 0; i < toppings.length; i++) {
    var toppingChecked = document.querySelectorAll('input[name=topping]:checked');
    if (toppingChecked = true) {
      this.toppings.push(toppings[i]);
    }
  }
};
// ** this method of getting the checked toppings and pushing them to the toppings array of the pizza object didn't work
// function getToppings(topping) {
//   var toppings = document.getElementsByName(topping);
//   for ( var i = 0; i < toppings.length; i++) {
//     if (toppings[i].checked) {
//       this.toppings.push(toppings[i]);
//     }
//   }
// } return this.toppings.length > 0 ? this.toppings : null;

Pizza.prototype.price = function(size,topping) {
// *** IMO this is an inefficient way to include prices - I couldn't figure out how to access values in a more efficient array
    if (size === "Large") {
      getSizeCost = 16;
    } else if (size === "Medium") {
      getSizeCost = 12;
    } else {
      getSizeCost = 8;
    }

    if (topping === "pepperoni") {
      getToppingCost = 3;
    } else {
      getToppingCost = 2;
    }

  return getSizeCost + getToppingCost;
};


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
    $("input[name='topping']").prop("checked",false);


  });
});
