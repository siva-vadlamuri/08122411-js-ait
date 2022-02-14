// Date,Math
// Math
// floor, ceil, max, min,random (0-1)

// 2
// 2.467776
// 3

const PI = 3.14;
console.log(Math.floor(PI));
console.log(Math.ceil(PI));
const randomNumber = Math.floor(Math.random() * 10000);

console.log(randomNumber);
console.log(Math.sqrt(25));

console.log(Math.pow(2, 10));

// Date
//
const getTheCurrentDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
};

const d = new Date();
const date = d.getDate();
const month = d.getMonth() + 1; //0-11
const year = d.getFullYear();

console.log(`${date}-${month}-${year}`);

const day = d.getDay(); // 0-6
const currentDay = getTheCurrentDay(day);
console.log(currentDay);
console.log(Date.now());

// Optional Chaning

const product = {
  id: Date.now(),
  produtName: "Apple 12 Pro",
  ProductPrice: 700000,
  company: "Apple",
};
// o(n)

console.log(product.ProductPrice, product.produtName, product.company);
console.log(product?.details?.description);
