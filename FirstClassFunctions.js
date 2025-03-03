a();
b();

// Function statement aka Function Declaration
function a() {
    console.log("a calleed");
}


// Function Expression
var b = function () {
    console.log("b calleed");
}

// => function acts like a value
// Difference bw statement and expression is hoisting
// During the hoisting/memory creation phase, a is created a memory and a is assigned to funtion
// and in case of b, it is treated like  variable, it is defined undefined initally until it hits that line



// Anonymous Function 
// function() {

// }

// it doesn't have any identity
// the above will give syntax error(invalid)
// as function statement require a function name
// are used when function is used as value
// we can assign Anonymous Function with a variable(it acts as a value)



//Named Function Expression

var b = function xyz() {
    console.log("b calleed");
}

xyz(); //this will give the error



//Difference bw parameters and Arguments

// function b(param1, param2, ....){} //Parameters
// b(1,2) //Arguments


//First CLASS Functions
//Function inside another function as a argument
b(function () {

})