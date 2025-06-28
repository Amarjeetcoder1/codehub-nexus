// Callback Function
// A callback is a function passed as an argument to another function.
// It allows one function to be called inside another after some operation.

// Example 1: setTimeout (Asynchronous callback)
setTimeout(() => {
    console.log("Logging this statement after 1 second");
}, 1000);

console.log("Log before timeout...");

// Example 2: Callback in event listener (with named function)
document.getElementById("button").addEventListener("click", function btnClick() {
    console.log("Submit button has been clicked!");
});

// Example 3: Arrow function as callback in event listener
document.getElementById("btn").addEventListener("click", () => {
    console.log("Arrow Button has been clicked!");
});


