// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getInfo() {
    return `His name is ${this.name} and is ${this.age} years old.\nHis color is ${this.color} and legs are ${this.legs}`;
  }
}

class Dog extends Animal {
  constructor(name, age, color, legs, species) {
    super(name, age, color, legs);
    this.species = species;
  }
  get getDog() {
    return `It's a ${this.species}`;
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, species) {
    super(name, age, color, legs);
    this.species = species;
  }
  get getCat() {
    return `It's a ${this.species}`;
  }
  get getInfo() {
    return `His name is ${this.name} and is ${this.age} years old.\nHis color is ${this.color} and legs are ${this.legs}`;
  }
}

let animal1 = new Animal('Tommy', '4', 'brown', 'short');

let animal2 = new Dog('Tommy', '4', 'brown', 'short', 'dog');
console.log(animal2.getDog);
console.log(animal2.getInfo);

let animal3 = new Cat('Billa', '1', 'black', 'short', 'cat');
console.log(animal3.getCat);
console.log(animal3.getInfo);
