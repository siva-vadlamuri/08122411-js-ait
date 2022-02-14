// ES6
// Let and const
// Destructuring
// Spreed and rest Operator(...)
// Def: You can pass infinte number of argument to an function
// String template literal ` ${}`
// Array methods (Map,filter,reduce,forEach)
// for of and for in

// AGENDA for Today
// MAP
// REDUCE
// FILTER (Filter is array Method which is used to filter the data)
// forEach

// const func = (...params)

const arr = ["Meta", "Netflix", "Google", "Amazon"];
const arr1 = [23, 56, 78, 90, 12];
const users = [
  {
    name: "Bhanu",
    age: 30,
  },
  {
    name: "Vinay",
    age: 25,
  },
  {
    name: "Satya",
    age: 31,
  },
  {
    name: "Shiva",
    age: 24,
  },
];

// prevousAge =0
// prevousAge + 30
//
// Passing a function as argument to another function
// arr.forEach((ele) => console.log(ele));

// For map return type is an array
// []
const squares = arr1.map((ele) => ele * ele);
console.log(squares);

const filteredUser = users.filter((user) => user.age <= 30);
console.log(filteredUser);

// reduce method will take two argument
// 1st one is a call back function
// 2nd argument is the intial value
// if you not specifiying the 2nd argument (initial value ) it will take the first value from the
const totalAgeOfUsers = users.reduce(
  (totalAge, currentPersonAge) => totalAge + currentPersonAge.age,
  0
);
console.log(totalAgeOfUsers);

// []

// Difference between map and forEach
// for,while,do while

// for of and for in
// for(let i=0;i<10;i++){

// }
for (let value of arr) {
  // debugger;
  // console.log(value);
}
const companies = {
  mt: "Meta",
  yt: "Youtube",
  nt: "Netflix",
  ig: "Instagram",
  ait: "AchieversIT",
  users: {},
};
// console.log(companies.mt); //1st approach
// console.log(companies["yt"]); // 2nd apporach

for (let value in companies) {
  // console.log(value);
  console.log(companies.value);
}
