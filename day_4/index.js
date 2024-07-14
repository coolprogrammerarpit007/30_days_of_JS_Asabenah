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


// Level 3

// check if a year is leap year
// let flag = false;
// const year = Number(prompt(`Enter year: `));
// const month = prompt(`Enter Month: `).toLowerCase();

// if(year % 100 === 0 ){
//     if(year % 400 === 0){
//         flag = true;
//     }
// }else if(year % 4 === 0){
//     flag = true;
// }else{
//     flag = false;
// }

// let hasMonths = ``;
// switch(month){
//     case 'january':
//         hasMonths = `january has 31 days.`
//         break;
//     case 'feburary':
//         hasMonths = flag ? `feburary has 29 days.`: `january has 28 days.`;
//         break;
//     case 'march':
//         hasMonths = `march has 31 days`;
//         break;
//     case 'april':
//         hasMonths = `april has 30 days`;
//         break;
//     case 'may':
//         hasMonths = `may has 31 days`;
//         break;
//     case 'june':
//         hasMonths = ` june has 30 days`;
//         break;
//     case 'july':
//         hasMonths = ` july has 31 days`; 
//         break;
//     case 'august':
//         hasMonths = ` august has 31 days`;
//         break;
//     case 'september':
//         hasMonths = ` september has 30 days`;
//         break;
//     case 'october':
//         hasMonths = ` october has 31 days`;
//         break;
//     case 'november':
//         hasMonths = ` november has 30 days`;   
//         break;
//     case 'december':
//         hasMonths = ` december has 31 days`;
//         break;
//     default:
//         console.log(`Enter a valid entery`);
//         break;
        
// }

// console.log(hasMonths);