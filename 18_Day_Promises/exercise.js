// //Callback
// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ['HTML', 'CSS', 'JS'];
//     callback('It did not go as planned', skills);
//   }, 2000);
// };
// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };

// doSomething(callback);

// let doSomething = (callback) => {
//   let skills = ['HTML', 'CSS', 'JavaScript'];
//   callback('This is error', skills);
// };
// let callback = (err, res) => {
//   if (err) console.log(err);
//   else console.log(res);
// };
// doSomething(callback);

// const url = 'https://restcountries.com/v2/all'; // countries api
// fetch(url)
//   .then((response) => response.json()) // accessing the API data as JSON
//   .then((data) => {
//     // getting the data
//     console.log(data);
//   })
//   .catch((error) => console.error(error)); // handling error if something wrong happens

const square = async function (n) {
  return n * n;
};
const value = await square(2);
console.log(value);
