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
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1);
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
  }
//   console.log(person)
//   console.log(person.getPersonInfo());


// Exercise Level 1
const dog = {};
// console.log(dog);
dog.name = `Tiger`;
dog.legs = 4;
dog.color = `Black`;
dog.age = 2;
dog.bark = function(){
    console.log(`Woof Woof!`);
}

// console.log(dog);
// dog.bark();
dog.breed = `German Sheppard`;
dog.getInfo = function(){
    console.log(`My dog name is: ${this.name}, he is ${this.age} years old, ${this.color} color and of ${this.breed} breed!`);
}
// dog.getInfo();