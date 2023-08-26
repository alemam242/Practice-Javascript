/**
 * There are different kind of functions in ES6 Javascript
 * 1. Normal function
 * 2. Parameterized function
 * 3. Rest parameterized function
 * 4. Returning function
 * 5. Anonymous function
 * 6. Parameterized Anonymous function
 * 7. Arrow function
 * 8. Function constructor
 */

// Normal function
function normalFunction() {
    let a = 50, b = 30;
    let c = a + b;
    console.log("This is Normal Function: "+c);
}
normalFunction();

// Parameterized function
function ParameterizedFunction(a,b) {
    let c = a + b;
    console.log("This is Parameterized Function: "+c);
}
ParameterizedFunction(50,60);

// Returning function
function ReturnFunction(a,b) {
    return a + b;
}
console.log("This is returning function: " + ReturnFunction(8, 8));

// Rest Parameterized function
function RestParameterizedFunction(...number) {
    let sum = 0;
    for (let i of number) { 
        sum += i;
    }
    console.log("This is Rest Parameterized Function: "+sum);
}
RestParameterizedFunction(1, 2, 3, 4, 5);

// Function Constructor or Anonymous Function
let name = function () {
    console.log("This is Anonymous Function");
}
name();

// Function Constructor or Parameterized Anonymous Function
let myFun = function (msg) {
    console.log(msg);
}
myFun("This is Parameterized Anonymous Function");

// Arrow Function
let myArrowFunction = () => {
    console.log("This is an Arrow Function");
}
myArrowFunction();