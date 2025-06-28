// Functions in JavaScript
// A function is a reusable block of code that performs a specific task.

// ---------------------------------------------
// Basic Function Declaration
// ---------------------------------------------
function getUserDetails() {
    console.log("Getting User Details");
}

getUserDetails(); // Calling the function


// ---------------------------------------------
// Arrow Function
// ---------------------------------------------
// Introduced in ES6
// Shorter syntax and not hoisted like regular functions

console.log(username); // undefined (var is hoisted)
var username = "Rahul";
console.log(username);

// let and const are not hoisted like var
// console.log(myname); // ReferenceError if uncommented
let myname = "Amarjeet";
console.log(myname);


// ---------------------------------------------
// Function Declaration is Hoisted
// ---------------------------------------------
getUserDetailsHoisted(); // Works

function getUserDetailsHoisted() {
    console.log("Getting User Hoisted Details");
}


// ---------------------------------------------
// Function Expression (Not Hoisted)
// ---------------------------------------------
// sayHello(); // Error if called before this line

const sayHello = function() {
    console.log("Fetching User Data Using Function Expression");
};

sayHello();


// ---------------------------------------------
// Arrow Function (Also Not Hoisted)
// ---------------------------------------------
// fetchUserDetails(); // Error if called before this line

const fetchUserDetails = () => {
    console.log("Fetching User Data Using Arrow Function");
};

fetchUserDetails();


// ---------------------------------------------
// Regular vs Arrow Function Example
// ---------------------------------------------
function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(add(10, 15));       // 25
console.log(addArrow(10, 15));  // 25
