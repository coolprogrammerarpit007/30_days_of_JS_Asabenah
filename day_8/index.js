`use strict`;

// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
// function letsLearnScope() {
//   console.log(a, b) // JavaScript 10, accessible
//   if (true) {
//     let a = 'Python'
//     let b = 100
//     console.log(a, b) // Python 100
//   }
//   console.log(a, b)
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
person.nationality = "Ethiopian";
person.country = "Finland";
person.title = "teacher";
person.skills.push("Meteor");
person.skills.push("SasS");
person.isMarried = true;

person.getPersonInfo = function () {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(", ");
  let lastSkill = this.skills.splice(this.skills.length - 1);

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
  let fullName = this.getFullName();
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
  return statement;
};
//   console.log(person)
//   console.log(person.getPersonInfo());

// Exercise Level 1
const dog = {};
// console.log(dog);
dog.name = `Tiger`;
dog.legs = 4;
dog.color = `Black`;
dog.age = 2;
dog.bark = function () {
  console.log(`Woof Woof!`);
};

// console.log(dog);
// dog.bark();
dog.breed = `German Sheppard`;
dog.getInfo = function () {
  console.log(
    `My dog name is: ${this.name}, he is ${this.age} years old, ${this.color} color and of ${this.breed} breed!`
  );
};
// dog.getInfo();

// Level 2

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

function maxSkillCount(users) {
  let maxSkill = null;
  for (const user in users) {
    users[user][`skillCount`] = users[user].skills.length;
    if (maxSkill === null || users[user][`skillCount`] > maxSkill) {
      maxSkill = users[user][`skillCount`];
    }
  }
  return maxSkill;
}

function maxSkillPerson(users){
    let userObj;
    const largeSkillCount = maxSkillCount(users);
    for(const user in users){
        if(users[user][`skillCount`] === largeSkillCount){
            userObj = users[user];
            userObj.name = user;
            break;
        }
    }
    return userObj;
}

const returnedObj = maxSkillPerson(users);
// console.log(`${returnedObj.name} has ${returnedObj[`skillCount`]} skills which are maximum`);

function countLoggedIn(users){
    let count = 0;
    for(const user in users){
        if(users[user][`isLoggedIn`] === true){
            count++;
        }
    }
    console.log(`Total Logged in users are: ${count}`);
}
// countLoggedIn(users);


function checkMernDeveloper(users){
    const stack = ["MongoDB", "Express", "React", "Node"];
    let count = 0;
    for(let user in users){
        if(stack.every((skill) => users[user][`skills`].includes(skill))){
            count++;
        }
    }
    return count;
}

// console.log(checkMernDeveloper(users));


const copiedUsers = {...users};
for(const user in copiedUsers){
    copiedUsers[user][`name`] = user;
}
// console.log(copiedUsers);
// console.log(users);
// console.log(c);
let userProps;
for(const user in users ){
    userProps = Object.keys(users[user]);
    break;
}
// console.log(userProps);
// let userValues;
// for(const user in users ){
//     userProps = Object.values(users[user]);
//     break;
// }
// console.log(userValues);


const personalAccount = {
    firstName:`Arpit`,
    lastName:`Mishra`,
    income:250000,
    expanses:12000,
    totalIncome:function(){
        console.log(`Total Income is: ${this.income}`);
    },
    totalExpense:function(){
        console.log(`Total Expense is: ${this.expanses}`);
    },
    addIncome:function(amt){
        this.income += amt;
    },
    addExpanse:function(amt){
        this.expanses -= amt;
    },
    totalBalance:function(){
        console.log(`Total Balance is: ${this.income - this.expanses}`);
    }
}

// console.log(personalAccount.income);
// personalAccount.addIncome(35000);
// console.log(personalAccount.income);
// personalAccount.totalBalance()

const users1 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    
const signIn = function(users){
    for(const user in users){
        if(!(users[user][`isLoggedIn`])){
            console.log(`User is now signed in`);
            users[user][`isLoggedIn`] = true;
        }
        else{
            console.log(`Already signed in!`);
        }
    }
}

// signIn(users1)

let stringRand = `abcdefghijklmnopqrstuvwxyz0123456789`;
const randomUserIdGenerator = function(){
    let randomId = ``;
    for(let i=0;i<6;i++){
        randomId += stringRand[Math.floor(Math.random()*stringRand.length)];
    }
    return randomId;
}

const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: [],
      rateProducts:function(rating){
        this.ratings.push({userId:this._id,rate:rating})
      },
      averageRating:function(){
        let sum = 0;
        this.ratings.forEach((obj)=>{
            sum += Number(obj.rate);
        })
        console.log(`Average Product Rating: ${sum/this.ratings.length}`);
      },
      getLikes:function(){
        if(this.likes.length <= 0 ){
            this.likes.push(this._id)
        }
        else{
            this.likes.pop();
        } 
        return this.likes;
      }
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
      rateProducts:function(rating){
        this.ratings.push({userId:this._id,rate:rating})
      },
      averageRating:function(){
        let sum = 0;
        this.ratings.forEach((obj)=>{
            sum += Number(obj.rate);
        })
        console.log(`Average Product Rating: ${sum/this.ratings.length}`);
      }
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
      rateProducts:function(rating){
        this.ratings.push({userId:this._id,rate:rating})
      },
      averageRating:function(){
        let sum = 0;
        this.ratings.forEach((obj)=>{
            sum += Number(obj.rate);
        })
        console.log(`Average Product Rating: ${sum/this.ratings.length}`);
      }
    }
  ]
  

//   for(const product of products){}

// products[0].rateProducts(4.7);
// console.log(products[0]);
// Math.floor((products[0].averageRating())).toFixed(2);

// console.log(products[0].getLikes());
// console.log(products[0].getLikes());
// console.log(products[0].getLikes());