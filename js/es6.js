// ES5
// ECMAScript
// ECMA European Computer Manfactures Association

// Scope
// Global scope
// Block Scope
// Function Scope

// Var Scope
// If you declare a variable with var keyword globaly or outside a function the scope will be global scope

// 2: If you declare the variable with var keyword inside a function, the scope will be function scope

// 3: You can redeclare the variable

// 4: The Variable with var keyword is hoisted
console.log(firstName);
var firstName = "Mr";
var firstName = "Shree";

if (true) {
  var email = "example@example.com";
}
console.log(email);

// Hoisting : Before declaration we can access a function declaration or a variable with var keyword

// Note: Avoid the the hoisting as much as possible
// To avoid hoisting use function expression or variable functions

x();
// y();
function x() {
  console.log("I am x");
}
// FUnction Expression
var y = function () {
  console.log("I am y");
};

// myFunc();
var myFunc = function () {
  var lastName = "shiva";
};
// console.log(lastName);

// let and const (Block scope) Which was released in ES6
// Temporal dead zone

if (true) {
  // Scope?
  console.log(myName);
  let myName;
  myName = "shiva";
  // let myName = "rama";
}
console.log(myName);

// const
// Whenever you declared the variable with const you need to assign a value
const PI = 3.14;
