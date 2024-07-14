`use strict`;

// Level 1

// const age = Number(prompt('Enter your age: '));
// if(age >= 18){
//     console.log(`Eligible to drive`);
// }else{
//     console.log(`Not Eligible to drive! ${18 - age} more years.`);
// }

// let myAge = Number(prompt('Enter your age: '));
// let yourAge = 30;

// if(myAge > yourAge){
//     console.log(`You are: ${myAge - yourAge} older than me!`);
// }
// else{
//     console.log(`You are: ${yourAge - myAge} younger  than me!`);
// }

let a = 4;
let b = 3;
const isGreater = a>b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;
// console.log(isGreater);

// let num = Number(prompt(`Enter Number: `));
// if(num % 2 === 0){
//     console.log(`${num} is an even number!`);
// }else{
//     console.log(`${num} is an odd number!`);
// }


// ****************************************************************
// ****************************************************************

// const marks = Number(prompt(`Enter your score: `));
// let grade;
// if(marks >= 80 && marks <= 100){
//     grade = `A`;
// }
// else if(marks >= 70 && marks <= 79){
//     grade = `B`;
// }
// else if(marks >= 60 && marks <= 69){
//     grade = `C`;
// }
// else if(marks >= 50 && marks <= 59){
//     grade = `D`;
// }
// else {
//     grade = `F`;
// }
// console.log(`Grade of the student is: ${grade}`);


// const month = prompt(`Enter Month: `).toLowerCase();
// switch(month){
//     case `september`:
//     case `october`:
//     case `november`:
//         console.log(`Season is Autumn!`);
//         break;
//     case `december`:
//     case `january`:
//     case `feburary`:
//         console.log(`Season is Winter!`);
//         break;
//     case `march`:
//     case `april`:
//     case `may`:
//         console.log(`Season is Spring!`);
//         break;
//     case `june`:
//     case `july`:
//     case `august`:
//         console.log(`Season is Summer!`);
//         break;
//     default:
//         console.log(`Enter the valid month!`);
// }

// const day = prompt(`Enter day!`).toLowerCase();
// switch(day){
//     case `monday`:
//     case `tuesday`:
//     case `wednesday`:
//     case `thursday`:
//     case `friday`:
//         console.log(`Day is Working day`);
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log(`Today is weekend`);
//         break;
//     default:
//         console.log(`Invalid Day`);
// }