// Declare a function fullName and it print out your full name.
let fullName = () => {
  console.log("My name is Shubham Rana");
};
fullName();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
let fullName1 = (fname, lname) => {
  console.log(`My name is ${fname} ${lname}`);
};
fullName1("Shubham", "Rana");

// Declare a function addNumbers and it takes two two parameters and it returns sum.
let addNumbers = (a, b) => {
  return a + b;
};
console.log(`Addition of two numbers: ${addNumbers(1, 2)}`);

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
let areaR;
let areaOfRectangle = (length, breadth) => {
  return (areaR = length * breadth);
};
console.log(`Area of rectangle: ${areaOfRectangle(1, 1)}`);

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
let periR;
let perimeterOfRectangle = (length, width) => {
  return (periR = 2 * (length + width));
};
console.log(`Perimeter of rectangle: ${perimeterOfRectangle(1, 1)}`);

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
let prismV;
let prism = (l, w, h) => {
  prismV = l * w * h;
  console.log(`Volume of prism: ${prismV}`);
};
prism(1, 2, 3);

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
let areaC;
let areaOfCircle = (r) => {
  areaC = 3.14 * r * r;
  return areaC;
};
console.log(`Area of circle: ${areaOfCircle(2)}`);

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
let circum;
let circumOfCircle = (r) => {
  circum = 2 * 3.14 * r;
  return circum;
};
console.log(`Circumference of circle: ${circumOfCircle(3)}`);

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
let d;
function density(mass, volume) {
  d = mass / volume;
  return d;
}
console.log(`Density: ${density(1, 1)}`);

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let s;
let speed = (distance, time) => {
  s = distance / time;
  console.log(`Speed of the object: ${s} m/s`);
};
speed(4, 2);

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
let w;
let weight = (mass, gravity) => {
  w = mass * gravity;
  return w;
};
console.log(`Weight: ${weight(1, 1)}`);

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
let f;
let convertCelciusToFahrenheit = (c) => {
  f = (c * 9) / 5 + 32;
  console.log(`${c}C Celcius to fahrenheit: ${f}F`);
};
convertCelciusToFahrenheit(21);

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
let bmi;
let bodyMass = (w, h) => {
  bmi = w / (h * h);
  if (bmi < 18.5) console.log("Underweight");
  else if (bmi > 18.5 || bmi < 24.9) console.log("Normal weight");
  else if (bmi > 25 || bmi < 29.9) console.log("Over weight");
  else console.log("Obese");
};
bodyMass(74, 1.73);

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
checkSeason = (se) => {
  if (se == "september" || se == "october" || se == "november")
    console.log("The season is Autum");
  else if (se == "december" || se == "january" || se == "february")
    console.log("The season is Winter");
  else if (se == "march" || se == "april" || se == "may")
    console.log("The season is spring");
  else if (se == "june" || se == "july" || se == "august")
    console.log("The season is summer");
  else console.log("Invalid Input");
};
checkSeason("may");

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
let max;
let findMax = (a, b, c) => {
  if (a > b && a > c) console.log(`${a} is greater`);
  else if (b > a && b > c) console.log(`${b} is greater`);
  else console.log(`${c} is greater`);
};
findMax(0, -10, -2);
