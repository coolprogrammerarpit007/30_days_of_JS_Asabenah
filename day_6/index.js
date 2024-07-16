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
    'Kenya'
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

// let str = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
// let randStr = ``;
// for(let i=0;i<5;i++){
//     randStr += str[Math.floor(Math.random() * str.length)]
// }
// console.log(randStr);