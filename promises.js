// let p = new Promise(function (resolve, reject) {
//   let a = 2;
//   if (a == 2) {
//     resolve(); // when successful
//   } else {
//     reject(); // when error
//   }
// });

// p.then(
//   function () {
//     console.log("right");
//   }, // line 11-13 is what will be printed when true/myResolve

//   function () {
//     console.log("wrong"); // line 15-17 is what will be printed when false/myReject
//   }
// );

// // // output = right

// // --------------------------------------------------------------------------------------------------------------------------------

// let p = new Promise(function (resolve, reject) {
//   let a = 2;
//   if (a == 2) {
//     resolve("i am resolve"); // when successful
//   } else {
//     reject("i am reject"); // when error
//   }
// });

// p.then(
//   function (result) {
//     console.log(result);
//   }, // line 11-13 is what will be printed when true/myResolve

//   function (error) {
//     console.log(error); // line 15-17 is what will be printed when false/myReject
//   }
// );

// // output = i am resolve

// --------------------------------------------------------------------------------------------------------------------------------

// let p = new Promise(function (resolve, reject) {
//   let a = 2;
//   if (a == 2) {
//     resolve("i am resolve"); // when successful
//   } else {
//     reject("i am reject"); // when error
//   }
// });

// p.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// output = i am resolve

/*

If you are interested only in successful outcomes, you can just pass one argument to it, like this:

promise.then(
  (result) => {
      console.log(result);
  }
);

If you are interested only in the error outcome, you can pass null for the first argument, like this:

p.then(
  null,
  (error) => {
      console.log(error)
  }
);
*/

// --------------------------------------------------------------------------------------------------------------------------------

let p = new Promise(function (resolve, reject) {
  let a = 2;

  console.log("s");
  if (a === 2) {
    resolve({ username: "kunj" }); //this es executed
  } else {
    reject("error abc");
  }
  console.log("a");
});

p.then(function (result) {
  console.log(result.username); //kunj
});

p.then((person1) => {
  console.log(person1); //{ username: "kunj" }
  console.log(person1.username); //kunj
}).catch((error) => {
  console.log(error);
});

// output = s;
// a;
// {
//   name: "kunj";
// }
