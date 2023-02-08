// ? Loops

/* 
    Loops through a block of code a number of times

    If stuck ina n accidental infinity running loop:
        ctrl+c, ctrl+z (mac), stop red square button top rt of terminal 

    ? For Loop:
        Takes in 3 parameters ( ) )
            - initial expression
            - condition
            - increment expression

        Structure: 
        for () (for for loops) inside brackets (Initial expression ; condition ; increment expression) to run this we have to runa code blcok so we need {
            ...code block of logic 
        }
*/

for (i = 0; i < 10; i++) { // to count TO 10 could do <= 10 or i < 11
    console.log(i);
}

console.log("Finished with loop");

for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

//Challenge: using a for loop, count from 10 to 0, going down by 1

for (i = 10; i >= 0; i --) {
    console.log(i)
}

for (i = 10; i < 0; i --) console.log(i); // if using a string return you don't have to use {} like above to console.log 

let firstName = "Name";

for (let i = 0; i < firstName.length; i ++) {
    console.log(i, firstName[i]); 
}


let sum = 0; // Before:  0
// After:  1
// Before:  1
// After:  3
// Before:  3
// After:  6
// Before:  6
// After:  10
// Before:  10
// After:  15

for (let i = 1; i <= 5; i++) {
    console.log("Before: ", sum);
    sum += i;
    console.log("After: ", sum);
}

// console.log(sum);

// ? For In Loops: loops through the properties of an object
/* 
    Structure: 
    for (key in (and then the) object) {
        ..code to run
    }

    ^key is a random variable name of our choice, object is the name of the object we are targeting
*/

let student = {
    name: "Any Name",
    awesome: true,
    degree: "JavaScript"
};

console.log(student["name"]); // pulls out the value of name from the object, "name" is the key

for (item in student) {
    console.log(item); // printed each key in teh object
    console.log(student[item]); // each value of each key
}
// variable name for key can be whatever we want. still runs

let catArray = [
    "tabby",
    "british shorthair",
    "burmese",
    "maine coon",
    "rag doll",
  ];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
} 

// 0
// tabby
// 1
// british shorthair
// 2
// burmese
// 3
// maine coon
// 4
// rag doll

/* 
    ! For in can be used on objects and arrays, but if array index order is important it's better to use a for loop, for of loop, or Array.forEach() method.
*/

//? For Of Loop: loops through the values of an iterable object
/* 
    iterable: an object that has iterable properties, def iterate: to do something over again repeat'

    Structure: 
    " for (variable of iterable {
        ...code to execute/run
    }"

        variable: again is any word we choose to use, or variable or thing in the loop, iterable is the name of any iterable thing

        can loop over Arrays, Strings (most common), etc.
    
*/

// for (item of student) {
//     console.log(item);
// } - adding this doesn't work

for (cat of catArray) {
    console.log("FOR OF LOOP:",  cat);
}

for (bubbles of catArray) {
    if (bubbles === "maine coon") {
        console.log(`My Favorite is the ${bubbles}!!!`);
} else {
console.log("Not a maine coon... :( ");
    }
}