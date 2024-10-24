/*
Part 2: Trampolines

Using try/catch blocks does not solve the root issue of a stack overflow; it just handles the resulting error. What if you are implementing a recursive function that needs to call itself 30,000 or 50,000 times? While the use cases for that are rare, they do exist.
Without getting into the specifics of language-level fixes to this problem, which are being suggested, there is a process called “trampolining,” which eliminates that stack overflow issue if implemented correctly.
There are three steps to writing a trampolined function. An example has been provided below:


Once you have familiarized yourself with the logic behind this process, accomplish the following:
Write a recursive function that completely flattens an array of nested arrays, regardless of how deeply nested the arrays are.
Once your recursive function is complete, trampoline it.

*/

function flatten( someArrays ){
    let ret = []

    for(var i = 0; i < someArrays.length; i++){
        if(Array.isArray(someArrays[i])){
            //Recurses itself and flattens each array (nested or not
            ret = ret.concat(flatten(someArrays[i]));
        } else {
            ret.push(someArrays[i]);
        }
    } 
    return ret;
}

function recursedFlatten(someArrays , i = 0){
    //base case
    if(!Array.isArray(someArrays)){
        return [someArrays];
    }

    //recursive call
    return someArrays.reduce((acc, item) => {
        return acc.concat(flatten(item));
    }, []);
}



const trampoline = function(fn) {

    while(typeof fn === "function") {
      fn = fn();
    }
    
    return fn;
  }


//Create a recursive function that flattens an array of nested arrrays
let nestedArr = [[1,2], [3,4], [5,6,7]];


console.log(flatten(nestedArr));
console.log(recursedFlatten(  nestedArr));
console.log(trampoline(recursedFlatten(nestedArr)));