// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2;
};
// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 4));

// forEach can only be used with arrays
let arr = [1, 2, 3, 4, 5];
let sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(arr));

function sayHello() {
  console.log('Hello');
}
setTimeout(sayHello, 2000);

// function sayHello() {
//   console.log('Hello');
// }
// setInterval(sayHello, 1000);

let a = [1, 2, 3, 4, 5];
newNumbers = a.map((n) => n * n);
console.log(newNumbers);

let sum = 0;
a.forEach((num) => (sum += num));
console.log(sum);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
let changeName = names.forEach((name) => console.log(name.toUpperCase()));

let firstThree = names.map((name) =>
  console.log(name.toUpperCase().slice(0, 3))
);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
let endsWithLand = countries.filter((c) => c.includes('land'));
console.log(endsWithLand);
let endsWithia = countries.filter((c) => c.includes('ia'));
console.log(endsWithia);

let ages = [24, 22, 12, 25, 18, 32, 35];
let filterAge = ages.find((age) => age < 20);
console.log(filterAge);

const bools = [true, true, true, false];
const areSomeTrue = bools.every((b) => b === true);
const areSomeTrue1 = bools.some((b) => b === true);
console.log(areSomeTrue);
console.log(areSomeTrue1);

// sort is mostly used with string array
// and if you want to use sort array with numbers then use the given below format
// here (b-a) sorts in descending order and (a-b) sorts in ascending array
a = ages.sort((a, b) => b - a);
console.log(a);

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyo', age: 100 },
  { name: 'Elias', age: 22 },
];
users.sort((a, b) => {
  if (a.key < b.key) return -1;
  if (a.key > b.key) return 1;
  return 0;
});
console.log(users);
