`use strict`;

//  Destructuring and Spread 

const numbers = [1,2,3];
const [first,second,third] = numbers;
// console.log(first,second,third);
const [friend1,friend2,friend3,...freiends] = ['John','Shane','Smith','Romi','Romeo'];
// console.log(friend1,friend2,friend3,freiends);

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  const [frontEnd,backEnd] = fullStack;
//   console.log(frontEnd,backEnd);

const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }

//   const {width,height,area} = rectangle;
//   const {width:w,height:h,area:a} = rectangle;
//   console.log(width,height,area);

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
  }

  const getPersonalInfo = function({firstName,lastName,age,country,job,skills,languages}){
        const formattedSkills = skills.reduce((acc,skill,index)=>{
            if(index === 0){
                return `${skill}, `
            }
            else if(index === skills.length-1){
                return `${acc} and ${skill}`
            }
            else{
                return `${acc}, ${skill}`
            }
        },'');

        const formattedLanguages = languages.reduce((acc,language,index)=>{
            // console.log(index);
            if(index === 0){
                return `${language} `
            }
            else if(index === languages.length-1){
                return `${acc} and a little bit of ${language}`
            }else{
                return `${acc}, ${language}`
            }
        },'')
        // console.log(formattedLanguages);
        return `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and He speaks ${formattedLanguages} `;
    }
    //   console.log(getPersonalInfo(person));

  const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
    ]

// for(const {task,time,completed} of todoList){
//     console.log(task,time,completed);
// }

// Exercise Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants;
// console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp);
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin,est,swd,den,nor] = countries;
// console.log(fin,est,swd,den,nor);

const rectangleObj = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

//   Destructure the rectangle object by its properties or keys.
const {width:w,height:h,area:a,perimeter:p} = rectangleObj;
// console.log(w,h,a,p);

// Level 2

// for(const {name,scores,skills,age} of users){
//     console.log(name,scores,skills,age);
// }

// users.forEach((user)=>{
//     if(user.skills.length < 2){
//         console.log(user);
//     }
// })


// Level 3
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

const [firstName,skills,[,,jsScore,reactScore]] = student;
// console.log(firstName,skills,jsScore,reactScore);

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

const convertArrayToObjects = function([user1,user2]){
  const [firstName1,skills1,scores1] = user1;
  const [firstName2,skills2,scores2] = user2;
  const obj1 = {
    name:firstName1,
    skills:skills1,
    scores:scores1
  };
  const obj2 = {
    name:firstName2,
    skills:skills2,
    scores:scores2
  };
  return [obj1,obj2]
}

// console.log(convertArrayToObjects(students));

const student1 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {...student1};
newStudent.skills.frontEnd.push({'skill':'BootStrap','Level':8});
newStudent.skills.backEnd.push({'skill':'Express','Level':9});
newStudent.skills.dataBase.push({'skill':'SQL','Level':8});
newStudent.skills.dataScience.push('SQL');
console.log(newStudent);
// console.log(student1);

