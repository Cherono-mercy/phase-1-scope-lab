// Declaring a variable in global scope
var customerName = "bob";
const leastFavoriteCustomer = "Mary";

//Function that accesses global variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

//Declare a global variable inside a function
function setBestCustomer() {
  bestCustomer = "not bob";
}

//Overwriting the global variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Error trying to reassign a constant variable declared in global scope
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jane";
}
