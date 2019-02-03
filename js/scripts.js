//** BUSINESS LOGIC

function Pizza() {
  this.size = "";
  this.toppings = [];
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
};
// Pizza.prototype.addSize = function(size) {
//   this.sizes.push(size);
// };

Pizza.prototype.addTopping = function(topping) {
var topping = document.querySelectorAll("[name=topping]");
  var i;
  for (i = 0; i < topping.length; i++) {
    if (topping[i].checked) {
      this.toppings.push(" " + topping[i].value);
      // ** First I tried to loop through the elements in toppings array and add a space between them and output them, instead of using .toString. But I couldn't write the function without the entire function being displayed on the page. So I hacked the values on index.html by adding leading spaces, a despicable hack. Finally I realized I could just add the leading space when I pushed to the array, here.
    }
  }
};
// ** I am not entirely confident that this is actually pushing values of the selected checkboxes into the array 'toppings'. The array 'toppings' seems to be undefined and I cannot seem to access anything in it by index. But something seems to be happening because console.log shows values of the selected checkboxes in an array for the Pizza object.

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
      if (topping === " Pepperoni") {
        // ** I can't believe this worked. I thought it would need to be a lot more complicated; I tried both a for loop and a forEach loop to access the contents of the toppings array with no success
        toppingCost += 3;
      } else {
        toppingCost += 2;
      }
    });
    return sizeCost + toppingCost;
  };

//** UI LOGIC

var myPizza = new Pizza(); // ** Declare myPizza as Global Variable

$(document).ready(function(){
  $("#place-order").submit (function(event) {
    event.preventDefault();
    var size = $("input[name='size']:checked").val();
    var topping = $("input[name='topping']:checked").val();

    myPizza.addSize(size);
    myPizza.addTopping(topping);
    var price = myPizza.price(size, topping);

   if (myPizza.toppings === undefined || myPizza.toppings.length == 0) {
     var toppingList = ", no toppings";
   } else {
     var toppingList = " with" + myPizza.toppings.toString();
   }

    $(".order").text(size + " Pizza" + toppingList + ": $" + price);
    $(".thankyou").show();
    $(".order").show();
    $("input[name='size']").prop("checked",false);
    $("input[name='topping']").prop("checked",false);
    $('button#order').prop('disabled', true);
    myPizza.size = "";
    myPizza.toppings = [];
  });
});
