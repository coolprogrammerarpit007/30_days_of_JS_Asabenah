`use strict`;

// Level-1 

let challenge = '30 days of JavaScript Challenge';
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLocaleLowerCase());
// console.log(challenge.substring(0,2));
// console.log(challenge.toLowerCase().includes('challenge'));
// console.log(challenge.split(' '));
const bigCompanies = 'Meta,Google,Microsoft,Apple,IBM,Oracle,Amazon';
// console.log(bigCompanies.split(','));
// console.log(challenge.replace('JavaScript','Python'));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt('J'));
// console.log(challenge.indexOf('a'));
// console.log(challenge.lastIndexOf('a'));
// console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));
// console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'));
// console.log('You cannot end a sentence with because because because is a conjunction'.search('because'));
// console.log('   30 days of JavaScript '.trim());
// console.log(challenge.startsWith('31'));
// console.log(challenge.endsWith('30'));
// console.log(challenge.match(/a/gi));
// console.log(`30 days of `.concat('React'));
// console.log(challenge.repeat(2));

// **************************************************************
// **************************************************************

// Exercise Level 2  Challenge
// console.log(`The Quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help another.`);
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
// console.log(+'10' === 10);
// console.log(Math.round(parseFloat('9.8')) === 10);
// console.log(`python`.includes(`on`));
// console.log(`jargon`.includes(`on`));
// console.log(Math.floor(Math.random() * 101));
// console.log((Math.floor(Math.random() * 50)) + 50);
// console.log(Math.floor(Math.random() * 256));
let str = 'JavaScript';
let randomIndex = Math.floor(Math.random() * str.length);
// console.log(str[randomIndex]);
// console.log(`1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125`);
let startIndex = 'You cannot end a sentence with because because because is a conjunction'.indexOf(`because`);
let endIndex = 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf(`because`);
// console.log('You cannot end a sentence with because because because is a conjunction'.match(/because/gi));
// console.log('You cannot end a sentence with because because because is a conjunction'.substring());



// ***************************************************
// ***************************************************

// Level-3 

let quoteStr = `Love is the best thing in this world. Some found their love and some are still looking for their love. `;
const loveArr = quoteStr.match(/LOVE/gi);
// console.log(loveArr.length);
let becauseStr = 'You cannot end a sentence with because because because is a conjunction';
const becauseArr = becauseStr.match(/because/gi);
// console.log(becauseArr.length);

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
sentence = sentence.replace(/[^a-zA-Z ]/g,''); // to remove special characters from the string
// console.log(sentence);

const sentenceArr = sentence.split(` `); // split string into array
// console.log(sentenceArr);
const newSentenceObj = {};

// to count every word in the string.
sentenceArr.forEach((word)=>{
    if(word in newSentenceObj){
        newSentenceObj[word]++;
    }else{
        newSentenceObj[word] = 1;
    }
});

// console.log(newSentenceObj);

// to count word which repeats maximum times.

let maxCount = null;
let maxWord;
for (const key in newSentenceObj) {
    if(maxCount === null || newSentenceObj[key] > maxCount){
        maxCount = newSentenceObj[key];
        maxWord = key;
    }
}

// console.log(`The most frequent word is: ${maxWord} which repeats ${maxCount} times in the sentence!`);


const totalIncomeStr =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const numbers = totalIncomeStr.match(/\d+/g);
// console.log(`His Total Income: ${(Number(numbers[0]) * 12) + (Number(numbers[1])) + (Number(numbers[2]) * 12)} `);
