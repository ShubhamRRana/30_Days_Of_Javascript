// Calculate the total annual income of the person from the following text.
let text =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
let pattern = /\d+/g;
let salaries = text.match(pattern);
console.log(salaries);
console.log(salaries.length);
// let sum = 0;
// salaries.forEach((n) => {
//   sum += Number(n);
// });
// console.log(sum);
let sum = 0;
for (x of salaries) sum += Number(x);
console.log(sum);

// Extract these numbers and find the distance between the two furthest particles.
let numbers =
  'The position of some particles on the horizontal x-axis -1, 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.';
let getNumbers = numbers.match(/[^D]\d+/g);
// console.log(getNumbers);
// let toArray = getNumbers.map((num) => Number(num));
// console.log(sorted);
let sort = getNumbers.sort((a, b) => a - b);
console.log(sort);
let calculateDistance = (arr) => {
  let diff = arr[arr.length - 1] - arr[0];
  console.log(`Diffence between furthest point: ${diff}`);
};
calculateDistance(sort);

// Write a pattern which identify if a string is a valid JavaScript variable
const pattern1 = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/;
const isValidVariable = (str) => {
  console.log(pattern1.test(str));
};
isValidVariable('first_name');
isValidVariable('first-name');
isValidVariable('1first_name');
isValidVariable('firstname');

let name = 'shubham.r0098@gmail.com';
let get = name.match(/^shubham/g);
console.log(get);
