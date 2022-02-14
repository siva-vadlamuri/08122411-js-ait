// Async and Await
// async is shorthand of asynchronous
// function declaration
const btn = document.querySelector(".btn");
console.log(btn);

function name() {}

// function expression  or Variable Functions
const myFunc = function () {};

// arrow function

const arrowFunc = () => console.log("Arrow func");
// pending state --> resolved state
const getTheDataFromAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};
getTheDataFromAPI();

// Difference Between Async and Await?
// Difference Between Async and defer?
