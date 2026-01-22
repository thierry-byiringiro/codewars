//i used promise chaining to solve the kata
function submitOrder(user) {
  var shoppingCart, zipCode, shippingRate, orderSuccessful;
  
  // Get the current user's shopping cart
  return OrderAPI.getShoppingCartAsync(user).then(function(cart) {
    shoppingCart = cart;
    return CustomerAPI.getProfileAsync(user)
  })
  .then(function(profile) {
    zipCode = profile.zipCode;
     shippingRate = calculateShipping(shoppingCart, zipCode);
    return  OrderAPI.placeOrderAsync(shoppingCart, shippingRate)
  })
 .then(function(success) {
    orderSuccessful = success;
  })
  .catch((el) => console.log(el))
  
  console.log(`Your order ${orderSuccessful? "was" : "was NOT"} placed successfully`);
}

console.log(submitOrder(12345))