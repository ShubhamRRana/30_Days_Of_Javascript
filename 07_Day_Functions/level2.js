// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = (arr) => {
  for (x of arr) console.log(x);
};
array = [1, 2, 3, 4, 5];
printArray(array);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
let date = new Date();
let m = ("0" + (date.getMonth() + 1)).slice(0);
let d = ("0" + date.getDate()).slice(0);
let y = date.getFullYear();
let h = date.getHours();
let mi = date.getMinutes();
console.log(`${d}/${m}/${y} ${h}:${mi}`);

// Declare a function name swapValues. This function swaps value of x to y.
let swapValues = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`${a} ${b}`);
};
swapValues(1, 2);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let newArray = [];
let reverseArray = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
};

// ra = ["A", "B", "C"];
ra = [1, 2, 3, 4, 5];
reverseArray(ra);
console.log(newArray);

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let capitalArray = [];
let capitalizedArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    capitalArray.push(arr[i].toUpperCase());
  }
  return capitalArray;
};
let arr = ["a", "B", "c"];
console.log(capitalizedArray(arr));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let addIem = (para, item) => {
  arr = Array(para).fill(item);
  console.log(arr);
};
addIem(5, 4);

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
let removeItem = (arr, index) => {
  console.log(arr.slice(index));
};
arr = [1, 2, 3, 4, 5];
removeItem(arr, 3);

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sumAllNums = (...args) => {
  let sum = 0;
  for (x of args) sum += x;
  console.log(`Sum of all numbers: ${sum}`);
};
sumAllNums(1, 2, 3, 4);

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
let sumOfOdds = (...args) => {
  let oddSum = 0;
  for (x of args) {
    if (x % 2 != 0) oddSum += x;
  }
  console.log(`Sum of odd numbers: ${oddSum}`);
};
sumOfOdds(1, 2, 3, 4, 5, 6);

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
let sumOfEven = (...args) => {
  let oddSum = 0;
  for (x of args) {
    if (x % 2 == 0) oddSum += x;
  }
  console.log(`Sum of even numbers: ${oddSum}`);
};
sumOfEven(1, 2, 3, 4, 5, 6);

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let evenCount = 0,
  oddCount = 0;
let evenAndOdds = (a) => {
  for (let i = 0; i <= a; i++) {
    if (i % 2 == 0) evenCount++;
    else oddCount++;
  }
  console.log(
    `The number of evens are ${evenCount} \nThe number of odds are ${oddCount}`
  );
};
evenAndOdds(100);

// Writ a function which generates a randomUserIp.
let randomUserIp = () => {
  let ip1 = Math.floor(Math.random() * 255);
  let ip2 = Math.floor(Math.random() * 255);
  let ip3 = Math.floor(Math.random() * 255);
  let ip4 = Math.floor(Math.random() * 255);
  console.log(`IP: ${ip1}.${ip2}.${ip3}.${ip4}`);
};
randomUserIp();

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
randomHexaNumberGenerator = () => {
  hex = "0123456789ABCDEF";
  hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  console.log(`Radom hexadecimal: ${hexCode}`);
};
randomHexaNumberGenerator();

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
userIdGenerator = () => {
  hex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let userId = "";
  for (let i = 0; i < 7; i++) {
    userId += hex.charAt(Math.floor(Math.random() * hex.length));
  }
  console.log(`Radom user id generator: ${userId}`);
};
userIdGenerator();
