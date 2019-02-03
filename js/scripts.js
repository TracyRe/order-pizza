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
// ** I am not confident that this is actually pushing values of the selected checkboxes into the array 'toppings'. The array 'toppings' seems to be undefined and I cannot seem to access anything in it by index. But something seems to be happening because console log shows values of the selected checkboxes in an array for the Pizza object.

Pizza.prototype.price = function(size,topping) {
// *** IMO this is the stupidest possible way to include prices - a better approach (in the absence of a database) would be store sizes,prices and toppings,prices in 2D (right term?) arrays, but I couldn't figure out how to access the contents of such arrays
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
      if (topping === "Pepperoni") { // ** I can't believe this worked. I thought it would need to be a lot more complicated; I tried both a for loop and a forEach loop to access the contents of the toppings array with no success
        toppingCost += 3;
      } else {
        toppingCost += 2;
      }
    });
    return sizeCost + toppingCost;
  };

Pizza.prototype.toppingSelections = function(topping) {
  this.toppings.forEach(function(topping) {
    document.write(topping + ", ");
  });
  return
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
    // var toppingList = myPizza.toppingSelections(topping);
    var toppingList = myPizza.toppings.toString();

    console.log(size);
    console.log(topping);
    console.log(myPizza);
    console.log(price);
    console.log(toppingList);




    $(".order").text(size + " pizza " + "with " + toppingList + ": $" + price);
    $(".thankyou").show();
    $(".order").show();
    $("input[name='size']").prop("checked",false);
    $("input[name='topping']").prop("checked",false);
    $('button#order').prop('disabled', true);


  });
});
