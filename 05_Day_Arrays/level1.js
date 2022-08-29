//Arrays can be declared in two ways
// let arr = new Array();
let arr = [];
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1);
console.log(arr1.indexOf[0]);
// console.log(arr1.length);
console.log("First element: " + arr1[0]);
console.log("Last element: " + arr1[arr1.length - 1]); //For getting the last element of the array
let mid = Math.floor(arr1[0] + arr1[arr1.length - 1] / 2);
console.log(mid);
console.log("Middle element: " + arr1[mid - 1]);

// let mixedDataTypes = ["Shubham", "Rana", "u346740", 3.14, 24, "3/7/1998"];
// console.log(mixedDataTypes);
// console.log(mixedDataTypes.length);

// let itCompanies = [
//   "Facebook",
//   "Google",
//   "Microsoft",
//   "Apple",
//   "IBM",
//   "Oracle",
//   "Amazon",
// ];
// console.log(itCompanies);
// console.log(itCompanies.length);

// console.log("First element: " + itCompanies[0]);
// console.log("Last element: " + itCompanies[itCompanies.length - 1]); //For getting the last element of the array
// let midIt = Math.floor(
//   itCompanies[0] + itCompanies[itCompanies.length - 1] / 2
// );

// console.log(midIt);
// console.log("Middle element: " + itCompanies[midIt - 1]);

// let check = itCompanies.indexOf("TCS");
// if (check == -1) console.log("Company does not exists");
// else console.log("Company exist");

// console.log(itCompanies.join(", "));
// console.log(itCompanies.join(", ").toUpperCase()); //Converts every array element to uppercase

// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log("Slicing out first three elements: " + itCompanies.slice(0, 3));
// console.log("Slicing out last three elements: " + itCompanies.slice(4, 7));

// console.log(itCompanies.shift()); //Removes first element from array
// console.log(itCompanies.pop()); //Removes last array from array
