//** BUSINESS LOGIC

function Pizza() {
  this.sizes = [];
  this.toppings = [];
}

Pizza.prototype.addSize = function(size) {
  this.sizes.push(size);
};

Pizza.prototype.addTopping = function(topping) {
var topping = document.querySelectorAll("[name=topping]");
  var i;
  for (i = 0; i < topping.length; i++) {
    if (topping[i].checked) {
      this.toppings.push(topping[i].value);
    }
  }
};


Pizza.prototype.price = function(size,topping) {
// *** IMO this is the stupides possible way to include prices - I couldn't figure out how to access values in a more efficient array
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
