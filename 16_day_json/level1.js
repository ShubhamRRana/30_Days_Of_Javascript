// Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'];
console.log(skills);
let skill = JSON.stringify(skills);
console.log(skill);

// Stringify the age variable
let age = 250;
let newAge = JSON.stringify(age);
console.log(newAge);

// Stringify the isMarried variable
let isMarried = true;
let txt = JSON.stringify(isMarried);
console.log(txt);

// Stringify the student object
const student = {
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python'],
};
let stu = JSON.stringify(student);
console.log(stu);
