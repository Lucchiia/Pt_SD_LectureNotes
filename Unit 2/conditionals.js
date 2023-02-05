/* 
    Some fun fact vocab & good to know of things:
        - JS Statement: 
            - any block of code that is performing an action, i.e. the code directions we give the program, let x = 15;
            - JS programs are all just a bunch of statements.
        - JS Expressions: 
            - a block of code that evaluates to a value, i.e. performs some sort of action that *produces a value*
            - Expressions are statements, but statements are not all expressions
    
        To ask JS to perform logic (like conditionals, functions, etc.) we will commonly use this format:
            keyword name (expression) {
                ... code block of logic
            }
*/

/* 
    ? Conditionals
    - Our way to ask JS a question and get an answer value as a response
    - Evaluates an expression and responds if it is true 
    - Falsy:
        - false
        - 0 
        - " ", ' ' (empty strings)
        - null
        - undefined
        - NaN (not a number)
*/

/* 
    If Statements: gives a yes/true response if the expression is true/valid

    Structure: 
    if(expression evaluated) {
        ...code that runs only if expression is true 
    }
*/

let isOn = true; // if that was false nothing would happen

if (isOn == true) {
    console.log("The light is on!");
}

if (isOn) {
    console.log("The light is still on...")
}

isOn = false; // because its assigned as false = false here it recognizes that as that

if (isOn == false) {
    console.log("The light is off.");
}

/* 
    If Else Statement: gives us a no or(false) response if the expression isn't true or valid.A true code block and a false code block. 
*/

let weather = 70; // if 75 example it'd skip to the next value or expression?

if (weather < 70) {
    console.log("Wear a jacket it's chilly."); //if it's (weather) not > 70 were going to run
} else {
    console.log("No jacket needed! It's nice out.")
}

let loggedInUser = true;

if (loggedInUser == true) {
    console.log("Welcome back! Here's your profile.")
} else {
    console.log("Please sign up to use the site!")
}

/* 
    And &&, or ||, Not !: can evaluate an expression that is holding multiple checks 
*/

let rain = false;
let temp = 68;

if (temp < 70 && rain) {
    console.log("Jacket please.")
} else {
    console.log("No jacket needed")
}

if (temp < 70 || rain) {
    console.log("Jacket please.")
} else {
    console.log("No jacket needed")
}

rain = false;

console.log(rain);
console.log(!rain);

if (!rain) {
    console.log("Looks like a beautiful day.") 
} else {
    console.log("Get your jacket!")
}

// ? Switch Statement 
/* 
    keywords:
        - switch
        - case
        - break
            - takes us out of our code block
        - default
            - run if no cases match
    Structure:
    switch(expression) {
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        case ... :
            return;
            break;
        default:
            return;
    }
*/

let officeCharacter = "Michael";

switch (officeCharacter) {
  case "Michael":
    console.log("My mind is going a mile an hour.");
    break;
  case "Dwight":
    console.log("Perfectenschlag");
    break;
  case "Jim":
    console.log("Bears. Beets. Battlestar Galactica");
    break;
  case "Pam":
    console.log("Yup");
    break;
  default:
    console.log(`I'm sorry, ${officeCharacter}, but do I know you?`);
}

// String Interpolation: using a variable in a string with backticks, dollar sign, and {}

let myName = "Kate"
let bff = "Ben"
console.log(`My name is ${myName} and my best friendo is ${bff}!`); // interpolation happends with use of backticks and ${}
console.log("My name is ${myName} and my best friendo is ${bff}!"); // Just a notrmie string

let num = 0; // other example let num = 5 was case 2 ran, if 0 which is neither is default case 

switch (true) {
    case num < 0 && num > -10:
        console.log("Case 1 ran.");
        break;
       // No break; (without break takes us out of case code block)
    case num > 0:
        console.log("Case 2 ran.");
        break;
    default: 
    console.log("Default ran, no case worked.");
    break;
}

let grade = "B";
switch (true) {
    case grade == "A": // can set for both cases same with down below w/ D,F
    case grade =="B":
    console.log("Great job.")
        break;
    case grade == "C":
        console.log("Doing well, but maybe study more.")
        break;
    case grade == "D": 
    case grade == "F": 
            console.log("Uh, I would really start studying...")
            break;
    default:
        console.log("Thats not a grade value")
}


// ? Ternary 
/* 
    Always a If/Else style conditional at minimum 
    Structure (is different):
    Expression with a ? , the true values on the left of the colon and the false value on right side of :
*/

let expression = true; // get Runs false , if = true reads Runs true

expression ? console.log("Runs true") : console.log("Runs false");

let newNum = 6; // > 0 num like -5 example, would print "No, less than..etc"

newNum > 0 ? console.log("Yes, greater than 0") : console.log("No, less than 0")

// as an if/else
if (newNum > 0) {
    console.log("yes");
  } else {
    console.log("no");
  }

// ? Else/If

let anotherNum = 0;

if (anotherNum == 0) {
    console.log("Hello"); 
   }   else if (anotherNum > 0) {
    console.log("Hey there!")
    } else {
        console.log("Goodby");
    }

    anotherNum == 0 // this is same structure as above just with diff symb.'s
  ? console.log("Hello")
  : newNum > 0
  ? console.log("hi")
  : console.log("goodbye again");

  let numOne = 5;
  let numTwo = 2;

let value = numOne + numTwo > 1 ? numOne + numTwo : 0; // if just this wont ready a/t 
console.log(value); // false bc -5 + 3 is not > 1 so just reads 0, if 5+2 is 14 which is more than 1 would read result of equation (7) (to left of colon : above is true)
