const constants = [2.72, 3.14, 9.81, 37, 100];
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Destructure the rectangle object by its properties or keys.
let rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
let { width, height, area, perimeter } = rectangle;
console.log(
  `Rectangle properties \nHeight:${height} \nWidth:${width} \nArea:${area} \nPerimeter:${perimeter}`
);
