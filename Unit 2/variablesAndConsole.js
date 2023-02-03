/* 
    A comment block in JS
    Windows: alt + Shift + a
    Mac: option + shift + a
*/

/* 
    Variables:
        - How we give the app/program/computer data (a thing we want the computer to know)
        - A declaration that stores data/ data values

        Variable are declared with JS keywords:
        - var , old and not often used (prone to mistakes)
        - let , can reassign the variables value 
        - const , cannot reassign a value to a const declared variable

        Undeclared/no keyword: works but don't do it. 
*/

let a = 100; 
let streetAddress = "10 Main St.";

//1   2     3     4
let   t     =     1;

/* 1. JavaScript keyword to denote of a variable
   2. Name of the variable
        - Developers refer to and use the variable name to grab the data stored. 
        - Try to keep variable names pertaining to the data (if you can)
    3. = Assignment operator (fancy tech/math for the equal sign.)
    4. The initial / data value
*/


// Variable Declaration
let x; 
let y;

// Variable Initialization
let z = 10; // Anything on the right side of the = (been given a value "initialized")

// Assigning to other Variables 

let first = "First";
let last = "Last";

let fullName = first + " " + last;

console.log(fullName)

console.log('Declaration: ' , x); // Declaration: Undefined 

x = 13; // Assigned our variable x a value for the first time
console.log('initialization 1:', x); 

x = 42; // Reassigned the value of x 
console.log('initialization 2:', x); 

let hi = "hello";
console.log("Both variables: ", x, hi);

// Let vs Const in action
// Const is "new" in ES6 (ECMA Script 6 - current were using): used to declare variables meant to remained unchanged

let today = "Great!";
const JavaScript = "Awesome!"
console.log(today, JavaScript);

today = 'Lovely!';
// JavaScript = 'Super!' // When we try to reassign a const variable we get = TypeError
console.log(today, JavaScript);

console.warn("This is your first warning!")

let warning = "Uh oh, we've been warned...";
console.warn("Warning: ", warning);


let err = "This looks real bad and scary...";
console.error("Error: " , err);

