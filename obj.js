CONCEPT 1 = change sub object value

let obj = {
  name: "kunj",
  age: 22,
  mob: { a4: 123, a2: 567, a5: "kunj pate" },
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

let obj1 = { ...obj };

obj1.mob = { a4: 456, a2: 234, a5: "kunj pate" };
console.log(obj1.mob);

console.log(obj.mob);

/*
{ a4: 456, a2: 234, a5: 'kunj pate' }
{ a4: 123, a2: 567, a5: 'kunj pate' }
*/

~~~~~~~~~~~~~~~~~~~~   or   //~~~~~~~~~~~~~~~~~~~

let obj = {
  name: "kunj",
  age: 22,
  mob: { a4: 123, a2: 567, a5: "kunj pate" },
};

let obj1 = { ...obj, mob: { a4: 456, a2: 234, a5: "kunj pate" } };
console.log(obj1.mob);
console.log(obj.mob);
/*
{ a4: 456, a2: 234, a5: 'kunj pate' }
{ a4: 123, a2: 567, a5: 'kunj pate' }
*/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CONCEPT 2 = change key value

let obj = {
  name: "Kunj",
  age: 22,
  mob: { a4: 123, a2: 567, a5: "kunj pate" },
};

let obj1 = { ...obj, name: "Manoj" };
console.log(obj1);
console.log(obj);
/*
{ name: 'Manoj', age: 22, mob: { a4: 123, a2: 567, a5: 'kunj pate' } }
{ name: 'Kunj', age: 22, mob: { a4: 123, a2: 567, a5: 'kunj pate' } }
*/

~~~~~~~~~~~~~~~~~~~~   or   ~~~~~~~~~~~~~~~~~~~~~~~~

let obj = {
  name: "Kunj",
  age: 22,
  mob: { a4: 123, a2: 567, a5: "kunj pate" },
};

let obj1 = { ...obj };
obj1.name="Manoj";
console.log(obj1);
console.log(obj);
/*
{ name: 'Manoj', age: 22, mob: { a4: 123, a2: 567, a5: 'kunj pate' } }
{ name: 'Kunj', age: 22, mob: { a4: 123, a2: 567, a5: 'kunj pate' } }
*/



// CONCEPT 3 = Printing only keys name

let obj = {
  name: "kunj",
  age: 22,
  mob: { a4: 123, a2: 567, a5: "kunj pate" },
};

for (let key in obj) {
  for(let value in obj[key])
  {
    console.log(obj[key][value]);
  }  
  
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//      shallow copy of object=


const obj1 = {
  name : '' ,
  age : 24
}

const obj2 = {...obj1 , age:25}
obj2.name = 'kunj'

console.log(obj1.name, obj2.name , obj1.age , obj2.age) //console.log( obj1.name , obj2.name ) will give only 1 time kunj as obj1 & obj2 will be pointing to the same memory location as obj2 is shallow copy of obj1 . 
//  kunj 24 25


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//      object to string (JSON.stringify()) & string to object (JSON.parse())

const obj1 = {
  name : 'kunjan' ,
  age : 24
}

const obj_to_str = JSON.stringify(obj1)
console.log(obj_to_str);                   // {"name":"kunjan","age":24}
console.log(obj_to_str.name);              // undefined

const str_to_obj = JSON.parse(obj_to_str)
console.log(str_to_obj);                   // { name: 'kunjan', age: 24 }
console.log(str_to_obj.name);              // kunjan