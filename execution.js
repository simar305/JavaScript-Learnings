//JS is a synchronous single-threaded language

//Everything in JS happen inside the EXECUTION CONTEXT

/*
EXECUTION CONTEXT

Variable         Thread of execution
Environment          
------------------------------
Memory        |     Code      |
------------------------------
key: value    |    --------
a : 10        |    ---------
fn:{...}      |   ----------
-------------------------------

What happens when we run the JS program


-> var n =2;
   function square(num){
     var ans = num * num;
     return ans;
   }
   var square2 = square(n);
   var square4 = square(4);
2 stages - Memory creation phase and code execution phase
PHSAE 1 => in the 1st stage, JS will allocate memory to all the variables and functions

-----------------------------------------
Memory                  |     Code      |
-----------------------------------------
n : undefined           |    --------
square: { ...}          |    ---------
square2 : undefined     |   ----------
square4 : undefined     |   ----------
-----------------------------------------

PHASE 2 => Code Execution Phase(it executes the code now)

-----------------------------------------
Memory                  |     Code      |
-----------------------------------------
n : 2                   |    --------
square: { ...}          |   |memory          | Code        |
square2 : 4             |    |num: 2          |                |
square4 : undefined     |   |ans: 4          |
-----------------------------------------

-- whenever a new function is invoked, new execution context is created
-- In 1st phase, it again allocate memory and in 2nd it execute


So, it handles everything to manage this execution context creation, deletion and the control - it manages a Stack
CALL STACK
In this we have Global Execution Context at the bottom, The above execution context is pushed inside the call stack
so first function invoke will create the execution context, so this execution context is put inside the stack
E1-> execution context 1
Once we are done with the executing the func, we return the ans
and E1 will goes out from the call stack and control is back with the GEC
Now, E2 will goes into tho call stack and control is back with the GEC
Now when the code ends the GEC also ends so the call stack gets empty


  |  
  |
  |
  |
  |
  |
  |  GEC
*/

