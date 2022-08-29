// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Kenya",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
];
console.log(`Before sorting:  ${countries}`);
let sortedCountries = [];
sortedCountries = countries.sort();
console.log(`After sorting: ${sortedCountries}`);

// Sort the webTechs array and mernStack array
const webTechs = ["HTML", "CSS", "JavaScript", "React", "Redux", "Node"];
let mernStack = ["MongoDB", "Express", "React", "Node"];
console.log(webTechs.sort());
console.log(mernStack.sort());

// Extract all the countries contain the word 'land' from the countries array and print it as array
let landArray = [];
for (let i = 0; i < countries.length; i++) {
  if (countries[i].includes("land")) landArray.push(countries[i]);
}
console.log(landArray);

// Find the country containing the hightest number of characters in the countries array
let newCountry = countries.sort((a, b) => b.length - a.length);
console.log(`Country with highest number of characters: ${newCountry[0]}`);

// Reverse the countries array and capitalize each country and stored it as an array
let capitalCountry = [];
for (let i = 0; i < countries.length; i++) {
  capitalCountry.push(countries[i]);
}
// let capital = capitalCountry.toUpperCase;
// console.log(capital);
console.log(countries);
