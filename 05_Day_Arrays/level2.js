// let text =
//   "I love teaching and empowering people.I teach HTML,CSS,JS,React,Python";
// let words = /[^a-zA-Z0-9]/g;
// let change = text.replace(words, " ");
// console.log(change);
// let a = change.split(" ");
// console.log(a);
// // console.log(Array.from(a)); //Used to convert string to array
// console.log(a.length);

let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

let meat = shoppingCart.includes("Meat");
console.log(shoppingCart);
if (meat == true) console.log("Meat already present in list");
else shoppingCart.unshift("Meat");

let sugar = shoppingCart.includes("Sugar");
console.log(shoppingCart);
if (sugar == true) console.log("Sugar already present in list");
else shoppingCart.push("Sugar");
console.log(shoppingCart);

// let tea = shoppingCart.includes("Tea");
// console.log(shoppingCart);
// if (tea == true) console.log("Tea already present in list");
// else shoppingCart.push("Tea");
// console.log(shoppingCart);

//Remove 'Honey' if you are allergic to honey
let checkHoney = false;
let index = shoppingCart.indexOf("Honey");
if (checkHoney == false) {
  shoppingCart.splice(index, 1);
} else console.log("Good. You are not allergic to honey");
console.log(shoppingCart);

// import { countries } from "./countries";
// console.log(countries.macth("Ethiopia"));

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack);
console.log(fullStack.join(", "));

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);
console.log(ages.sort());
min = ages[0];
max = ages[ages.length - 1];
console.log(`Smallest number is ${min}`);
console.log(`Largest number is ${max}`);
let mid = ages[Math.floor(ages.length / 2)];
console.log(`Middle value is ${mid}`);
range = max - min;
console.log(`Range is ${range}`);

let sum = 0;
for (x in ages) {
  sum += ages[x];
}
console.log("Average is " + sum / 2);
