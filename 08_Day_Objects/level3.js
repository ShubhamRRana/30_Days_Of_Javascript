// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
  firstName: 'Shubham',
  lastName: 'Rana',
  incomes: 50000,
  expenses: 18000,
  totalIncome: function () {
    return `${this.incomes}`;
  },
  totalExpenses: function () {
    return `${this.expenses}`;
  },
  accountInfo: function () {
    return `Income is ${this.incomes} and expenses is ${this.expenses}`;
  },
  addIncome: function (inc) {
    this.incomes += inc;
    return `${this.incomes}`;
  },
  addExpenses: function (exp) {
    this.expenses += exp;
    return `${this.expenses}`;
  },
  accountBalance: function () {
    return;
  },
};
console.log(personAccount);
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(10000));
console.log(personAccount.addExpenses(10000));
console.log(personAccount.accountInfo());

const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false,
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true,
  },
  {
    _id: 'zwf8md',
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111',
    createdAt: '08/01/2020 9:45 AM',
    isLoggedIn: true,
  },
  {
    _id: 'eefamr',
    username: 'Martha',
    email: 'martha@martha.com',
    password: '123222',
    createdAt: '08/01/2020 9:50 AM',
    isLoggedIn: false,
  },
  {
    _id: 'ghderc',
    username: 'Thomas',
    email: 'thomas@thomas.com',
    password: '123333',
    createdAt: '08/01/2020 10:00 AM',
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy'],
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy'],
  },
];

let signUp = (username, email, password) => {
  users.forEach((user) => {
    if (users.username == username && users.password == password)
      console.log('User already exists');
    else {
      let date = new Date();
      let chars = 'abcdefghijklmnopqrstuvwxyz';
      let id = [];
      for (let i = 0; i < 6; i++) {
        id.push(chars[Math.floor(Math.random() * chars.length)]);
      }
      id = id.join('');
      users.push({
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`,
        isLoggedIn: 'false',
      });
    }
  });
  console.log(users[users.length - 1]);
};
// signUp('Shubham', 'shubh@shubh.com', 'abc@123');
// signUp('Martha', 'martha@martha.com', '123222');

// Create a function called signIn which allows user to sign in to the application
console.log(users);
let signIn = (username, password) => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username.toLocaleLowerCase() == username.toLocaleLowerCase() &&
      users[0].password == password
    )
      return users[i];
    else return 'Wrong username or password';
  }
};
console.log(signIn('Thomas', 'thomas@thomas.com'));
