`use strict`;

// Level 1
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];
const months = ['Jan','Feb','Mar','April','May'];

const setOfNumbers = new Set();
for(let i=1;i<=10;i++){
    setOfNumbers.add(i)
}

console.log(setOfNumbers.delete(5));
// setOfNumbers.clear();

// console.log(setOfNumbers);
const setOfMonths = new Set(months);
// console.log(setOfMonths);
const nestedArr = [
    ['jan',3],
    ['feb',3],
    ['mar',3],
    ['april',5],
    ['may',3],
    ['may',2]
]

const mapOfMonths = new Map(nestedArr);
// console.log(mapOfMonths);