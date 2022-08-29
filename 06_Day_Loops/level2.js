// Develop a small script which generate any number of characters random id:
let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let result = "";
let length = characters.length;
for (let i = 0; i < Math.random() * 10; i++) {
  result += characters.charAt(Math.floor(Math.random() * length));
}
console.log(result);

// Write a script which generates a random hexadecimal number.
let hexChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
let hex = "#";
let hexlength = hexChar.length;
for (let i = 1; i <= 6; i++) {
  hex += hexChar[Math.floor(Math.random() * hexlength)];
}
console.log(hex);
// Below program also generates random hexadecimal number
// let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
// console.log(randomColor);

// Write a script which generates a random rgb color number.
let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
console.log(`rgb(${r},${g},${b})`);

// Using the above countries array, create the following new array.
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];
console.log(countries);

// Using the above countries array, create an array for countries length'.
let cLength = [];
for (let i = 0; i < countries.length; i++) {
  cLength.push(countries[i].length);
}
console.log(cLength);

// Use the countries array to create the following array of arrays:
let newArray = [];
for (let i = 0; i < countries.length; i++) {
  newArray.push([countries[i], countries[i].slice(0, 3), countries[i].length]);
}
console.log(newArray);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let withLand = [];
let withoutLand = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) withLand.push(countries[i]);
  else {
    withoutLand.push(countries[i]);
  }
}
console.log(withLand);
console.log("All these countries are without land");
console.log(withoutLand);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let withIa = [];
let withoutIa = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("ia")) withIa.push(countries[i]);
  else withoutIa.push(countries[i]);
}
console.log(withIa);
console.log(withoutIa);

// Using the above countries array, find the country containing the biggest number of characters.
let longCountry = countries.sort((a, b) => b.length - a.length);
console.log(`Country with longest length is ${longCountry[0]}`);

// Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
// let longWeb = webTechs.sort((a, b) => b.length - a.length);
// console.log(`Largest word in webTechs is ${longWeb[0]}`);

// Use the webTechs array to create the following array of arrays:
let newWebArray = [];
for (let i = 0; i < webTechs.length; i++) {
  newWebArray.push([webTechs[i], webTechs[i].length]);
}
console.log(newWebArray);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mernStack = ["MongoDB", "Express", "React", "Node"];
let mern = "";
for (let i = 0; i < mernStack.length; i++) {
  mern += mernStack[i].slice(0, 0);
}
console.log(mern);

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for (x of webTechs) console.log(x);
for (x in webTechs) console.log(webTechs[x]);

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruits = ["banana", "orange", "mango", "lemon"];
console.log(fruits);
let newFruits = [];
for (let i = fruits.length - 1; i >= 0; i--) newFruits.push(fruits[i]);
console.log(newFruits);

let firstHalf = [];
let secondHalf = [];
let firstSecond = [];
let mid = Math.floor(webTechs.length / 2);
for (let i = 0; i < webTechs.length; i++) {
  firstHalf = webTechs.slice(0, mid + 1);
  secondHalf = webTechs.slice(mid + 1, webTechs.length);
}
console.log(firstHalf);
console.log(secondHalf);

console.log(webTechs.join(" "));
