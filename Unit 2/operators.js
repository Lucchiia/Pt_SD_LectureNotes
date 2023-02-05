/* 
    JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
                        ===

        Used to: 
            - Assign 
            - Compare
            - Arithmetic(Maths)
            - Logical
            - Conditionals
*/

// Equal To ==, checks value
"3" == 3;
console.log("3" == 3); // true
console.log("3" === 3); // false

// Strict Equal To: ===, checks value and data type
console.log("3" === 3); // false
console.log("hello" === "hello") // true
console.log(100 === 200) // false

// Not Equal & Strict Not Equal: (! when paired with operator is 'Not" !=, !==
console.log("2" != 2); // false
console.log("2" != 3) // true
console.log("2" !== 2); // true

// Greater Than / Less Than: > <, true/false return
let y = 3 > 2; 
console.log("Greater Than: " , y); //true

let y = 5 < 3;
console.log("Greater Than:" , y); //false

// Greater Than or Equal To: >= , just testing value, if with string count # in string and compare
console.log(3 >= 2, 5 >= 10, 5 >= 5); // true, true, true

//Less Than or Equal To <= , can take 2 things and check them both
console.log(2 <= 2, 1 <= 1, 5 <= 2); // true, true, false

// And: &&
console.log(2 < 10 && 2 > 1); // true (if this AND this are both true it returns as true , both have to match)
console.log(5 < 3 && 2 > 1) // false
console.log(5 > 10 && 3 > 5) // false
console.log("And: " , 2 && 3); // And: 3

// Or: || (username email OR username) one must be true, when we look at conditionals will see how that works
2 || 4;
console.log(2 || 4);
console.log(3 > 1 || 5 > 3); // true
console.log(3 > 1 || 5 > 3) // true , (if 1st false goes to next and next is true so it logs that as true)

// Ex 
let x = 3;
let z = 5;
console.log(x >= z); //false


//* Logical Operators: determine the logic between variables or values 

let a = 1; //
a = a + 1; 
console.log(a);
a = a + 1; 
console.log(a);

// Addition: 
r += 1; // r + r + 1


let s = 50;
console.log(s += 5); // s + 50 + 5 
console.log(s); // 55

// Subtraction
r -= 1; // r = r - 1;

// Multiplication
r *= 2; r = r * 2

// Ex w/o reassignment
let g = 100
console.log(g + 50); // 150
console.log(g) // 100
g = g + 100
console.log(g); // 200
// Assignment happeing:

// Division: / 
r /= 3; // r = r / 3 r equal to r (divided by) 3

// Remainder (modulus %)
r %= 1;
console.log( 3 % 2); // however many times it divides into it and that remainder tests even or odd things

console.log(3 % 2); // 1

// Exponential
r **= 1; // r = r * r;

console.log( 2 ** 3) // 8 - (2 * 2) * 2;