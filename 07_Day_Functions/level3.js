// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// userIdGeneratedByUser = () => {
//   let nId = prompt("How many user Id's you want");
//   let nChar = prompt("Enter size of user Id");
//   let hexId = [];
//   let hexChar =
//     "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567899";
//   for (let i = 0; i < nId; i++) {
//     hexId[i] = "";
//     for (let j = 0; j < nChar; j++) {
//       hexId[i] += hexChar.charAt(Math.floor(Math.random() * hexChar.length));
//     }
//   }
//   for (x of hexId) console.log(x);
// };
// userIdGeneratedByUser();

// Write a function name rgbColorGenerator and it generates rgb colors.
let rgbColorGeneratior = () => {
  let rgb1 = Math.floor(Math.random() * 255);
  let rgb2 = Math.floor(Math.random() * 255);
  let rgb3 = Math.floor(Math.random() * 255);
  console.log(`rgb(${rgb1},${rgb2},${rgb3})`);
};
rgbColorGeneratior();

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let arrayOfHexaColors = (n) => {
  let hex = "0123456789ABCDEF";
  let hexArray = [];
  for (let i = 0; i < n; i++) {
    hexArray[i] = "#";
    for (let j = 1; i < 6; i++) {
      hexArray += hex.charAt(Math.floor(Math.random() * hex.length));
    }
  }
  return hexArray;
};
console.log(arrayOfHexaColors(4));

// Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let arrayOfRgbColors = (n) => {
  for (let i = 0; i < n; i++) {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    console.log(`rgb(${rgb1},${rgb2},${rgb3})`);
  }
};
arrayOfRgbColors(4);

// Write a function generateColors which can generate any number of hexa or rgb colors
let generateColors = (color, n) => {
  if (color == "hex") {
    let hex = "0123456789ABCDEF";
    let hexArray = [];
    for (let i = 0; i < n; i++) {
      hexArray[i] = "#";
      for (let j = 1; i < 6; i++) {
        hexArray += hex.charAt(Math.floor(Math.random() * hex.length));
      }
    }
    console.log(hexArray);
  } else {
    for (let i = 0; i < n; i++) {
      let rgb1 = Math.floor(Math.random() * 255);
      let rgb2 = Math.floor(Math.random() * 255);
      let rgb3 = Math.floor(Math.random() * 255);
      console.log(`rgb(${rgb1},${rgb2},${rgb3})`);
    }
  }
};
generateColors("hex", 5);

// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
let shuffleArray = (a) => {
  let newArray = [];
  let newArray1 = [];
  for (let i = 0; i < a.length; i++) {
    newArray.push(a[i]);
  }
  console.log(`Original array: ${newArray}`);
  for (let i = 0; i < a.length; i++) {
    let shuffle = Math.floor(Math.random() * a.length);
    newArray1.push(a[shuffle]);
  }
  console.log(`Array after shifting: ${newArray1}`);
};
arr = [1, 2, 3, 4, 5];
shuffleArray(arr);

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
let factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  console.log(`Factorial: ${fact}`);
};
factorial(3);

// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
let isEmpty = (val) => {
  if (val == undefined) console.log("It is empty");
  else console.log("It's not empty");
};
isEmpty();
isEmpty(3);

// Call your function sum, it takes any number of arguments and it returns the sum.
let sum = (...args) => {
  let add = 0;
  for (let i = 0; i < args.length; i++) {
    add = add + args[i];
  }
  return add;
};
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(3, 4, 5));

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let sumOfArrays = (arr) => {
  let add = 0;
  arr.forEach(function (ar) {
    if (typeof arr === "number") {
      add = add + arr[i];
    } else add = "Array has characters";
  });
  return add;
};
console.log(sumOfArrays([1, 2, 3]));

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// let modifyArray = (arr) => {
//   let addUpper = "";
//   if (arr.length < 5) return "Item not found";
//   else {
//     // charIndex = arr.charAt(5);
//     // upper = charIndex.toUpperCase();
//   }
//   // return upper;
// };
// console.log(
//   modifyArray(["Avocado", "Tomato", "Potato", "Mango", "Lemon", "Carrot"])
// );

// Write a function called isPrime, which checks if a number is prime number.
let isPrime = (num) => {
  let flag = 0;
  for (let i = 2; i < num; i++) {
    if (num % i == 0 && num > 1) flag = 1;
  }
  if (flag == 0) console.log("Number is prime");
  else console.log("Number is not prime");
};
isPrime(7);

// Write a functions which checks if all items are unique in the array.
let checkArray = (arr) => {
  let i = 1;
  while (i < arr.length) {
    if (arr.indexOf(i) == -1) console.log("Not unique");
    else console.log("Unique");
    i++;
  }
};
checkArray([1, 2, 3]);

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable
let isValidVariable = (name) => {
  let flag = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "$" || name[i] === "_") flag = 1;
    else flag = 0;
  }
  console.log(`${flag}`);
  if (flag == 1) console.log("Invalid name");
  else console.log("Valid name");
};
isValidVariable("Shubham");

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
let generateRandom = () => {
  let newRandom = [];
  let sum;
  while (newRandom.length < 7) {
    sum = Math.floor(Math.random() * 10);
    if (newRandom.indexOf(sum) === -1) newRandom.push(sum);
  }
  console.log(newRandom);
};
generateRandom();

// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
let reverseCountries = () => {
  let rev = countries.reverse();
  console.log(rev);
};
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
reverseCountries(countries);
