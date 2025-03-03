//////1
// Inner functions form closures with an outer environment and they can access its params and variables

function outer(b) {
    function inner() {
        console.log(b, "hello");
    }
    return inner;
}

outer("simar")();

//////2
function outer2() {
    var b = 10; //same with let
    function inner2() {
        console.log(b, "hello");
    }
    return inner2;
}

outer2()();


//////3
//same o/p as 2nd
function outer3() {
    function inner3() {
        console.log(b, "hello");
    }
    var b = 10; //same with let
    return inner3;
}

outer3()();


//////4
//what if outer function nested inside an function
//- it will again will form closures with it's env also
function outest4() {
    var c = 20;
    function outer4(d) {
        function inner4() {
            console.log(c, "hello4", d);
        }
        return inner4;
    }
    return outer4;
}

outest4()("hello simar")();


///////5
//Conflicting name Global variables in JS
// it will first take reference of outer variable i.e a=10 but when no inner variable present then it will take global variable
// if both are not present then it will give reference error (a is not present)
function outest5() {
    var c = 20;
    function outer5(d) {
        function inner5() {
            console.log(c, "hello4", d, a);
        }
        // let a = 10;
        return inner5;
    }
    return outer5;
}
let a = 1000;
outest5()("hello simar")();

//Advantages
//1. Used in function currying
//2. Used in some HOC(memorize and once)
//3. Data hiding and encapsulation


//Data hiding and encapsulation
//if we have a variable and we want to have data privacy so that other function don't have access to that variable
// i.e we can encapsulate that variable 

//Anyone can change the value of counter in the code
// var counter = 0;
function incrementCounter() {
    counter++;
}

//Now no one can access the counter variable as var is hidden
function counter() {
    var counter = 0;
    return function incrementCounter() {
        counter++;
        console.log(counter);

    }
}

var inc = counter();
inc();


//
function Counter() {
    var counter = 0;

    this.incrementCounter = function () {
        counter++;
        console.log(counter, 'constrcutore');
    }
    this.decrementCounter = function () {
        counter--;
        console.log(counter, 'constrcutore');
    }
}

var newCounter = new Counter();
newCounter.incrementCounter();

//Disadvantages
// 1. Over consumption of memory(evrytime a closure is formed it consumes a lot of memory)
//2. Variables are not garbage collected


//What is Garbage collector
// Is a program in browser or JS engine which frezze unutitlized memory
// So when there is unused variables it just frezze out of memory

//1. An inner function can be directly called using two parenthesis ()().
// 2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
// 3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
// 4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of
// memory which cannot be deleted so this acts as a disadvantage.
// 5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.