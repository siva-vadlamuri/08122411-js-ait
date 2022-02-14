// AJAX --> Asynchronous JavaScrpit and XML/JSON
// By default JavaScript Synchronous Langauge or Asynchronous Langauge?

//  JS is a  Synchronous (It will execute one thing at a time)
// Acyronom Of Synchronous Is Asyncronous

// https://www.restapitutorial.com/httpstatuscodes.html
// Ready State

// Status Codes
// 200+ Success (ok)
// 300+ Redirection
// 400+ Client side errors
// 404 file not found
// 500+ Server Side Error

//

// HTTP METHODS:
// GET --> Getting the data
// POST --> Sending the data to the server
// PUT --> To update the existing data
// DELETE --> Delete the existing data
const btn = document.querySelector(".btn");

const dynamicData = (data) => {
  // You want to iteratate through array of Objects and Make the Dynamic HTML
  console.log(data);
};

const getTheServerData = () => {
  // XHR --> XMLHttpRequest (Browser Object which gives us some methods to make a API call)
  const FAKE_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const xhr = new XMLHttpRequest();

  //   open
  xhr.open("GET", FAKE_API_URL);
  xhr.send();
  xhr.onprogress = function () {
    //   process state
  };
  //   xhr.onerror = function () {
  //     //
  //   }
  xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      //   console.log(xhr.responseText);
      dynamicData(xhr.responseText);
    }
  };
};
btn.addEventListener("click", getTheServerData);
