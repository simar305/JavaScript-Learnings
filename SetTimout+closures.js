function x1() {
    var a = 10;
    setTimeout(function () {
        console.log(a, 'a');
    }, 3000)
}

// x1();


function x2() {
    var a = 10;
    setTimeout(function () {
        console.log(a, 'a');
    }, 3000);
    console.log("teesttt");

}

// x2();


function x3() {
    var a = 10;
    for (var i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i, a);
        }, i * 1000);

    }
    console.log("teesttt");
}

// x3(); //o/p 5 5 5 5 5

//it is happeing because of the closures
//it remembers the reference of i
// 1. So when JS attached timer to all so it basically gets the same reference of i
// 2. JS doesn;t wait for anything, it will run the loop again & again quickly and store this function and it will move on.
// when the timer will be expired it will be too late and the value of i will be finally 5
//By the time the setTimeout functions execute, the loop has already finished, and i has become 5 (since the loop exits when i reaches 5).

// =>>>>>>>>>>> Solution

function x4() {
    var a = 10;
    for (let i = 0; i < 5; i++) {
        setTimeout(function () {
            console.log(i, 'a');
        }, i * 1000);

    }
    console.log("teesttt");
}

// x4(); //o/p=> testttt 0 1 2 3 4

//let has a block scope, everytime a loop runs i is a new variable(new copy of variable)
//every time timeout will be run it has a new copy of the function


// working with var variables
function x5() {
    var a = 10;
    for (var i = 0; i < 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(i, 'a');
            }, i * 1000);
        }
        close(i)
    }
    console.log("teesttt");
}

// x5(); //o/p=> testttt 0 1 2 3 4