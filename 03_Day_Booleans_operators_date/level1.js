let firstName = "Shubham";
let lastName = "Rana";
let country = "India";
let city = "Pune";
let age = 24;
let isMarried = "False";

let year = new Date();
let a = year.getFullYear();

console.log(
  `My name is ${firstName} ${lastName} and I am ${age} years old.\nI am from ${city},${country}.\nCurrent year is ${a}`
);

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof a);

let b = 10;
let c = "10";
console.log(b === c);

d = 9.8;
let e = parseInt(d);
console.log(b == d);

let f = "python";
let g = "jargon";
console.log(f.length == g.length);
console.log(!(f.match("on") && g.match("on")));

let years = new Date();
console.log(years.getFullYear());
console.log(years.getMonth());
console.log(years.getDate());
console.log(years.getDay());
console.log(years.getHours());
console.log(years.getMinutes());
console.log(years.getSeconds());
console.log(years.getTime());
