// ### Question 1

// Convert the below functions to one-line arrow functions.

// function greet(name) {
//   return `Hello ${name}!`;
// }

// const greet = (name) => `Hello ${name}!`;

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => a + b;

// ### Question 2

// Convert the below code to use the then/catch syntax instead.

// const url = "https://noroff.herokuapp.com/v1/cat-facts/facts";

// async function getCatFacts() {
//   try {
//     const response = await fetch(
//       "https://noroff.herokuapp.com/v1/cat-facts/facts"
//     );
//     const results = await response.json();
//     console.log(results.length);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetch(url)
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.length);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// or

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data.length))
//   .catch((error) => console.log(error));

// or enclosed in a function
// function gettCat() {
//   fetch("https://noroff.herokuapp.com/v1/cat-facts/facts")
//     .then((response) => response.json())
//     .then((data) => console.log(data.length))
//     .catch((error) => console.log(error));
// }

// ### Question 1

// Using the `CORS_URL` variable below, convert the API call inside the `getElephants` function to use the cors-anywhere link, such that the API call will succeed.

// const CORS_URL = "https://noroffcors.herokuapp.com/";

// const API_URL = "https://elephant-api.herokuapp.com/elephants";

// // const corsEnabled = CORS_URL + API_URL;

// async function getElephants() {
//   const response = await fetch(CORS_URL + API_URL);
//   const results = await response.json();
//   console.log(results);
// }

// getElephants();

// ### Question 2

// Add headers to the below API call.

// You can choose whether to create a variable for the headers object seperately from the call and pass the variable in as the second parameter, or pass the headers object in directly.

const API_URL =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = {
  // method: "GET",
  headers: {
    // "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "a22295ef43msh43957bda4446dbcp15ff8bjsn823e52f874d2",
  },
};

async function callUrbanDictionary() {
  const response = await fetch(API_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();
