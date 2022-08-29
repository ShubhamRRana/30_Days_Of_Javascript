// create an empty set
let emptySet = {};

// Create a set containing 0 to 10 using loop
let num = new Set();
for (let i = 1; i <= 10; i++) {
  num.add(i);
}
console.log(num);

// Remove an element from a set
num.delete(10);
console.log(num);

// Clear a set
num.clear();
console.log(num);

// Create a set of 5 string elements from array
let setArray = new Set();
setArray.add('A');
setArray.add('B');
setArray.add('C');
setArray.add('D');
console.log(setArray);

const countries = ['Finland', 'Sweden', 'Norway'];
// Create a map of countries and number of characters of a country
let newArray = new Set();
length = countries.length;
for (let i = 0; i < length; i++) {
  newArray.add(countries[i]);
  newArray.add(countries[i].length);
}
console.log(newArray);
