// When The JavaScript Inject the global cotext will be create
// Global context
abc();
console.log(x);
var x = 10;
var y = 20;

function abc() {
  console.log("I am function declaration");
}
console.log(myFunc);
const myFunc = function () {
  console.log("I am a function expression");
};
myFunc();
