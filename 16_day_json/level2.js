// Stringify the students object with only firstName, lastName and skills properties
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};
let newStudent = JSON.stringify(
  student,
  ['firstName', 'lastName', 'skills'],
  1
);
console.log(newStudent);
