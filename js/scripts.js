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
// ** I am not confident that this is actually pushing values of the selected checkboxes into the array 'toppings'. The array 'toppings' seems to be undefined and I cannot access anything in it by index. But it seems to do something because console log shows values of the selected checkboxes in an array for the Pizza object.

Pizza.prototype.price = function(size,topping) {
// *** IMO this is the stupidest possible way to include prices - I couldn't figure out how to access values in a more efficient array
  var sizeCost = 0;
  var toppingCost = 0;
    if (size === "Large") {
      sizeCost = 16;
    } else if (size === "Medium") {
      sizeCost = 12;
    } else {
      sizeCost = 8;
    }

    this.toppings.forEach(function(topping) {
      if (topping === "Pepperoni") { // ** I can't believe this worked. I thought it would be a lot more complicated, like accessing the contents of an array
        toppingCost += 3;
      } else {
        toppingCost += 2;
      }
    });

  return sizeCost + toppingCost;
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
