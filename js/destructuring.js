// Array Destructuring
// Object Destructuring
const arr = [12, 45, 78, 90, 99];
// firstValue
// secondValue
// arr[0];
// arr[1]
const [firstValue, secondValue, , lastValue] = arr;
console.log(firstValue, secondValue);

const user = {
  firstName: "Mr",
  lastName: "Sharma",
  email: "sharma@gmail.com",
  address: {
    streetAddress: "127 6th block 1st main",
    city: "Bangalore",
    state: "Karanataka",
    location: {
      lat: "19.90.12.8",
      lng: "-15.8.0.9",
    },
  },
};
// DRY
const {
  firstName,
  email,
  address: {
    city,
    location: { lng },
  },
} = user;
console.log(firstName, email, lng);

console.log(city);

// user.address.state

// console.log("First name is " + firstName + " email is " + email);
// const paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore
// voluptatum perspiciatis in adipisci mollitia architecto, ipsam,
// reprehenderit"

// String Template literal
console.log(`first name is ${firstName} email is ${email}
from city ${city}
`);

// Default Paramerts (ES6)

// Falsy Values
// NaN
// false
// 0
// undefined
// null
// ''
function calcSum(a, b) {
  //   if (!a)
  // If arthmetaic things with undefined * undefined = NaN
  console.log(a + b);
}

calcSum(8, 12);

// Rest and Spreed Operator (...)

// Rest Operator
// You can infinite number of arguments to a function

const calcTotal = function (a, b, c, ...params) {
  console.log(a, b, c);
  console.log(params);
};

calcTotal(20, 89, 89, 12, 81, 77);

const multiFunc = function (a, b, c) {
  console.log(a + b);
  // logic
};
const arr1 = [34, 78, 89, 90, 99];
// console.log(arr1);
// console.log(...arr1);

multiFunc(...arr1);

const obj = {
  id: 123,
  firstName: "Mr",
  lastName: "Varma",
  email: "varma@gmail.com",
};

// const obj2 = obj;
// obj2.email = "siva@gmail.com";
// console.log(obj);
const obj2 = { ...obj };
obj2.email = "siva@gmail.com";
console.log(obj);

const arr3 = [...arr, ...arr1];
console.log(arr3);

// For This Keyword
// console.log(this);

//1) at global this keyword will point window (root object)

// 2) Inside normal function the this keyword will point to window object

// 3) Inside the Object the this keyword will point to  object itself

const getTheThisKeyword = function () {
  console.log(this);
};
getTheThisKeyword();

const user1 = {
  firstName: "Mr",
  address: "6th main 2 block",
  phone: "883866222",
  getTheDetails: function () {
    console.log(this);
  },
};
user1.getTheDetails();

function x() {}

const myFunc = function () {};

const doubleTheValue = (num) => console.log(num * 2);
// Map, filter and reduce

doubleTheValue(8);
