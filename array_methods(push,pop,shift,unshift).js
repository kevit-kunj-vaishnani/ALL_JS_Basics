//-------------------------------------  array methods = push , pop , shift , unshift ----------------------------------------------

// 1. pop() =
let arr1 = [10, 20, 30, 40];

let t1 = arr1.pop(); // it will assign poped value to t1 = 40
console.log(t1); // 40
console.log(arr1); /* it will print updated array [ 10, 20, 30 ]
                      and change the original array */

//-----------------------------------------------------------------------------------

// 2. push() =
let arr2 = ["a", "b", "c", "d"];

let t2 = arr2.push("e"); // it will give length of array. how many elements are present in the array =5
console.log(t2); // 5
console.log(arr2); /* it will print updated array [ 'a', 'b', 'c', 'd', 'e' ]
                      and change the original array */
//-----------------------------------------------------------------------------------

// 3. shift() =
let arr3 = [10, 20, 30, 40];

let t3 = arr3.shift(); // it will assign value of 1st element which got removed from array (1st element got poped)
console.log(t3); // 10
console.log(arr3); /* it will print updated array [ 20, 30,40]
                    and change the original array */

//-----------------------------------------------------------------------------------

// 4. unshift() =
let arr4 = ["a", "b", "c", "d"];

let t4 = arr4.unshift("e"); // it will give length of array. how many elements are present in the array = 5
console.log(t4); // 5
console.log(arr4); /* it will print updated array [ 'e', 'a', 'b', 'c', 'd' ]
                      and change the original array */

//-----------------------------------------------------------------------------------
// 5. fill() method =

let arr51 = [1, 2, 3, 4];
let t51 = arr51.fill("ab");
console.log(t51); // [ 'ab', 'ab', 'ab', 'ab' ]
console.log(arr51); /* it will print updated array [ 'ab', 'ab', 'ab', 'ab' ]
                       and change the original array */

let arr52 = [1, 2, 3, 4];
let t52 = arr52.fill("ab", 2);
console.log(t52); // [ 1, 2, 'ab', 'ab' ]
console.log(arr52); /* it will print updated array [ 1, 2, 'ab', 'ab' ]
                       and change the original array */

let arr53 = [1, 2, 3, 4];
let t53 = arr53.fill("ab", 1, 3);
console.log(t53); // [ 1, 'ab', 'ab', 4 ]
console.log(arr53); /* it will print updated array [ 1, 'ab', 'ab', 4 ]
                       and change the original array */
//-----------------------------------------------------------------------------------
// 6. filter() method =

let arr6 = ["a", "b", "c", "d"];

let t6 = arr6.filter((n) => n > "a");
console.log(t6); // [ 'b', 'c', 'd' ]
console.log(arr6); /* it will print original array [ 'a', 'b', 'c', 'd' ]
                      and not change the original array */
//-----------------------------------------------------------------------------------

// 7. reverse() =
let arr7 = ["a", "b", "c", "d"];
let t7 = arr7.reverse();
console.log(t7); // [ 'd', 'c', 'b', 'a' ]
console.log(arr7); /* it will print updated array [ 'd', 'c', 'b', 'a' ]
                       and change the original array */

//-----------------------------------------------------------------------------------
// 8. splice() =

let arr8 = ["a", "b", "c", "d"];
let t8 = arr8.splice(1, 0, "A");
console.log(t8); // []
console.log(arr8); /* it will print updated array [ 'a', 'A', 'b', 'c', 'd' ]
                       and change the original array */

let arr9 = ["a", "b", "c", "d"];
let t9 = arr9.splice(1, 1, "B");
console.log(t9); // ['b']
console.log(arr9); /* it will print updated array [ 'a', 'B', 'c', 'd' ]
                       and change the original array */

//-----------------------------------------------------------------------------------
// 9. slice() =

const arr10 = ["a", "b", "c", "d", "e"];
const t10 = arr10.slice(1, 3);
console.log(t10); //     [ 'b', 'c' ]
console.log(arr10); /* it will print original array  [ 'a', 'b', 'c', 'd', 'e' ]
                       and not change the original array */

//-----------------------------------------------------------------------------------

// 10. sort() =

const array1 = [21, 37, 45, -12, -13, 37];
let c = array1.sort();
console.log(array1); //[ -12, -13, 21, 37, 37, 45 ]
console.log(c); // [ -12, -13, 21, 37, 37, 45 ]

array1.sort((a, b) => a - b); // sort by this when needed
console.log(array1); // [ -13, -12, 21, 37, 37, 45 ]

// sorting array of objects
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: -13 },
  { name: "Zeros", value: 37 },
];

// sort by value
items.sort((a, b) => a.value - b.value);
console.log(items);

// sort by name
items.sort((a, b) => a.name.localeCompare(b.name));
console.log(items);

//-----------------------------------------------------------------------------------

const arr11 = [1, 2, 3];

console.log(arr11.includes(2)); // returns boolean
