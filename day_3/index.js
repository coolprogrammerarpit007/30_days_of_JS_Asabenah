`use strict`;

// Falsey Values are:- 0,0n,null,undefined,NaN,false,''
// Exercise Level 1

let firstName = `Arpit`;
let lastName = `Mishra`;
let country = `India`;
let city = `Jaipur`;
let age = 25;
let isMarried = false;
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof city);
// console.log(typeof age);
// console.log(typeof isMarried);
// console.log(typeof '10' == typeof 10);// false
// console.log(parseInt(9.8) == 10); // false
// // Boolean is either true or false
// console.log(Boolean(1));
// console.log(Boolean("hgg"));
// console.log(Boolean({}));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(null));
// console.log(4>3);//true
// console.log(4>=3);//true
// console.log(4<3);//false
// console.log(4<=3);//false
// console.log(4==4);//true
// console.log(4===4);//true
// console.log(4!=4);//false
// console.log(4!==4);//false
// console.log(4!='4');//false
// console.log(4=='4');//true
// console.log(4==='4');//false
// console.log(`python`.includes(`on`));
// console.log(`jargon`.includes(`on`));
// console.log(4 > 3 && 10 < 12);//true
// console.log(4 > 3 && 10 > 12);//false
// console.log(4 > 3 || 10 < 12);//true
// console.log(4 > 3 || 10 > 12);//true
// console.log(!(4 > 3));//false
// console.log(!(4 < 3));//true
// console.log(!(false));//true
// console.log(!(4 > 3 && 10 < 12));//false
// console.log(!(4 > 3 && 10 > 12));//true
// console.log(!(4 === '4'));//true
const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getTime());



// Level 2 Exercises
// let base = Number(prompt(`Enter Base: `));
// let height = Number(prompt(`Enter Height: `));
// let area = 0.5*(base*height);
// console.log(`The area of triangle is: ${area}`);

// let a = Number(prompt(`Enter Side a `));
// let b = Number(prompt(`Enter Side b `));
// let c = Number(prompt(`Enter Side c `));
// console.log(`Perimeter of Triangle is: ${a+b+c}`);

// let l = Number(prompt(`Enter length: `));
// let w = Number(prompt(`Enter width: `));
// console.log(`The area of rectangle is: ${2*(l+w)}`);

// let r = Number(prompt(`Enter radius: `));
// console.log(`Area of circle: ${(Math.PI)*(r)*(r)}`);

// let x = Number(prompt(`Enter Slope X: `));
// let y = Number(prompt(`Enter Slope Y: `));
// console.log(`Slope:${(2*(x)) - 2}`);

// let slope = (10-2)/(6-2);
// console.log(`Slope: ${slope}`);
// console.log(true);
// let x = -3;
// let y = Math.pow(x,2) + 6*x + 9;
// console.log(y);


// let hrs = Number(prompt(`Enter Hours:`))
// let rate = Number(prompt(`Enter rate per hours:`));
// console.log(`Weekly Earning: ${hrs*rate}`);

// let bornYear = Number(prompt(`Enter birth year: `));
// let isAllowed = (2024 - bornYear) >= 18 ? 'Allowed to drive' : 'Not Allowed';
// console.log(isAllowed);

// Level-3
const today = new Date();
let year = today.getFullYear();
let month = String(today.getMonth()).length > 1 ? today.getMonth() : '0' + today.getMonth();
let day = String(today.getDate()).length > 1 ? today.getDate() : '0' + today.getDate();
let hrs = String(today.getHours()).length > 1 ? today.getHours() : '0' + today.getHours();
let Mins = String(today.getMinutes()).length > 1 ? today.getMinutes() : '0' + today.getMinutes();
// console.log(year);
// console.log(month);
// console.log(day);
console.log(`${year}-${month}-${day} ${hrs}:${Mins}`);