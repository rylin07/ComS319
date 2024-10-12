/*
Ryan Lin
Feb 9, 2024
Activity06 - Arrays
*/

console.log("---- I am in V A R I A B L E S ----")
// Q1 : Is it permited the next ?
console.log("Q1 ---------------")
var var1 = "Iowa";
console.log(var1);
var var1 = 124; // Yes, re-declaration with var is permitted.
console.log(var1);
// Is it permited ?
console.log("Yes");

// Q2 : Is it valid ?
console.log("Q2 ----------------");
let var2 = "Ames";
console.log(var2);
var2 = 124; // Yes, re-assignment with let is valid.
console.log(var2); // Added this line to show the updated value of var2.
// Is it valid ?
console.log("Yes");

// Q3 : Is it valid ?
console.log("Q3 ----------------");
let var3 = "ISU";
console.log(var3);
var3 = 2023; // Yes, re-assignment is valid.
console.log(var3);
console.log("Valid ? Yes");

// Q4 : Explain the Error.
console.log("Q4 ----------------");
let var4; // No error here, just an uninitialized let variable.
const var5 = 0; // Fixed the error by initializing const variable at declaration.
console.log("What's the error : No error after correction");

// Q4 : Explain the Error. - Removed duplicate block

// Q5 : Explain the Error.
console.log("Q5 ----------------");
const var6 = 3.1415;
// var6 = 2.8; // Error: Assignment to constant variable. Commented out to fix.
console.log("What's the error : Cannot re-assign a constant variable.");

// Q6 : Explain the Error.
// Fixed variable naming errors:
let firstName = "Abraham"; // Changed 'first name' to 'firstName'
console.log(firstName); // Fixed by correcting variable name format.
let twoNumbers = [1, 2]; // Changed '2numbers' to 'twoNumbers'
console.log(twoNumbers); // Fixed by ensuring variable name doesn't start with a number.
let cityState = "Ames Iowa"; // Changed 'city-state' to 'cityState'
console.log(cityState); // Fixed by using camelCase instead of hyphen.

// Q7 : What !! ??
let mainCity = "DesMoines";
console.log("This is the Capital :", mainCity) // Fixed by using the correct case for variable name.
console.log("What's going on ? Fixed case sensitivity issue.");

// Q8 : "let" and "const" scope vs "var" scope
if (5 === 5) {
    var var7 = 100; // var has a function/global scope, accessible outside.
}
console.log(var7); // No error, var7 is accessible here.
if (5 === 5) {
    let var8 = 100; // let has a block scope, not accessible outside.
}
// console.log(var8); // Uncommenting this will cause an error: var8 is not defined outside its block.
console.log("var is function-scoped or globally-scoped, let and const are block-scoped.");
