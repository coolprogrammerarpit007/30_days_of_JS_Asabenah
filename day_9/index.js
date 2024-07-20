`use strict`;

// console.log(`hello`);
const callback = n => Math.pow(n,2);

const cube = function(fun,num){
    return fun(num) * num;
}

// console.log(cube(callback,3));

// Exercise Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// countries.forEach(country => console.log(country));
// names.forEach(name => console.log(name));
// numbers.forEach(num => console.log(num))
// const newCountries = countries.map(country => country.toUpperCase());
// console.log(newCountries);
const newCountries = countries.map(country => country.toUpperCase().length);
// console.log(newCountries);
const newNumbers = numbers.map(num => num*num);
// console.log(newNumbers);
const newNames = names.map((name) => name.toUpperCase());
// console.log(newNames);

const validProducts = products.filter(product => product.price !== '').map((product) => product.price);
// console.log(validProducts); 

const landCountry = countries.filter(country => country.toLowerCase().includes(`land`))
// console.log(landCountry);
const sixCharCountry = countries.filter(country => country.length === 6);
// console.log(sixCharCountry);
const countryStartsWithE = countries.filter(country => country.startsWith("E"));
// console.log(countryStartsWithE);

const getStringLists = function(arr){
    const stringList = arr.filter(item => typeof item === `string`);
    return stringList;
}

// console.log(getStringLists([5,6,`Arpit`,`Roshan`,true]));

const numbersArr = [1,2,3,4,5,6,7,8,9,10];
const total = numbersArr.reduce((acc,num)=> acc+num,0);
// console.log(total);

let str = `,`;
const countryStr = countries.reduce((acc,country) => {
    str = country + str;
    return str;
},"");
// console.log(countryStr);

// console.log(names.some((name) => name.length >= 7));
// console.log(countries.every(country => country.toLowerCase().includes(`land`)));
// console.log(countries.find(country => country.length === 6));
// console.log(countries.findIndex(country => country.length === 6));
// console.log(countries.findIndex(country => country === `Norway`));
// console.log(countries.find(country => country === `Norway`));