`use strict`;

// console.log(`hello`);
const callback = n => Math.pow(n,2);

const cube = function(fun,num){
    return fun(num) * num;
}

// console.log(cube(callback,3));

// Exercise Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand',`Fizzy`,`France`]
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
const countryStr = countries.reduce((acc,country,index,arr) => {
    
    if(index === 0){
        return `${country}`
    }
    else if(index === countries.length-1){
        return `${acc}, and ${country} are north european countries!`;
    }
    else{
        return `${acc}, ${country}`;
    }
},"");
// console.log(countryStr);

// console.log(names.some((name) => name.length >= 7));
// console.log(countries.every(country => country.toLowerCase().includes(`land`)));
// console.log(countries.find(country => country.length === 6));
// console.log(countries.findIndex(country => country.length === 6));
// console.log(countries.findIndex(country => country === `Norway`));
// console.log(countries.find(country => country === `Norway`));


// Level 2

const totalPrice = products.map((product) => product.price).filter((price)=>price !== '').reduce((acc,price)=> acc+price,0);
// console.log(totalPrice);
const categorizeCountries = countries.filter(country => country.toLowerCase().includes(`land`));
// console.log(categorizeCountries);
const countCountry = function(countries){
    const countryObj = {};
    countries.forEach(country => {
        // console.log(country);
        if(countryObj.hasOwnProperty(`${country[0]}`)){
            countryObj[country[0]] += 1;
        }else{
            countryObj[country[0]] = 1;
        }
    });
    return [countryObj];
}

// console.log(countCountry(countries));

const maxCountryCount = function(countries){
    const countryObjArr = countCountry(countries);
    console.log(countryObjArr);
    const countryObj = countryObjArr.pop();
    // console.log(countryObj);
    let maxAlphabet = ``;
    let maxCount = null;
    for(const country in countryObj){
        if(maxCount === null || maxCount < countryObj[country]){
            maxCount = countryObj[country];
            maxAlphabet = country;
        }
    }
    // console.log(`${maxAlphabet} comses ${maxCount} times`);
}

// maxCountryCount(countries);

// *******************************************************
// *******************************************************

// Level 3

// sorting countries data on the basis of country
const countriesData = [
    {country: 'China', capital:'Bejjing',population: 1377422166},
    {country: 'India', capital:'New Delhi',population: 1295210000},
    {country: 'United States of America', capital:'Washington DC',population: 323947000},
    {country: 'Indonesia', capital:'Jakarta',population: 258705000},
    {country: 'Brazil', capital:'Brasília',population: 206135893},
    {country: 'Pakistan', capital:'Islamabad',population: 194125062},
    {country: 'Nigeria', capital:'Abuja',population: 186988000},
    {country: 'Bangladesh', capital:'Dhaka',population: 161006790},
    {country: 'Russian Federation', capital:'Mosko',population: 146599183},
    {country: 'Japan', capital:'Tokyo',population: 126960000}
    ]

    // countriesData.sort((a,b)=>{
    //     if(a.country < b.country){
    //         return -1;
    //     }
    //     else{
    //         return 1;
    //     }
    // });

    // Now Sorting on the basis of capital
    // countriesData.sort((a,b)=>{
    //     if(a.capital < b.capital){
    //         return -1;
    //     }
    //     else{
    //         return 1;
    //     }
    // });
    
    countriesData.sort((a,b)=>{
        if(a.population < b.population){
            return -1;
        }
        else{
            return 1;
        }
    });

    // console.log(countriesData);