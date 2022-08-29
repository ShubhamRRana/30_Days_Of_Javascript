// getters -> access properties, get function  cannot have parameter.
// setters -> change properties, set function can have parameter.

class Person {
  constructor(fname, lname, age, country, city) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skill = [];
  }
  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
  get getScore() {
    return this.score;
  }
  get getSkill() {
    return this.skill;
  }
  set setScore(score) {
    this.score += score;
  }
  set setSkill(skill) {
    this.skill.push(skill);
  }
}
let person1 = new Person('Shubham', 'Rana', '24', 'India', 'Pune');
let person2 = new Person('Manish', 'Rana', '22', 'India', 'Pune');
console.log(person1.getFullName());
console.log(person2.getFullName());

person1.setScore = 35;
person1.setSkill = 'HTML';
person1.setSkill = 'JavaScript';
person1.setSkill = 'CSS';

person2.setScore = 54;
person2.setSkill = 'R&D';
person2.setSkill = 'Management';
person2.setSkill = 'Analysis';

console.log(person1.getScore);
console.log(person1.getSkill);

console.log(person2.getScore);
console.log(person2.getSkill);

class Student extends Person {
  display() {
    console.log('I an inside child class');
  }
}
let s = new Student('a', 'b', '14', 'abc', 'xyz');
console.log(s);
console.log(s.getSkill);

