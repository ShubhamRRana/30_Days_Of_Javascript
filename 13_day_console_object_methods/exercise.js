// console.log('%c30 Days Of JavaScript', 'color:green'); // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow'
// ); // log output green red and yellow text
// const names = ['Asabeneh', 'Brook', 'David', 'John'];
// console.table(names);
// // const user = {
// //   name: 'Asabeneh',
// //   title: 'Programmer',
// //   country: 'Finland',
// //   city: 'Helsinki',
// //   age: 250,
// // };
// // console.table(user);
// // const countries = [
// //   ['Finland', 'Helsinki'],
// //   ['Sweden', 'Stockholm'],
// //   ['Norway', 'Oslo'],
// // ];
// // console.table(countries);
// const users = [
//   {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250,
//   },
//   {
//     name: 'Eyob',
//     title: 'Teacher',
//     country: 'Sweden',
//     city: 'London',
//     age: 25,
//   },
//   {
//     name: 'Asab',
//     title: 'Instructor',
//     country: 'Norway',
//     city: 'Oslo',
//     age: 22,
//   },
//   {
//     name: 'Matias',
//     title: 'Developer',
//     country: 'Denmark',
//     city: 'Copenhagen',
//     age: 28,
//   },
// ];
// console.table(users);

// const countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ];

// console.log('\n');

// console.time('Regular for loop');
// for (let i = 0; i < countries.length; i++) {
//   console.log(countries[i][0], countries[i][1]);
//   //   console.log(countries[i]);
// }
// console.timeEnd('Regular for loop');

// console.log('\n');

// console.time('for of loop');
// for (const [name, city] of countries) {
//   console.log(name, city);
// }
// console.timeEnd('for of loop');

// console.log('\n');

// console.time('forEach loop');
// countries.forEach(([name, city]) => {
//   console.log(name, city);
// });
// console.timeEnd('forEach loop');

// console.log('\n');

// console.assert(4 > 3, '4 is greater than 3');
// console.assert(4 < 3, '4 is greater than 3');

// console.log('\n');

// for (let i = 1; i <= 10; i += 1) {
//   let errorMessage = `${i} is not even`;
//   console.log('the # is ' + i);
//   console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
// }

const names = ['Asabeneh', 'Brook', 'David', 'John'];
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250,
};
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250,
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25,
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22,
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28,
  },
];

console.group('Names and Countries');
console.log(names);
console.log(countries);
console.groupEnd();

// console.group('Users');
// console.log(user);
// console.log(users);
// console.groupEnd();
