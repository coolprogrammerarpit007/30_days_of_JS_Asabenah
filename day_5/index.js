`use strict`;
import { countries } from "./countries.js";
import { webTechs } from "./web_tech.js";

// Exercise Level 1
const arr = [];
const arr1 = [1,2,3,4,5,6];
// console.log(arr.length);
// console.log(arr1[0],arr1[arr1.length/2],arr1[arr1.length-1]);
const mixedDataTypes = [`Arpit`,25,true,'rohit','john',`william`,78,25];
// console.log(mixedDataTypes.length);
// Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = [`Facebook`,`Google`,`Microsoft`,`Apple`,`IBM`,`Oracle`,`Amazon`];
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1]);
// itCompanies.forEach((company)=>{
//     console.log(company);
// })
// console.log(itCompanies.toString() + " are big companies!");
// console.log(itCompanies.indexOf(`Netflix`));

const filteredArr = [];
itCompanies.forEach((company)=>{
    if(company.toLowerCase().includes(`o`)){
        let index = company.indexOf(`o`);
        let lastIndex = company.lastIndexOf(`o`);
        if(index !== lastIndex){
            filteredArr.push(company);
        }
    }
});
// console.log(itCompanies.slice(Math.floor(itCompanies.length/2),Math.floor(itCompanies.length/2)+1));

// console.log(filteredArr);
// console.log(itCompanies.sort());
// console.log(itCompanies.reverse());
// console.log(itCompanies.slice(0,3));
// console.log(itCompanies.slice(-3));

// console.log(itCompanies.shift());
// console.log(itCompanies.splice(3,1));
// console.log(itCompanies.pop());
// itCompanies.splice(0);

// console.log(itCompanies);

// Level 2

// console.log(countries);
// console.log(webTechs);

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(text.split(` `).length);

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(!(shoppingCart.includes(`Meat`))){
    shoppingCart.unshift(`Meat`);
}
// console.log(shoppingCart);
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
if(!(shoppingCart.includes(`Sugar`))){
    shoppingCart.push(`Sugar`);
}
// console.log(shoppingCart);
let isAlergic = true;
let newShoppingCart = isAlergic ? shoppingCart.splice(shoppingCart.indexOf(`Honey`),1) : shoppingCart;
// console.log(shoppingCart);

shoppingCart[shoppingCart.indexOf(`Tea`)] = `Green Tea`;
// console.log(shoppingCart);

// countries.forEach((country)=>{
//     if(country.toLowerCase() === `ETHIOPIA`.toLowerCase()){
//         console.log(`ETHIOPIA`);
//     }
//     else{
//         countries.push(`ETHIOPIA`);
//     }
// })

// if(webTechs.includes(`Sass`)){
//     console.log(`Sass`);
// }else{
//     webTechs.push(`Sass`);
// }
// console.log(webTechs);
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node','Express', 'MongoDB'];
const fullStack = [...frontEnd,...backEnd];
// const fullStack =frontEnd.concat(backEnd);
// console.log(fullStack);

// **************************************************************
// **************************************************************


// Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages);
const sortedArr = ages.sort((a,b) => a-b);
let maxAge = null;
let minAge = null;

ages.forEach((age)=>{
    if(maxAge === null || maxAge < age){
        maxAge = age;
    }
    if(minAge === null || minAge > age){
        minAge = age;
    }
});

// console.log(maxAge);
// console.log(minAge);
// console.log(`Median Age: ${(ages[Math.floor(ages.length/2)])/2}`);
const totalAge = ages.reduce((sum,age)=>{
    return sum + age;
},0);
// console.log(totalAge/ages.length);
// console.log(`Range: ${maxAge - minAge}`);
// console.log(countries.slice(0,countries.length));
// console.log(countries.length);

if(countries.length % 2 !== 0){
    countries.push(`India`);
}
const countries1 = [];
const countries2 = [];

countries.forEach((country,index)=>{
    if(index < (countries.length)/2){
        countries1.push(country);
    }
    else{
        countries2.push(country);
    }
});

// console.log(countries1);
// console.log(countries2);