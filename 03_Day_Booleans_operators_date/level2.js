Area_Triangle = () => {
  let base = prompt("Enter base");
  let height = prompt("Enter height");
  tarea = 0.5 * base * height;
  alert("Area is " + tarea);
};

Perimeter_Triangle = () => {
  let a = parseInt(prompt("Enter a"));
  let b = parseInt(prompt("Enter b"));
  let c = parseInt(prompt("Enter c"));
  tperi = a + b + c;
  alert("Perimeter of circle is " + tperi);
};

Area_Rect = () => {
  let l = prompt("Enter length");
  let w = prompt("Enter width");
  rarea = l * w;
  alert("Area of rectangle is " + rarea);
};

Perimeter_Rect = () => {
  let l = parseInt(prompt("Enter length"));
  let w = parseInt(prompt("Enter width"));
  rperi = 2 * (l + w);
  alert("Perimeter of rectangle is " + rperi);
};

Area_Circle = () => {
  let r = prompt("Enter radius");
  carea = 3.14 * r * r;
  alert("Area of circle is " + carea);
};

Circumference_Circle = () => {
  let r = prompt("Enter radius");
  ci_area = 2 * 3.14 * r;
  alert("Circumference of circle is " + ci_area);
};

Pay = () => {
  let h = prompt("Enter hours");
  let r = prompt("Enter rate per hour");
  alert("Your weekly earning is " + h * r);
};

Name = () => {
  let Fname = prompt("Enter your name");
  if (Fname.length > 7) {
    console.log("Your name is long");
  } else {
    console.log("Your name is short");
  }
};

nameCompare = () => {
  let firstName = prompt("Enter first name");
  let lastName = prompt("Enter last name");
  if (firstName.length > lastName.length)
    alert(
      `Your first name, ${firstName} is longer than your family name, ${lastName}`
    );
};

let myAge = 250;
let yourAge = 25;
age = myAge - yourAge;
console.log(`I am ${age} years older than you`);

drive = () => {
  let year = prompt("Enter birth year");
  age = 2022 - year;
  day = 18 - age;
  if (age >= 18) alert(`You are ${age}. You are old enough to drive`);
  else alert(`You are ${age}. You will be allowed to drive after ${day} years`);
};

seconds_live = () => {
  let y = prompt("Enter number of years you lived");
  let live = y * 365 * 24 * 60 * 60;
  alert(`You lived ${live} seconds`);
};

let dateTime = new Date();
let year_time = dateTime.getFullYear();
let month = ("0" + (dateTime.getMonth() + 1)).slice(1);
let date = ("0" + dateTime.getDate()).slice(1);
let hour = dateTime.getHours();
let minutes = dateTime.getMinutes();
console.log(`${year_time}-${month}-${date} ${hour}:${minutes}`);
console.log(`${date}-${month}-${year_time} ${hour}:${minutes}`);
console.log(`${date}/${month}/${year_time} ${hour}:${minutes}`);
