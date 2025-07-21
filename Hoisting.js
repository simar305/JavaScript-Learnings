// console.log(x, "x");
// getValue()

var x = 5;
function getValue() {
    console.log("Hoisting in JS!");
}

/* O/P
   undefined x
   Hoisting in JS!
*/

// getValue()
// console.log(y, "y");

let y = 5;
function getValue() {
    console.log("Hoisting in JS!");
}

/* O/P
   ReferenceError: Cannot access 'y' before initialization
*/


//Hoisting is an phenomena in JS by which we can access these variables and functions even before 
//you have initialized it. You can access it without error


//why? because before even the code is executed the memory is allocated to each and every 
//variables and functions. 

getName()
console.log(z, "z");

let z = 5;
var getName = () => {
    console.log("Hoisting in JS!");
}

//TypeError: getName is not a function
//In case of arrow function, it behaves like a another variable, it also allocate undefined