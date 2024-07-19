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