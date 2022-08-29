const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
let winner;
let max = 0;
for (let x in users) {
  if (users[x].skills.length > max) {
    max = users[x].skills.length;
    winner = x;
  }
}
console.log(winner);

// Get all keys or properties of users object
let key = Object.keys(users);
console.log(key);

// Get all the values of users object
let value = Object.values(users);
console.log(value);

// Use the countries object to print a country name, capital, populations and languages.
let country = {
  name: "India",
  capital: "Delhi",
  population: "1.4B",
  languages: ["English", "Hindi"],
};
console.log(country);

// Set your name in the users object without modifying the original users object
let newUser = Object.assign({}, users);
console.log(newUser);

(newUser.Shubham = {
  email: "shubh@shubh.com",
  skills: ["HTML", "CSS", "JavaScript", "Express", "React", "Node"],
  age: 24,
  isLoggedIn: false,
  points: 40,
}),
  console.log(newUser);
