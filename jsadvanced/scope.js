/**
 * =========================================================================
 * JAVASCRIPT ADVANCED NOTES: SCOPE, EXECUTION CONTEXT & CLOSURES
 * Course Source: Sheryians Coding School (Part 3)
 * =========================================================================
 */

/* =========================================================================
   1. SCOPE [00:04:58]
   =========================================================================
   * Definition: Scope answers the question: "Where can I use my created 
   * variables and functions?" It determines the accessibility/visibility 
   * of variables in different parts of your code.
   *
   * The video explains three major types of scopes [00:06:15]:
   * A) Global Scope: Variables declared outside any function or curly braces.
   * B) Functional Scope: Variables accessible only inside that specific function.
   * C) Block Scope: Variables restricted inside curly braces '{}' (like if/for blocks).
   */

// --- Scope Example Code ---

// GLOBAL SCOPE [00:07:34]
// This variable is not inside any function or block, so it's accessible anywhere.
const globalUsername = "JohnDoe"; 

function scopeDemo() {
    // FUNCTIONAL SCOPE [00:06:59]
    // 'var' is functionally scoped. It lives inside this function.
    var functionalSecret = "I am hidden inside the function!";
    
    if (true) {
        // BLOCK SCOPE [00:06:15]
        // 'let' and 'const' are block-scoped. They only live inside these '{}'.
        let blockScopedValue = "Hidden inside this IF block";
        
        console.log(globalUsername);     // SUCCESS: Global is accessible everywhere.
        console.log(functionalSecret);   // SUCCESS: Inside the parent function.
        console.log(blockScopedValue);   // SUCCESS: Inside its own block.
    }

    // Checking boundaries:
    // console.log(blockScopedValue);  
    // ^ ERROR! Uncaught ReferenceError: blockScopedValue is not defined.
    // Why? Because it died when the IF block completed execution.
}

scopeDemo();

// console.log(functionalSecret); 
// ^ ERROR! Uncaught ReferenceError: functionalSecret is not defined [00:05:47].
// Why? 'var' belongs to the functional scope of scopeDemo() and cannot escape it.


/* =========================================================================
   2. EXECUTION CONTEXT [00:03:22]
   =========================================================================
   * Definition: Whenever you run a JavaScript file or invoke a function, 
   * an "Execution Context" is created. Think of it as an imaginary container/box 
   * that handles the execution of that specific code piece.
   *
   * Every Execution Context contains three primary things:
   * 1) Variables/Environment: Where variables and functions are registered.
   * 2) Functions: References to inner functions.
   * 3) Lexical Environment: The outer reference link (tells the context 
   * where it was physically/lexically born, allowing it to look outside 
   * if it cannot find a variable locally).
   */

// --- Execution Context Example Code ---

// 1. As soon as the script runs, the Global Execution Context (GEC) is created.
// 2. GEC scans and sets up memory for 'outerValue' and 'calculateData'.
const outerValue = 100;

function calculateData(number) {
    // 3. When calculateData(5) is invoked, a new Functional Execution Context is born.
    // 4. This new context box contains its local argument (number = 5).
    
    // 5. Lexical Environment Check:
    // JavaScript tries to add 'number' + 'outerValue'. It finds 'number' locally.
    // It doesn't find 'outerValue' inside this local box, so it uses its Lexical 
    // Environment link to look "outside" into the parent GEC and finds it there.
    return number + outerValue; 
}

console.log(calculateData(5)); // Outputs: 105
// 6. Once this function finishes returning its value, its Execution Context is 
// completely popped off and destroyed from the execution stack.


/* =========================================================================
   3. CLOSURES [00:03:22]
   =========================================================================
   * Definition: A closure is a feature where an inner function retains 
   * access to the outer function's variables, EVEN AFTER the outer 
   * function has completely finished executing and its execution context is destroyed.
   *
   * Real Developer Mindset [00:16:55]: 
   * Closures are fundamentally used for data privacy/encapsulation. They let 
   * you protect internal states from being altered or corrupted by external code.
   */

// --- Closures Example Code ---

function createCounter() {
    // This variable lives inside the functional scope of createCounter.
    // It cannot be accessed directly from the outside world (Encapsulation).
    let count = 0; 
    
    // This inner function is born inside createCounter.
    // It creates a Closure over the 'count' variable.
    return function() {
        count++; // It updates the outer variable
        return count;
    };
}

// Invoke the outer function. 
// At this exact point, createCounter() runs, returns the inner function, 
// and its Execution Context is wiped out from memory.
const increment = createCounter(); 

// Even though createCounter is dead and gone, the 'increment' function 
// still references and remembers the 'count' memory block because of the Closure!
console.log(increment()); // Outputs: 1
console.log(increment()); // Outputs: 2
console.log(increment()); // Outputs: 3

// Trying to access or change 'count' directly?
// console.log(count); 
// ^ ERROR! ReferenceError: count is not defined. Secure and encapsulated!