// ---------------------------------------------------------------- Concept 1 -----------------------------------------------------------------------------------

const fruits = [];
fruits.push("banana", "apple", "peach");

console.log(fruits.length); // 3

//{ start 1 = Increasing the length extends the array by adding empty slots without creating any new elements  not even undefined.
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'

console.log(fruits); //  [ 'banana', 'apple', 'peach', <2 empty items>, 'mango' ]
console.log(fruits.length); // 6

console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(Object.values(fruits)); // [ 'banana', 'apple', 'peach', 'mango' ]
// end 1 }



//{ start 2 =
fruits[4] = "kiwi";
console.log(fruits[4]); // 'kiwi'

console.log(fruits); //  [ 'banana', 'apple', 'peach', <1 empty item>, 'kiwi', 'mango' ]
console.log(fruits.length); // 6

console.log(Object.keys(fruits)); // [ '0', '1', '2', '4', '5' ]
console.log(Object.values(fruits)); // [ 'banana', 'apple', 'peach', 'kiwi', 'mango' ]
// end 2 }

//{ start 3 = Decreasing the length property deletes the elements.
fruits.length = 2;
console.log(fruits);  // [ 'banana', 'apple' ]

console.log(fruits.length); // 2
console.log(Object.keys(fruits)); // [ '0', '1' ]
// end 3 }



//  or  //




// another way = for getting key and values
const fruit =  [ 'banana', 'apple' ]
const temp2 = fruit.keys();
for( const i of temp2 )
{
        console.log(i);
}
// 0
// 1

const temp3 = fruit.values();
for( const i of temp3 )
{
        console.log(i);
}
// banana
// apple


// ---------------------------------------------------------------- Concept 2 -----------------------------------------------------------------------------------


//  2. concat() array method

// example 1 =  concating 2 array
const a1 = ['a', 'b', 'c'];
const a2 = ['d', 'e', 'f'];
const a3 = array1.concat(array2);

console.log(a3);    //  ["a", "b", "c", "d", "e", "f"]

///////////////////////////////////////////////////////////////////////////////////////////

// example 2 =  concating more than 2 array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const arr4 = arr1.concat(arr2, arr3);

console.log(arr4); //   [1, 2, 3, 4, 5, 6, 7, 8, 9]

// end 1 }


// ---------------------------------------------------------------- Concept 3 -----------------------------------------------------------------------------------


// 3. map() array method

// example 1 = 
const arr = ["a", "b", "c", "d"];

arr.map((value,index,array)=>{
    console.log(value);
})

/*
a
b
c
d
*/

///////////////////////////////////////////////////////////////////////////////////////////
// example 2 = 

const arr = ["a", "b", "c", "d"];

arr.map((value,index,array)=>{
    console.log(value,index,array);
})

/* output 
a 0 [ 'a', 'b', 'c', 'd' ]
b 1 [ 'a', 'b', 'c', 'd' ]
c 2 [ 'a', 'b', 'c', 'd' ]
d 3 [ 'a', 'b', 'c', 'd' ]
*/


///////////////////////////////////////////////////////////////////////////////////////////
// example 3 = 

const arr = ["a", "b", "c", "d"];

arr.map((value,index,array)=>{
    console.log(index, value, array)
})

let a = arr.map((value,index,array)=>{
    return value
})

console.log(a);  // [ 'a', 'b', 'c', 'd' ]

/* output = 
0 a [ 'a', 'b', 'c', 'd' ]
1 b [ 'a', 'b', 'c', 'd' ]
2 c [ 'a', 'b', 'c', 'd' ]
3 d [ 'a', 'b', 'c', 'd' ]

[ 'a', 'b', 'c', 'd' ]
*/


// ---------------------------------------------------------------- Concept 4 -----------------------------------------------------------------------------------
//   4. filter() array method

// example 1 = 

const arr = [10,210,30,45,90];

let a = arr.filter((value)=>{
    return value>100;
})

console.log(a); // [210]

///////////////////////////////////////////////////////////////////////////////

const arr = [10,210,30,45,90];

arr.filter((value)=>{
    console.log(value>100);
});

/*
false
true
false
false
false
*/



// ---------------------------------------------------------------- concept 5 ------------------------------------------------------
// 5 copyWithin() array method =   changes the original array

const array1 = ['a', 'b', 'c', 'd', 'e', 'f'];

// Copy to index 0 the element at index 3 to index 5(not index 5)
console.log(array1.copyWithin(0, 3, 5));            // ["d", "e", "c", "d", "e", "f"]

/////////////////////////////////////////////////////////////////

const array2 = ['a', 'b', 'c', 'd', 'e', 'f'];

// Copy to index 1 all elements from index 3 to the end
console.log(array2.copyWithin(1, 3));               // ["a", "d", "e", "f", "e", "f"]


// ---------------------------------------------------------------- concept 6 ------------------------------------------------------
// 6. every() array method =  

const array4 = [1, 30, 39, 29, 10, 13];
console.log(array4.every((currentValue) => currentValue < 40)); /* true */