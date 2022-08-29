// Create a closure which has one inner function
let outerFun = () => {
  let count = 0;
  let innerFun = () => {
    count++;
    return count;
  };
  return innerFun;
};
let closure = outerFun();
console.log(closure());
console.log(closure());
console.log(closure());

// Create a closure which has three inner functions
let outer = () => {
  let sum = 0;
  let inner1 = () => {
    sum++;
    return sum;
  };
  let inner2 = () => {
    sum--;
    return sum;
  };
  return { inner1: inner1(), inner2: inner2() };
};
let ex = outer();
console.log(ex.inner1);
console.log(ex.inner2);
