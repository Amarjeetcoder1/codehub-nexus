// What is JavaScript
// 1. JavaScript is a dynamic, weakly typed programming language used to add functionality to web pages.
// 2. It is executed as part of a webpage in the browser or on any host environment (like Node.js).
// 3. JavaScript is mainly used to create dynamic and interactive web pages (e.g., manipulating the DOM, handling events).
// 4. JavaScript enables richer user experiences on the web through features like real-time updates, interactivity, etc.
// 5. JavaScript is an event-driven programming language.
// 6. JavaScript is a synchronous, single-threaded language — but it can also handle asynchronous operations using callbacks, promises, and async/await.

// Data Types in JavaScript

let userName = 'Aman';         // String
let userAge = 23.00;           // Number
let userDetails = {            // Object
    name: "Pavan",
    age: 25
};
let userGroup = ["teenager", "adult"]; // Array (type: object)

console.log(typeof userName);     // string
console.log(typeof userAge);      // number
console.log(typeof userDetails);  // object
console.log(typeof userGroup);    // object (Arrays are a special type of object)

// Type Coercion Test Cases
let value1 = 16 + 20 + "String";
let value2 = "String" + 16 + 20;

//  Due to left-to-right associativity and type coercion in JavaScript
console.log({
    value1,
    value2
});






