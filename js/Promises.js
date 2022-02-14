// What is difference between Syncronous And
// Synchrous Code (Blocking code)
// Asynchronous Code (non-blocking code )

// setTimeOut is method which takes 2 arguments
// 1--> function
// 2--> milliseconds (time)
console.log("First");
setTimeout(() => {
  console.log("Second");
}, 3000);
console.log("Third");

// Promises
// I  promised to my mother that, i would be reducing the weight 5kg by next month
// 10-2-22 -> 10-3-22 (if i reduce 5kgs, i fullfilled my promise)
// 10-2-22 --> 10-3-22 (rejected the promise)

// Pending state
// Resolved state or Fullfilled State
// Rejected State

// const p = new Promise((resolve, reject) => {
//   const num = 20;
//   if (num === 30) {
//     setTimeout(() => {
//       resolve("Promise is Full filled");
//     }, 3000);
//   } else {
//     reject("We got an error");
//   }
// });

// p.then((res) => console.log(res)).catch((err) => console.log(err));

// fetch is browser method which is used to make a API call

// Different 3 states in Promises
//1) Pending
// 2) Resolved/Fullfilled State
// 3) Rejected state

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json().then((data) => console.log(data)))
  .catch((err) => console.log(err));
