// console.log(Math.min(-5, 3, 20, 4, 5, 10));
// console.log(Math.pow(3, 2));

// let abc = Math.floor(Math.random() * 11);
// console.log(abc);

// let a = 2,
//   b = 3;
// console.log(`The sum of ${a} and ${b} is ${a + b}`);

let string =
  "I love JavaScript. If you do not love JavaScript what else can you Love.";
let pattern = /love/gi;
console.log(string.match(pattern));
console.log(string.repeat(2));

let regEx = /\d+/;
console.log(string.match(regEx));
