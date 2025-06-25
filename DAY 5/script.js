// What is JavaScript?
// JavaScript is a synchronous, single-threaded, loosely typed, and dynamically typed language.

// --- Hoisting ---
console.log(a); 
var a = 10;
console.log(a);

// --- Temporal Dead Zone (TDZ) ---
// let and const are hoisted but not initialized. Accessing them before declaration causes error.
// console.log(b); 
let b = 20;
console.log(b);
b = 60;
console.log(b);

const c = 40;
console.log(c);
// c = 45; // Error: Assignment to constant variable

// --- Scope ---
// var is function-scoped or globally scoped
{
    var d = 30;
}
console.log(d); 

// let is block-scoped
{
    let e = 40;
}
// console.log(e); // Error: e is not defined

// --- 1. Named Function ---
namedFunction();

function namedFunction() {
    console.log("We are inside Named Function");
    console.log(3 + 5);
}

namedFunction();

// --- 2. Function Expression ---
// Cannot access before initialization
// funcExpr();

let funcExpr = function () {
    console.log("We are inside Function Expression");
    console.log(13 + 15);
};

console.log(funcExpr);
funcExpr();

// --- 3. Arrow Function ---
let arrowFunc = () => {
    console.log("We are inside Arrow Function");
    console.log(10 + 20);
};

console.log(arrowFunc);
arrowFunc();

// --- 4. IIFE (Immediately Invoked Function Expression) ---
(function () {
    console.log("This is an IIFE");
    console.warn("Warning from IIFE");
})();

// --- 5. Function with Parameters ---
function sumOfTwo(a, b) {
    console.log("Sum of", a, "and", b, "=", a + b);
}

sumOfTwo(2, 4);
sumOfTwo(10, 5);
sumOfTwo(100, 50);
