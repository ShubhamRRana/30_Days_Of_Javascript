try {
  firstName = 'Shubham';
  fullName = firstName + ' ' + lastName;
  console.log(fullName);
} catch (error) {
  console.log('Name of error: ' + error.name);
  console.log('Error message: ' + error.message);
} finally {
  console.log('I will always be executed.');
}

let throwError = () => {
  let num;
  try {
    if (num == ' ') throw 'Empty';
    if (isNaN(num)) throw 'Not a number';
    if (num > 5) throw 'Number is greater than 5';
    if (num < 5) throw 'Number is less than 5';
  } catch (err) {
    console.log(err);
  }
};
throwError();
