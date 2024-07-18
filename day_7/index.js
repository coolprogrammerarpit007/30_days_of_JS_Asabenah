`use strict`;

// Exercise Level 1
// const fullName = function(){
//     console.log(`Arpit Mishra`);
// }
// // fullName();
const fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};
// console.log(fullName(`Arpit`,`Mishra`));

const addNums = (num1, num2) => num1 + num2;
// console.log(addNums(25,35));
// const areaRect = (len,width) => len * width;
// console.log(areaRect(15,15));
const areaRectPera = (len, width) => 2 * (len + width);
// console.log(areaRectPera(15,15));
const volumePrism = (length, width, height) => length * width * height;
// console.log(volumePrism(12,12,12));
const areaCircle = (radius) => 3.14 * Math.pow(radius, 2);
// console.log(areaCircle(2));
const circleCircumfrence = (radius) => 2 * 3.14 * radius;
// console.log(circleCircumfrence(2));
const density = (mass, volume) => mass / volume;
// console.log(density(100,100));
const speed = (mass, gravity) => mass * gravity;
// console.log(speed(10,10));
const tempFarh = (degreeCelcius) => degreeCelcius * (9 / 5) + 32;
// console.log(tempFarh(100));
const bmiCalc = function (weight, height) {
  const bmi = weight / Math.pow(height, 2);
  // console.log(bmi);
  let result;
  if (bmi <= 18.5) {
    result = "UnderWeight";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    result = `Normal`;
  } else {
    result = "Over Weight";
  }
  return result;
};

// console.log(bmiCalc(70,1.75));
// console.log(bmiCalc(60,1.60));

const checkSeason = (month) => {
  switch (month) {
    case "december":
    case "january":
    case "feburary":
    case "march":
      console.log(`Winter`);
      break;
    case "April":
    case "May":
    case "June":
    case "July":
      console.log(`Summer`);
      break;
    case "August":
    case "september":
    case "october":
    case "november":
      console.log(`Winter`);
      break;
    default:
      console.log(`Invalid Month!`);
  }
};

// checkSeason(`january`);

const maxNum = function (...nums) {
  let largest = nums[0];
  nums.forEach((num) => {
    if (num >= largest) {
      largest = num;
    }
  });
  return largest;
};

// console.log(maxNum(75,25,-125));

// Exercise Level 2

const printArray = function (arr) {
  arr.forEach((num) => {
    console.log(num);
  });
};

// printArray([5,6,`Arpit`,true]);

const showDateTime = function () {
  const now = new Date();
  const year = now.getFullYear();
  const month =
    String(now.getMonth()).length > 1 ? now.getMonth() : `0` + now.getMonth();
  const date =
    String(now.getDate()).length > 1 ? now.getDate() : `0` + now.getDate();
  const hrs =
    String(now.getHours()).length > 1 ? now.getHours() : `0` + now.getHours();
  const mins =
    String(now.getMinutes()).length > 1
      ? now.getMinutes()
      : `0` + now.getMinutes();
  return `${year}/${month}/${date}  ${hrs}:${mins}`;
};

// console.log(showDateTime());

const swapValues = function (num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  console.log(num1, num2);
  return;
};
// swapValues(56,23);

const reverseArr = function (arr) {
  return arr.reverse();
};

// console.log(reverseArr([1,2,3,4,5]));
// console.log(reverseArr(['A', 'B', 'C']));

const capitalizeArr = function (arr) {
  const updatedArr = [];
  arr.forEach((item) => {
    updatedArr.push(`${item[0].toUpperCase()}${item.slice(1)}`);
  });
  return updatedArr;
};

// console.log(capitalizeArr([`arpit`,`ramesh`,`manish`]));

const addItem = function (item) {
  const arr = [];
  arr.push(item);
  return arr;
};

// console.log(addItem(`Manish`));
// console.log(addItem(`Ramesh`));

const removeItem = function (index) {
  const arr = [1, 2, 3, 4, 5];
  arr.splice(index, 1);
  return arr;
};

// console.log(removeItem(2));

const sumNumbers = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }

  console.log(total);
  return total;
};

// sumNumbers(10)

const sumNumbersEven = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if(i % 2 === 0){
        total += i;
    }
  }

  console.log(total);
  return total;
};

// sumNumbersEven(10)
const sumNumbersOdd = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    if(i % 2 !== 0){
        total += i;
    }
  }

  console.log(total);
  return total;
};

// sumNumbersOdd(10)

const sumNumbersOddAndEven = function (num) {
    let countOdd = 0;
    let countEven = 0;
    for (let i = 0; i <= num; i++) {
      if(i % 2 !== 0){
          countOdd++;
      }else{
        countEven++;
      }
    }
  
    console.log(countOdd,countEven);
    // return total;
  };

//   sumNumbersOddAndEven(100);

const totalArr = function(...arr){
    let total = 0;
    arr.forEach((num)=>{
        total += num;
    })
    return total;
}
// console.log(totalArr(...[1, 2, 3]));
// console.log(totalArr(...[1, 2, 3,4]));

const str = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
const hexStr = `0123456789ABCDEF`;
const generateIP = function(){
    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);
    let num4 = Math.floor(Math.random() * 256);
    return `${num1}.${num2}.${num3}.${num4}`;
}

// console.log(generateIP());

const ranomMacAddress = function(){
    let str1 = `${str[Math.floor(Math.random()*str.length)]}${str[Math.floor(Math.random()*str.length)]}`.toUpperCase();
    let str2 = `${str[Math.floor(Math.random()*str.length)]}${str[Math.floor(Math.random()*str.length)]}`.toUpperCase();
    let str3 = `${str[Math.floor(Math.random()*str.length)]}${str[Math.floor(Math.random()*str.length)]}`.toUpperCase();
    let str4 = `${str[Math.floor(Math.random()*str.length)]}${str[Math.floor(Math.random()*str.length)]}`.toUpperCase();
    let str5 = `${str[Math.floor(Math.random()*str.length)]}${str[Math.floor(Math.random()*str.length)]}`.toUpperCase();
    let str6 = `${str[Math.floor(Math.random()*str.length)]}${str[Math.floor(Math.random()*str.length)]}`.toUpperCase();

    return `${str1}:${str2}:${str3}:${str4}:${str5}:${str6}`;
}

// console.log(ranomMacAddress());


// const randomHexCode = function(){
//     let hexCode = `#`;
//     for(let i=0;i<=5;i++){
//         hexCode += hexStr[Math.floor(Math.random()*hexStr.length)]
//     }
//     return hexCode;
// }

// console.log(randomHexCode());

const randomuserId = function(){
    let userId = ``;
    for(let i=0;i<=6;i++){
        userId += str[Math.floor(Math.random()*str.length)]
    }
    return userId;
}

// console.log(randomuserId());