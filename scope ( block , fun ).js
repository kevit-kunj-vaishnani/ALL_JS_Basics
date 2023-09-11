 
                                                        Scope
 ' Scope determines the visibility or accessibility of a variable or other resource in the area of your code.'


                                                            Global Scope

'  There is only one Global scope in the JavaScript document.' 
'  The area outside all the functions is consider the global scope and the variable defined inside the global scope can be accessed and altered in any other scopes.'


                                                            Local Scope

    ' Variables declared inside the functions become Local to the function '


                                                            Block Scope 

 ' A block scope is the area within if, switch conditions or for and while loops. ' 
 ' Generally speaking, whenever you see {curly brackets}, it is a block. '
 ' const and let are block scope, which means those variables exist only within the corresponding block. '

function foo(){
    if(true){
        var fruit1 = 'apple';        //var has function scope
        let fruit2 = 'strawberry';   //let block scope
        const fruit3 = 'banana';     //const block scope
        

    }
    console.log(fruit1);            //apple
    console.log(fruit2);            //error: fruit2 is not defined
    console.log(fruit3);            //error: fruit3 is not defined
}

foo();
console.log(fruit1);                // error fruit1 is not defined







// _______________________________________________________________________________________________________________

                                                    Lexical scope 

// Lexical scope means the children scope have the access to the variables defined in the parent scope. 
// The children functions are lexically bound to the execution context of their parents.
