`use strict`;

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