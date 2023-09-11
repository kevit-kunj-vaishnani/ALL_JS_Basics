// let q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const { default: isEmail } = require("validator/lib/isEmail");

// const year = [...q1, ...q2, ...q3, ...q4];
// a = [1, 2, ...q1];

// console.log(a);
//-----------------------------------------------------------------------------------------------------------
// let word = "manoj";
// let arr = [];

// for (let i = 0; i < word.length; i++) {
//   arr.push(word[i]);
// }
// console.log(arr);

// word = "manoj";
// arr = [];

// for (let i of word) {
//   arr.push(i);
// }
// console.log(arr);
//-------
// const myPromise = new Promise(function (myResolve, myReject) {
//   let a = 50;
//   if (a == 400) {
//     setTimeout(function () {
//       myResolve("I love You !!");
//     }, 3000);
//   } else {
//     setTimeout(function () {
//       myReject("you !!");
//     }, 3000);
//   }
// });

// myPromise.then(
//   function (value) {
//     console.log(value);
//   },

//   function (error) {
//     console.log(error);
//   }
// );

// function x() {
//   let a = 11;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var ans = x();
// console.log(ans);
// ans();

// ------------------

// console.log("start");
// let  a = function (a,b)
// {
//     console.log(a+b)
// }
// setImmediate(() => {console.log("immediate 1")});

// setImmediate(() => {console.log("immediate 2")});

// setTimeout(() => {console.log("time out 1")})

// setTimeout(() => {console.log("time out 2")})

// process.nextTick(() => {console.log("next 1")})

// a(4,6);

// process.nextTick(() => {console.log("next 2")})

// process.nextTick(() => {console.log("next 3")})
// console.log("end");

// ------------------

// const people = {
//   person1: {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
//   },
//   person2: {
//     name: 'Bob',
//     age: 25,
//     city: 'Los Angeles'
//   },
//   person3: {
//     name: 'Charlie',
//     age: 40,
//     city: 'Chicago'
//   },
//   person4: {
//     name: 'David',
//     age: 28,
//     city: 'San Francisco'
//   },
//   person5: {
//     name: 'Eve',
//     age: 22,
//     city: 'Seattle'
//   }
// };

// const arr = Object.values(people);

// arr.sort((a, b) => {
//   return a.city.localeCompare(b.city);
// });

//

// const a = ["a", "b", "c"];

// for (const i of a.values())
// {
//   console.log(i);
// }

// const arrayLike = {
//   length: 3,

// };

// arrayLike[0]="a"
// arrayLike[1]="a"
// arrayLike[2]="a"

// // for (const entry of Array.prototype.values.call(arrayLike)) {
// //   console.log(entry);
// // }

// arrayLike.length=1

// for (const entry of Array.prototype.values.call(arrayLike)) {
//   console.log(entry);
// }
// a
// b
// c

//  console.log(typeof (x=10);

/* console.log("start");   */

// async function demo(){

//     await new Promise((resolve)=>setTimeout(resolve,2000));

//     console.log("djkjdkd");

// }

// demo()

// 


















const func = async () => {
new Promise((resolve, reject) => { console.log('Hello there'); resolve();
})
}
console.log('Calling the promise');
func().then(() => {
console.log('Executed...');
})