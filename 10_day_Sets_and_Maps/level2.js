const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Find a union b
// const c = [...a, ...b];
// let A = new Set(a);
// let B = new Set(a);
// let C = new Set(c);
// console.log(C);

// Find a intersection b
let A = new Set(a);
let B = new Set(a);
let c = a.filter((num) => B.has(num));
let newC = new Set(c);
console.log(newC);

