//** BUSINESS LOGIC

function Pizza() {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function(size, topping) {
  price = this.size + this.topping;
  return price;
}


//** UI LOGIC

$(document).ready(function(){
  $("#place-order").submit (function(event) {
    event.preventDefault();


  });
});
