//** BUSINESS LOGIC

function Pizza() {
  this.size = "";
  this.toppings = [];
}

Pizza.prototype.addSize = function(size) {
  this.size += size;
};
// Pizza.prototype.addSize = function(size) {
//   this.sizes.push(size);
// };

Pizza.prototype.addTopping = function(topping) {
var topping = document.querySelectorAll("[name=topping]");
  var i;
  for (i = 0; i < topping.length; i++) {
    if (topping[i].checked) {
      this.toppings.push(topping[i].value);
    }
  }
};
// ** I am not entirely confident that this is actually pushing values of the selected checkboxes into the array 'toppings'. The array 'toppings' seems to be undefined and I cannot seem to access anything in it by index. But something seems to be happening because console log shows values of the selected checkboxes in an array for the Pizza object.

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
      if (topping === " Pepperoni") { // ** I can't believe this worked. I thought it would need to be a lot more complicated; I tried both a for loop and a forEach loop to access the contents of the toppings array with no success
        toppingCost += 3;
      } else {
        toppingCost += 2;
      }
    });
    return sizeCost + toppingCost;
  };

// ** This is an abortive attempt to write a function to loop through the toppings array and insert spaces between each element. Even so, the function would need to identify the final element and not add a comma. But I am incapable of writing a function and outputting the result on the page - instead the entire function is written onto the page and I cannot find any explanation on the Internet. I resorted to insertng a space in front of the topping values, which is a despicable hack, and outputting the array as a string.

// Pizza.prototype.toppingSelections = function(topping) {
//   this.toppings.forEach(function(topping) {
//     document.write(topping + ", ");
//   });
//   return
// };


//** UI LOGIC

var myPizza = new Pizza();
$(document).ready(function(){
  $("#place-order").submit (function(event) {
    event.preventDefault();
    var size = $("input[name='size']:checked").val();
    var topping = $("input[name='topping']:checked").val();

    myPizza.addSize(size);
    myPizza.addTopping(topping);
    var price = myPizza.price(size, topping);

    // ** I think this is a stupid way to output the list of toppings because I had to hack the values by adding a leading space so they wouldn't run together.
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
