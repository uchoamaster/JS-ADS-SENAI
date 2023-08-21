const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);
// ---------------------------------------
const names = ["charlie", "brown", "jr"];

const uppercaseNames = names.map((name) => name.toUpperCase());

console.log(uppercaseNames);
//----------------------------------------
const people = [
  { name: "Jao", age: 25 },
  { name: "Maria", age: 30 },
  { name: "Teresa", age: 35 },
];

const namesDict = people.map((person) => person.name);

console.log(namesDict);

// ---------------------------------------

let sum = 0;
const averages = numbers.map((number, index) => {
  sum += number;
  return sum / (index + 1);
});

console.log(averages);
// ---------------------------------------
const strings = [" Hello ", " World ", " "];

const trimmedStrings = strings.map((string) => string.trim());

console.log(trimmedStrings);

// ---------------------------------------
function simulateHTTPRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { message: "Hello, world!" };
      resolve(data);
    }, 2000);
  });
}

simulateHTTPRequest()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

// ---------------------------------------
const fs = require("fs");

function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync("example.txt")
  .then((content) => {
    console.log(content);
  })
  .catch((error) => {
    console.error(error);
  });

// ---------------------------------------
