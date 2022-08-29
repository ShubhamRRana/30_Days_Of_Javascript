const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
for (x in webTechs) console.log(webTechs[x].toUpperCase());
for (x of webTechs) console.log(x.toUpperCase());
// Both above statements give same output`

// Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) console.log(i);
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
do {
  console.log(i);
  i++;
} while (i <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (i = 10; i >= 0; i--) console.log(i);
// let i = 10;
while (i >= 0) {
  console.log(i);
  i--;
}
do {
  console.log(i);
  i--;
} while (i >= 0);

let string = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

for (let i = 1; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

console.log("i i^2 i^3");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers
let even = [];
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    even.push(i);
  }
}
console.log(even);
// console.log(even.length);

// Use for loop to iterate from 0 to 100 and print only odd numbers
let odd = [];
for (i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    odd.push(i);
  }
}
console.log(odd);
// console.log(odd.length);

// Use for loop to iterate from 0 to 100 and print only prime numbers
// let i = 0;
while (i <= 100) {}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`Sum of first 100 numbers is ${sum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(`Sum of all even numbers form 1 to 100 are ${evenSum}`);
console.log(`Sum of all odd numbers form 1 to 100 are ${oddSum}`);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let oddEven = [evenSum, oddSum];
console.log(oddEven);

// Develop a small script which generate array of 5 random numbers
let randomArray = [];
for (let i = 1; i <= 5; i++) {
  let arr = Math.floor(Math.random() * 10);
  randomArray.push(arr);
}
console.log(randomArray);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
function myRandomInts() {
  const arr = [];
  while (arr.length < 5) {
    var candidateInt = Math.floor(Math.random() * 10);
    if (arr.indexOf(candidateInt) === -1) arr.push(candidateInt);
  }
  return arr;
}
console.log(myRandomInts());

// Develop a small script which generate a six characters random id:
let characters = "abcdefghijklmnopqrstuvwxyz0123456789";
let result = "";
let length = characters.length;
for (let i = 1; i <= 6; i++) {
  result += characters.charAt(Math.floor(Math.random() * length));
}
console.log(result);
