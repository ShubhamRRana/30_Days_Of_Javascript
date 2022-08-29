drive = () => {
  let age = prompt("Enter your age");
  let a = 18 - age;
  if (age >= 18) alert("You are old enough to drive.");
  else alert(`You are left with ${a} years to drive.`);
};

checkAge = () => {
  let myAge = 18;
  let yourAge = prompt("Enter your age");
  let diff = yourAge - myAge;
  if (myAge < yourAge) alert(`You are ${diff} years older than me.`);
};

checkNumber = () => {
  let a = prompt("Enter a");
  let b = prompt("Enter b");
  //   if (a > b) alert(`${a} is greater than ${b}`);
  //   else alert(`${a} is smaller than ${b}`);
  a > b
    ? alert(`${a} is greater than ${b}`)
    : alert(`${a} is smaller than ${b}`);
};

oddEven = () => {
  num = prompt("Enter a number");
  if (num % 2 == 0) alert(`${num} is an even number`);
  else alert(`${num} is an odd number`);
};
