`use strict`;

// Exercise Level 1
// const fullName = function(){
//     console.log(`Arpit Mishra`);
// }
// // fullName();
const fullName = function(firstName,lastName){
    return `${firstName} ${lastName}`
}
// console.log(fullName(`Arpit`,`Mishra`));

const addNums = (num1,num2) => num1 + num2;
// console.log(addNums(25,35));
// const areaRect = (len,width) => len * width;
// console.log(areaRect(15,15));
const areaRectPera= (len,width) => 2*(len+width);
// console.log(areaRectPera(15,15));
const volumePrism = (length,width,height) => (length*width*height);
// console.log(volumePrism(12,12,12));
const areaCircle = (radius) => 3.14 * (Math.pow(radius,2));
// console.log(areaCircle(2));
const circleCircumfrence = (radius) => 2*3.14*(radius);
// console.log(circleCircumfrence(2));
const density = (mass,volume) => (mass/volume);
// console.log(density(100,100));
const speed = (mass,gravity) =>  mass * gravity;
// console.log(speed(10,10));
const tempFarh = (degreeCelcius) => (degreeCelcius * (9/5)) + 32;
// console.log(tempFarh(100));
const bmiCalc = function(weight,height){
    const bmi = weight/(Math.pow(height,2));
    // console.log(bmi);
    let result;
    if(bmi <= 18.5){
        result =  'UnderWeight';
    }
    else if(bmi > 18.5 && bmi <= 24.9){
        result =  `Normal`;
    }
    else{
        result =  'Over Weight';
    }
    return result;
}

// console.log(bmiCalc(70,1.75));
// console.log(bmiCalc(60,1.60));

const checkSeason = (month)=>{
    switch(month){
        case 'december':
        case 'january':
        case 'feburary':
        case 'march':
            console.log(`Winter`);
            break;
        case 'April':
        case 'May':
        case 'June':
        case 'July':
            console.log(`Summer`);
            break;
        case 'August':
        case 'september':
        case 'october':
        case 'november':
            console.log(`Winter`);
            break;
        default:
            console.log(`Invalid Month!`);
    }
}

// checkSeason(`january`);

const maxNum = function(...nums){
    let largest = nums[0];
    nums.forEach((num)=>{
        if(num >= largest){
            largest = num;
        }
    })
    return largest;
}

// console.log(maxNum(75,25,-125));