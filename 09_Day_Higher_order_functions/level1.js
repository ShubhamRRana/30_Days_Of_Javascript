// Explain the difference between forEach, map, filter, and reduce.

// forEach() is used only used with arrays, it takes a function as a parameter, iterates an array elements.

// map() iterates an array elements and the array elements and return a new array, takes a callback function.

// filter() filter out items which satisfies the condition and return a new array, takes a callback function.

// reduce() takes a callback function, the callback function takes accuulator, current and optional inital value as a parameter and returns a single value

//every() takes a callback function, checks if all the elements of an array are similar in one aspect, it returns a boolean value

// some() takes a callback function, checks if some of the elements are similar in one aspect, it returns a boolean value

// find() returns the first element which satisfies the condition

// findIndex() returns the index of first element which satisfies the condition

// Define a callback function before you use it in forEach, map, filter or reduce.
let returnSum = () => {
  let arr = [1, 2, 3, 4, 5];
  let sum = 0;
  for (x in arr) sum += arr[x];
  return sum;
};
console.log(returnSum());

const countries = [
  'Finland',
  'Sweden',
  'Denmark',
  'Norway',
  'IceLand',
  'Nigeria',
];
// Use forEach to console.log each country in the countries array.
let displayCountries = countries.forEach(function (countries) {
  console.log(countries);
});

// Use map to create a new array by changing each country to uppercase in the countries array.
let capitalCountry = [];
let changeCase = countries.map((c) => {
  capitalCountry.push(c.toUpperCase());
});
console.log(capitalCountry);

// Use map to create an array of countries length from countries array.
let countrylength = [];
let cLength = countries.forEach((c) => {
  countrylength.push(c.length);
});
console.log(countrylength);

// Use filter to filter out countries containing land.
let withLand = countries.filter((c) => c.includes('land'));
console.log(withLand);

// Use filter to filter out countries having six character.
let lengthSix = countries.filter((c) => c.length === 6);
console.log(lengthSix);

// Use filter to filter out countries containing six letters and more in the country array.
let lengthMoreThanSix = countries.filter((c) => c.length >= 6);
console.log(lengthMoreThanSix);

// Use filter to filter out country start with 'E';
let startE = countries.filter((c) => c[0] === 'N');
console.log(startE);

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// Use forEach to console.log each name in the names array.
let newNames = [];
let name = names.forEach((n) => console.log(newNames.push(n)));
console.log(newNames);

// Use map to change to each name to uppercase in the names array
let changeNameCase = names.map((n) => console.log(n.toUpperCase()));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Use forEach to console.log each number in the numbers array.
numbers.forEach((n) => console.log(n));

// Use map to create a new array by changing each number to square in the numbers array
let squareNumber = [];
squareNumber.push(numbers.map((n) => n * n));
console.log(squareNumber);

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];
// Use map to map the products array to its corresponding prices.
let newProducts = [];
newP = products.forEach((p) => newProducts.push(p));
console.log(newProducts);

// Use filter to filter out only prices with values.
let pricesWithValues = products.filter((product) => {
  return product.price > 0;
});
console.log(pricesWithValues);

// Use reduce to sum all the numbers in the numbers array.
let sum = () => {
  arr = [1, 2, 3, 4, 5];
  res = arr.reduce((a, b) => a + b, 0);
  console.log(res);
};
sum();

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let country = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
let left = country.splice(0, country.length - 1);
let leftArray = left.join(', ');
let right = country[country.length - 1];
console.log(`${leftArray} and ${right} are north European countries`);

// Use some to check if some names' length greater than seven in names array
let checkSome = names.some((s) => s.length > 7);
console.log(checkSome);

// Use every to check if all the countries contain the word land
let everyCountry = countries.every((c) => console.log(c.includes('land')));

// Use find to find the first country containing only six letters in the countries array
let findCountry = countries.find((c) => c.length === 6);
console.log(findCountry);

// Use findIndex to find the position of the first country containing only six letters in the countries array
let findIndexCountry = countries.findIndex((c) => c.length === 6);
console.log(findIndexCountry);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findNorway = countries.findIndex((c) => c.includes('Norway'));
console.log(findNorway);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findRussia = countries.findIndex((c) => c.includes('Russia'));
console.log(findRussia);
