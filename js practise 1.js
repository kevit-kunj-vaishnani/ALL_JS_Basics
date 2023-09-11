// 1 
var company = 'Coding Academy'; 

// 4        does not change the original string
console.log(company.toUpperCase())      // CODING ACADEMY

// 5        does not change the original string
console.log(company.toLowerCase())      // coding academy

// 6        does not change the original string
const str1 = 'hello kunj. i am from kevit'
console.log(str1.slice(6,17))    // kunj. i am 

const str2 = 'hello kunj. i am from kevit'
console.log(str2.substr(0,10))  // hello kunj

const str3 = 'hello kunj. i am from kevit'
console.log(str3.substring(0,10))  // hello kunj

// 7        does not change the original string
let str4 = 'You cannot end a sentence with because because because is a conjunction'
console.log(str4.substr(31,23))        // because because because

// 8         does not change the original string
console.log(str4.includes('Academy'))  // false

// 9         does not change the original string
console.log(str4.split(' '))

// 10       does not change the original string
var company1 = 'Coding Academy'
console.log(company1.split(' '))   // [ 'Coding', 'Academy' ]

// 11       does not change the original string
var company2 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(company2.split(','))

// 12       does not change the original string
var company3 = 'Coding Academy' 
console.log(company3.replace('Coding Academy','Microsoft Academy'))
// Microsoft Academy

// 13
var company4 = 'Coding Academy'
console.log(company4.charAt(10))

// 14
var company5 = 'Coding Academy'
console.log(company5.charCodeAt(10))

// 15
var company6 = 'Coding Academy'
console.log(company6.indexOf('c'))

// 16
var company7 = 'Coding Academy'
console.log(company7.lastIndexOf('c'))

// 17
var str5 = ' You cannot end a sentence with because because because is a conjunction '
console.log(str5.indexOf('because'))

//  18
var str6 = 'You cannot end a sentence with because because because is a conjunction'
console.log(str6.lastIndexOf('because'))

// 19
var str7 = 'You cannot end a sentence with because because because is a conjunction'
console.log(str7.search('because'))


// 20

var str8=' Coding Academy '
console.log(str8.trim())

// 21
var str9='Coding Academy'
console.log(str9.startsWith('Coding'))

// 22
var str10='Coding Academy'
console.log(str10.endsWith('Academy'))

// 23
var str11 = 'Coding Academy'
console.log(str11.match(/c/g));

// 24       
var str12 = 'You cannot end a sentence with because because because is a conjunction'
console.log(str12.match(/because/g).length);

// 25 
var str13 = 'Coding'
var str14 = 'Academy'
console.log(str13.concat(' ',str14))



// 26

var str15='Coding Academy'
console.log(str15.repeat(5))

// 27 

var str = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month'
let strArr = str.match((/\d+/g))     // it will give in string [ '5000', '10000', '15000' ]
let numArr = strArr.map(Number);          // it will convert string to Number [ 5000, 10000, 15000 ]
console.log(numArr.reduce((a,b)=>a+b))   // it will add and give output = 30000

    // 30

console.log(4 > 3);              // true
console.log(4 >= 3);             // true
console.log(4 < 3);              // false
console.log(4 <= 3);             // false
console.log(4 == 4);             // true
console.log(4 === 4);            // true
console.log(4 != 4);             // false
console.log(4 !== 4);            // false
console.log(4 != '4');           // false
console.log(4 == '4');           // true
console.log(4 === '4');          // false

// 31

const arr = [
                {'English':25},
                {'French':45},
                {'Arabic':91},
                {'Spanish':24},
                {'Russian':9},
                {'Portuguese':9},
                {'Dutch':8},
                {'German':7},
                {'Chinese':5},
                {'Swahili':4},
                {'Serbian':4}
            ]

arr.sort((a,b)=> Object.values(b)[0]-Object.values(a)[0])
console.log(arr.slice(0,5));

/*

 [
    { Arabic: 91 },
    { French: 45 },
    { English: 25 },
    { Spanish: 24 },
    { Russian: 9 }
  ]

*/

// 34

function suffle(arra) {
  for (var i = 0 ; i < arra.length - 1 ; i++) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arra[i];
      arra[i] = arra[j];
      arra[j] = temp;
  }
  console.log(arra)
}

var arra = [2,45,50,90,75,65]
suffle(arra)


//  3-5


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
    skills:['HTM'],
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
  ];

// =========================================== scoresGreaterThan85() ==========================================

function scoresGreaterThan85(users)
{
  console.log( users.filter(i => i.scores > 85 ) );
}

scoresGreaterThan85(users)

// =============================================== addUser() ======================================

function addUser(newobj){
    if((users.some((i)=>i.name===newobj.name))===false)
    {
      users.push(newobj)
    }
  console.log(users)
}

addUser( { name: 'Mark', scores: 88, skills: ['HTML', 'CSS'], age: 30 } );

//======================================== addUserSkill =============================================

function addUserSkill (users_name,skill_to_add)
{ 
  if((users.some((i)=> i.name===users_name ))===true){
    const temp = users.find((i) => i.name === users_name);        // find() will give 1st element which will satisfy the function
                                                                  //console.log(temp) = { name: 'Mark', scores: 88, skills: [ 'HTML', 'CSS' ], age: 30 }

    temp.skills.push(skill_to_add)
                                                                  // console.log(temp) = { name: 'Mark', scores: 88, skills: [ 'HTML', 'CSS', 'JS' ], age: 30 }
  }
  console.log(users)                                    // memory location copy thyu hase etla temp ma g push kairu e vastu users array na object ma thai gai hase
}


addUserSkill('Mark', 'JS');


//==========================================  editUser  ===========================================


function editUser(users_name, newobj){
  if(users.some((i)=>i.name===users_name)){
    const temp = users.find((i) => i.name === users_name)
    if(temp!='')
    {
      Object.assign(temp,newobj)
    }
  }
  console.log(users)
}

editUser('Mark', {scores:113})





/*
 36
*/

const dog = {}

//37

console.log(dog)


//38

dog.name='baro';
dog.legs=4;
dog.color='brown';
dog.bark = function () {
  return 'woof woof';
};  
dog.age=1.5;

// 39
console.log(dog)

//40
dog.breed='abc'
dog.getDogInfo='cute dog';
console.log(dog);

// 41

const personAccount = {

  firstName:'Kunj',
  lastName:'Patel',
  incomes:{
        job:40000,
        bussiness:40000,
        youtube:40000
  }   ,

  expenses: {
        Family:30000,
        Personal:20000
  }  ,

  totalIncome(){

    let totalInc= 0;
    for(let i in this.incomes)
    {
      totalInc=this.incomes[i]+totalInc;
    }
    return totalInc
  }   ,

  totalExpense(){

    let totalExp= 0;
    for(let i in this.expenses)
    {
      totalExp=this.expenses[i]+totalExp;
    }
    return totalExp
  }   ,

  accountBalance(){
    const totalBalance = this.totalIncome() - this.totalExpense();
    return totalBalance
  }   , 

  accountInfo(){
    return `\n\t Customer Name : ${this.firstName} ${this.lastName} \n\t Total Income : ${this.totalIncome()} \n\t Total Expence : ${this.totalExpense()} \n\t account balance : ${this.accountBalance()}`
  }   ,


  addIncome(type , amount){
      personAccount.incomes[type]=amount;           // it will add income type to incomes object . it is  personAccount.incomes.type=amount 
      return 
  }   ,

  addExpense(type , amount ){
    personAccount.expenses[type]=amount;          // it will add expense type to expenses object . it is  personAccount.expenses.type=amount
  },

}

console.log("totalIncome = "+personAccount.totalIncome());
console.log("totalExpense = "+personAccount.totalExpense());
console.log("accountBalance = "+personAccount.accountBalance())
console.log("accountInfo = "+personAccount.accountInfo());
personAccount.addIncome('happy',2500)
personAccount.addExpense('sad',5000)
console.log(personAccount.incomes)
console.log(personAccount.expenses)
console.log("accountBalance = "+personAccount.accountBalance())
console.log("accountInfo = "+personAccount.accountInfo());


// 42


const users = {
  Alex: {
   email: 'alex@alex.com',
   skills: ['HTML', 'CSS', 'JavaScript'],
   age: 20,
   isLoggedIn: false,
   points: 30
  },
  Asab: {
   email: 'asab@asab.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
   age: 25,
   isLoggedIn: false,
   points: 50
  },
  Brook: {
   email: 'daniel@daniel.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
   age: 30,
   isLoggedIn: true,
   points: 50
  },
  Daniel: {
   email: 'daniel@alex.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
   age: 20,
   isLoggedIn: false,
   points: 40
  },
  John: {
   email: 'john@john.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
   age: 20,
   isLoggedIn: true,
   points: 50
  },
  Thomas: {
   email: 'thomas@thomas.com',
   skills: ['HTML', 'CSS', 'JavaScript', 'React'],
   age: 20,
   isLoggedIn: false,
   points: 40
  }
};

function login(users){ 
  
  count = 0 ;
  for(let i in users){                                         // console.log(i) =  keys
     if(users[i].isLoggedIn===true)                             // console.log(users[i]) = values
     {
      count++;
     }
  }
  console.log(count)
}



function point(users)
{
  count = 0;
  for(let i in users)
  {
    if(users[i].points>=50)
    {
      count = count + 1 ;
    }
  }
  console.log(count)
}


login(users)
point(users)



// 43


const obj1 = {...users}

obj1['kunj']={

          email: 'daniel@alex.com',
          skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
          age: 20,
          isLoggedIn: false,
          points: 40
}

console.log(users)
console.log(obj1)


// 44

console.log(Object.keys(users))

// 45

console.log(Object.values(users))

// 46 

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let a = JSON.stringify(skills)
console.log(skills, typeof skills);          // [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ] object
console.log(a, typeof a);                   // ["HTML","CSS","JS","React","Node","Python"] string 

// 47

let age = 250;
let b = JSON.stringify(age)
console.log(age, typeof age);                // 250 string
console.log(b, typeof b);                   // 250 string

// 48

let isMarried = true;
let c = JSON.stringify(isMarried)
console.log(isMarried, typeof isMarried);   // true boolean
console.log(c, typeof c);                   // true string


// 49

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

let d = JSON.stringify(student)

console.log(student, typeof student);   
/*
{
  firstName: 'Asabeneh',
  lastName: 'Yetayehe',
  age: 250,
  isMarried: true,
  skills: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Python' ]
} object
*/

console.log(d, typeof d); 


/*

{
    "firstName":"Asabeneh",
    "lastName":"Yetayehe",
    "age":250,
    "isMarried":true,
    "skills":["HTML","CSS","JS","React","Node","Python"]
}    string

*/

// 50

const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

let e = (JSON.stringify(student,['firstName','lastName','skills'])) 
console.log(e);