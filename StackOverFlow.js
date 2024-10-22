/*
Part 1: Stack Overflow
Ever wonder where the popular question-and-answer website got its name? When a program attempts to allocate too much memory to the call stack, it results in a “stack overflow” error. In JavaScript, this error reads “maximum call stack size exceeded.”
So what is the maximum stack size, and when might this become an issue?
Since the call stack holds function calls, stack overflows are most common during recursive function calls. When recursion takes too long to complete, or never does complete, the call stack fills beyond its maximum memory capacity.
This capacity varies based on a number of factors - you will never know exactly how many calls you are allowed to put on the stack before it overflows.
You can, however, do the following:
Declare a global counter variable.
Create a simple function that increments the variable, and then calls itself recursively.
Surround the initial function call in a try/catch block.
Within the catch, log the error and the value of the counter variable.
As your first task, complete the steps above.
Once complete, you should be given a result that is typically in the ~15,000 range. This can vary significantly depending on the specifics of the environment that the code is being run in, so do not worry if your number is off by a few thousand.
What you have accomplished is a script that effectively measures the size of the call stack. You recursively put functions onto the stack until it reached overflow, then caught that error to print the count.
This demonstrates another important lesson: when using recursive functions, it is prudent to always wrap them in error-handling logic, just in case the function overflows the call stack 

*/




//Try catch block

    function stackCounter(globalCounter)
    {
        globalCounter = globalCounter + 1;
    

        globalCounter = globalCounter + 1;
        console.log("Stack Count is " + globalCounter);

        try{
           globalEntry = 10000;
           console.log("\n");
        }
        catch (err) {
           console.log(" Call stack size has been exceeded");
           throw err;
        }

        return stackCounter (  globalCounter);
    }



let globalCounter = 0;
console.log(stackCounter(globalCounter));