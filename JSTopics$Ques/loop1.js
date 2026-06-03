//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are declared in the code. 
// However, only the declarations are hoisted, not the initializations. 
// For example:
console.log(x); // Output: undefined
var x = 5; // The declaration of x is hoisted, but the initialization is not, so it is undefined at the time of the console.log statement.


//Temporal Dead Zone (TDZ) is a behavior in JavaScript where variables declared with let and const are not accessible before they are declared.
// This means that if you try to access a variable declared with let or const before it is declared, you will get a ReferenceError. 
// For example:
//console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10; // The variable y is in the temporal dead zone until it is declared, so it cannot be accessed before this line.






// Print numbers from 1 to 10 and then from 10 to 1 using for loop and while loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

// Print even numbers from 1 to 20 using for loop
for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Print odd numbers from 1 to 20 using while loop
let j = 1;
while (j <= 20) {
    if (j % 2 === 1) {
        console.log(j);
    }
    j++;
}

//print multiplication table of 5 using for loop
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

//Find the sum of from 1 to 100 using for loop
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


//print all numbers between 1 to 50 that are divisble by 3
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Ask the user for a number and print whether eacch number from 1 to that number is even or odd
let val = prompt("Enter a number:");
for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

//For how many numbers between 1 to 100 are divisble by both 3 and 5.
let count = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        count++;
    }
}
console.log(count);


//Stop at second multiple of seven 
let count1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) {
        count1++;
        if (count1 === 2) {
            console.log(`Second multiple of 7 is ${i}`);
            break;
        }
    }
}

// skip multiply of 3

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

//Print first 5 odd numbers
let count2 = 0;
for (let i = 1; count2 < 5; i++) {
    if (i % 2 === 1) {
        console.log(i);
        count2++;
    }
}
// other way
let count3 = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 === 1) {
        console.log(i);
        count3++;
        if (count3 === 5) {
            break;
        }
    }
}


//functions
function add(a, b) { // parameters a or b
    console.log(a + b);
}
add(5, 10); // arguments sent to function

function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}
isEven(7);


// Default , rest operator Parameters

function abcde(a, b, c, ...valu) { // here a,b,c are given parameters and ...val are rest operators
    console.log(a, b, c, valu);
}
abcde(1, 2, 3, 4, 5, 6, 7);

//Output will be 1 2 3 [4,5,6,7] because rest operator will take all the remaining values and put it in an array.

//Return statement
function abcd(val2) {
    return val2 * val2;
}
let val2 = abcd(12);
console.log(val2); // output will be 144 because return statement will return the value and we can store it in a variable and use it later.


//First class functions are functions that can be treated as first class citizens in a programming language.
//  This means that they can be assigned to variables, passed as arguments to other functions, and returned from other functions. 
// In JavaScript, functions are first class citizens, which means that we can use them in the same way as we use other data types like numbers and strings.

function firstClassFunction() {
    console.log("Hello World");
}   
function callFunction(func) {
    func();
}
callFunction(firstClassFunction);


 // output will be Hello World because we are passing a function as an argument to another function and it is called first class function.


//Higher order functions are functions that take other functions as arguments or return functions as their result.
// In JavaScript, higher order functions are commonly used for tasks such as array manipulation, event handling, and asynchronous programming.  
function higherOrderFunction(func) {
    func();
}   
higherOrderFunction(function () {
    console.log("This is a higher order function");
}); // output will be This is a higher order function because we are passing a function as an argument to another function and it is called higher order function.



// Pure functions are functions that always produce the same output for the same input and have no side effects.
function pureFunction(a, b) {
    return a + b;
}   
console.log(pureFunction(2, 3)); // output will be 5 because pure function always produces the same output for the same input and has no side effects.

// Impure functions are functions that may produce different output for the same input or have side effects.        
let count4 = 0;
function impureFunction() {
    count4++;
    console.log(count4);
}
impureFunction(); // output will be 1 because impure function may produce different output for the same input or have side effects.
impureFunction(); // output will be 2 because impure function may produce different output for the same input or have side effects.



//closures are functions that have access to variables from another function's scope.
function outerFunction() {
    let c=12;
    return function innerFunction() {
        console.log(c);
    }
}
let closure = outerFunction();
closure(); // output will be 12 because closure has access to variables from another function's scope.




// Using switch + arithmetic operators
function calc(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            console.log("Invalid operator");
    }
}

console.log(calc(10, 5, '+')); // output will be 15 because we are using switch case to perform arithmetic operations.
console.log(calc(10, 5, '-')); // output will be 5 because we are using switch case to perform arithmetic operations.
console.log(calc(10, 5, '*'));  // output will be 50 because we are using switch case to perform arithmetic operations.
console.log(calc(10, 5, '/')); // output will be 2 because we are using switch case to perform arithmetic operations.       




//Score logic using if else
    let score = 85;
function scoreLogic(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else {
        return "C";
    }
}
console.log(scoreLogic(score)); // output will be B because we are using if else to determine the score logic.


//Student grade logic using switch case
function gradeLogic(score) {
    switch (true) {     
        case score >= 90:
            return "A"; 
        case score >= 80:
            return "B";
        default:
            return "C";
    }
}
console.log(gradeLogic(score)); // output will be B because we are using switch case to determine the grade logic.  




//Rock-paper-scissor game using switch case
function rockPaperScissor(player1, player2) {
    switch (true) {     
        case player1 === player2:
            return "It's a tie!";   
        case (player1 === "rock" && player2 === "scissor") || (player1 === "paper" && player2 === "rock") || (player1 === "scissor" && player2 === "paper"):
            return "Player 1 wins!";
        default:
            return "Player 2 wins!";
    }
}
console.log(rockPaperScissor("rock", "scissor"));
// output will be Player 1 wins! because we are using switch case to determine the winner of the rock-paper-scissor game.   



//Login message using if else

    let isLoggedin=true;
    let isAdmin=false;
function loginMessage(isLoggedin, isAdmin) {
    if (isLoggedin && isAdmin) {    
        return "Welcome Admin!";
    } else if (isLoggedin) {
        return "Welcome User!";
    } else {
        return "Please log in!";
    }
}
console.log(loginMessage(isLoggedin, isAdmin)); 
// output will be Welcome User! because we are using if else to determine the login message.    




//weather advice using switch case
function weatherAdvice(weather) {
    switch (weather) {
        case "sunny":
            return "It's a great day for a walk!";  
        case "rainy":
            return "Don't forget your umbrella!";   
        case "snowy":
            return "Stay warm and drive safely!";
        default:
            return "Have a nice day!";
    }
}
console.log(weatherAdvice("sunny")); 
// output will be It's a great day for a walk! because we are using switch case to determine the weather advice.




//Lexial scope is the scope of a variable that is determined by its position in the source code.
function lexicalScope() {
    let a = 10; 
    function innerFunction() {
        console.log(a); // output will be 10 because innerFunction has access to variable a which is in the lexical scope of outerFunction.
    }
    innerFunction();
}
lexicalScope();





//IiFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
(function () {
    console.log("This is an IIFE");
})();
// output will be This is an IIFE because we are defining a function and immediately invoking it.




//Hoisting differences between declarations and expressions using Function Declaration
console.log(funcDecl()); // output will be Hello because function declarations are hoisted and can be called before they are defined.
function funcDecl() {
    return "Hello";
}           
//Function Expression
//console.log(funcExpr()); // TypeError: funcExpr is not a function because function expressions are not hoisted and cannot be called before they are defined.
var funcExpr = function () {
    return "Hello";
};


var x = 5; // Declaration and initialization
console.log(x); // output will be 5

var y; // Declaration
console.log(y); // output will be undefined
y = 10; // Initialization
console.log(y); // output will be 10





//Write a discount calculator (Hof sytle)
function discountCalculator(price, discount) {
    return price - (price * discount / 100);
}           
console.log(discountCalculator(100, 20)); // output will be 80 because we are calculating the discount using the formula price - (price * discount / 100).      








 