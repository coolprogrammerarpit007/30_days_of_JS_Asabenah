`use strict`;

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    `Iceland`
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

//   Exercise Level 1

// for(let i=0; i< 10;i++)
//     console.log(i);

// for(let i=10; i> 0;i--)
//     console.log(i);

// let n= 5;
// for(let i=0;i<=n;i++)
//     console.log(i);

// for(let i=0;i<7;i++){
//     let str = ``;
//     for(let j=0;j<=i;j++){
//         str += `#`
//         console.log(str);
//     }
//     console.log(`\n`);
// }


// for(let i=0;i<=10;i++){
//     console.log(`${i} X ${i} = ${i*i}`);
// }

// for(let i=0;i<=10;i++){
//     console.log(`${i} | ${i*i} | ${i*i*i}`);
// }
// let i=1;
// while(i<=100){
//     if(i%2 === 0){
//         console.log(i);
//     }
//     i++;
// }
// let i=1;
// while(i<=100){
//     if(!(i%2 === 0)){
//         console.log(i);
//     }
//     i++;
// }


// for(let i=1;i<=100;i++){
//     let flag = false;
//     for(let j=2;j<i;j++){
//         if(i%j === 0){
//             flag = true;
//             break;
//         }
//     }
//     if(!flag){
//         console.log(`Prime Number: ${i}`);
//     }
// }

// let total = 0;
// for(let i=0;i<=100;i++){
//     total += i;
// }
// console.log(total);
// let totalEven = 0;
// let totalOdd = 0;
// for(let i=1;i<=100;i++){
//     if(i%2 === 0){
//         totalEven += i;
//     }else{
//         totalOdd += i;
//     }
// }
// console.log(totalEven);
// console.log(totalOdd);

// const randArr = [];
// for(let i=0;i<=4;i++){
//     randArr.push(Math.floor(Math.random() * 100))
// }
// console.log(randArr);

let str = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
let randStr = ``;
// for(let i=0;i<5;i++){
//     randStr += str[Math.floor(Math.random() * str.length)]
// }
// console.log(randStr);


// Level 2

// let randomIndex = Math.floor(Math.random() * 10) + 10;
// for(let i=5 ; i<= randomIndex; i++){
//     randStr += str[Math.floor(Math.random() * str.length)]
// }
// console.log(randStr);
// let hexStr = `0123456789ABCDEF`;
// let hexCode = `#`;
// for(let i=0;i<=5;i++){
//     hexCode += hexStr[Math.floor(Math.random() * hexStr.length)]
// }
// console.log(hexCode.toLowerCase());

// let red = Math.floor(Math.random() * 256);
// let green = Math.floor(Math.random() * 256);

// let blue = Math.floor(Math.random() * 256);

// console.log(`rgb(${red},${green},${blue})`);

// const countriesLength = [];
// for(couuntry of countries){
//     countriesLength.push(couuntry.length);
// }
// console.log(countriesLength);
let newCountries = [];
for (let country of countries){
    newCountries.push([country,country.slice(0,3),country.length]);
}
// console.log(newCountries);
// const landCountry = [];
// for (let country of countries){
//     if(country.endsWith(`land`))
//         landCountry.push(country);
// }
// console.log(landCountry);
const iaCountry = [];
for (let country of countries){
    if(country.endsWith(`ia`))
        iaCountry.push(country);
}
// console.log(iaCountry);

// let largestCountry = null;
// for(let country of countries){
//     if(largestCountry === null || country.length > largestCountry.length){
//         largestCountry = country;
//     }
// }
// console.log(largestCountry);

const countries5 = [];
for(let country of countries){
    if(country.length === 5){
        countries5.push(country);
    }
}
// console.log(countries5);

 let largesTech = null;
for(let tech of webTechs){
    if(largesTech === null || tech.length > largesTech.length){
        largesTech = tech;
    }
}
// console.log(largesTech);
let newTechs = [];
for (let tech of webTechs){
    newTechs.push([tech,tech.length]);
}
// console.log(newTechs);

let stack = ``;
for(let str of mernStack){
    stack += str[0];
}
// console.log(stack);

// for (const tech of webTechs) {
//     console.log(tech);
// }

// const fruits = ['banana', 'orange', 'mango', 'lemon'] 
// for(let i=fruits.length-1;i>=0;i--)
//     console.log(fruits[i]);


// Level 3
const copiedCountries = [...countries];
// console.log(copiedCountries);
copiedCountries.sort();
// console.log(copiedCountries);
// console.log(countries);
const capitalizeCountriesArray = [];
countries.reverse();
for(let country of countries){
    capitalizeCountriesArray.push(country.toUpperCase());
}
// console.log(capitalizeCountriesArray);