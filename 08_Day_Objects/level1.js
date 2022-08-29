const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  'phone number': '+3584545454545',
};
console.log(person.getFullName());
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person['phone number']); //phone number is written in square brackets because the name contains space

// Onject.assign copies the content of one object into another without changing the origional contents
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

// Object.keys gives only the keys
const keys = Object.keys(copyPerson);
console.log(keys);

// Object.values gives only the values
const values = Object.values(copyPerson);
console.log(values);

// Object.entries converts the whole object into an array
const entry = Object.entries(person);
console.log(entry);

// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Set new properties the dog object: breed, getDogInfo
let dog = {
  name: 'Tommy',
  legs: 'Short',
  color: 'Black',
  age: '2',
  bark: 'woof woof',
  breed: 'Lanredor',
  getDogInfo: function () {
    console.log(`His name is ${this.name} and he is ${this.age} years old.`);
  },
};
console.log(dog);
dog.getDogInfo();
