/**
 * =========================================================================
 * JAVASCRIPT 'THIS' KEYWORD RULES (FROM SCREENSHOT) [01:33:45]
 * Course Source: Sheryians Coding School (Advanced JS Tutorial)
 * =========================================================================
 * * Simple Words Mein: 'this' ek girgit (chameleon) ki tarah hai. 
 * Yeh alag-alag jagah par apni value badal leta hai. Niche iske saare rules hain:
 */

// 1. global - window
// Agar aap 'this' ko kisi function ya object ke bhaar, bilkul khule mein 
// (global scope) use karte ho, toh iski value 'window' object hoti hai.
console.log(this); // Output: window


// 2. function - window
// Agar aap ek normal standard function banate ho aur uske andar 'this' ko
// print karte ho, toh bhi uski value default mein 'window' object hi rahegi.
function normalFunc() {
    console.log(this); 
}
normalFunc(); // Output: window


// 3. method with es5 fnc - object
// Jab ek function kisi object ke andar banaya jata hai, toh use 'method' bolte hain.
// Agar woh ES5 (normal function) style mein hai, toh 'this' hamesha us 
// POORE OBJECT ko point karega jiske andar woh rha hai.
const userObj = {
    name: "Harsh",
    showName: function() {
        console.log(this); 
    }
};
userObj.showName(); // Output: {name: "Harsh", showName: ƒ} (The Object itself)


// 4. method with es6 arrow fnc - window
// Arrow functions ke paas apna khud ka 'this' nahi hota. Woh apne parent (bahar wale) 
// scope se 'this' udhaar lete hain. Isliye object ke andar arrow function lagane par 
// bhi 'this' bahar wale 'window' ko point karta hai.
const arrowObj = {
    name: "Sheryians",
    showName: () => {
        console.log(this); 
    }
};
arrowObj.showName(); // Output: window


// 5. es5 function inside es5 method - window
// Agar ek object ke method ke andar aap ek aur normal (ES5) function bana dete ho, 
// toh woh inner function apna scope kho deta hai aur dubara 'window' par chala jata hai.
const deepObj = {
    greet: function() {
        function innerFunc() {
            console.log(this); 
        }
        innerFunc(); 
    }
};
deepObj.greet(); // Output: window


// 6. arrow function inside es5 method - object
// Is error ko sudharne ke liye inner function ko 'arrow function' banaya jata hai.
// Kyunki arrow function ka apna 'this' nahi hota, woh apne parent (greet method) ka 
// 'this' utha leta hai, jo ki khud 'object' ko point kar raha tha.
const smartObj = {
    greet: function() {
        const innerArrow = () => {
            console.log(this); 
        }
        innerArrow();
    }
};
smartObj.greet(); // Output: {greet: ƒ} (The Object itself)


// 7. event handler - element
// Jab aap kisi HTML element par click event lagate ho, toh event handler ke andar 
// 'this' ka matlab wahi exact HTML element hota hai jis par click hua hai.
/*
button.addEventListener("click", function() {
    console.log(this); // Output: <button> element khud
});
*/


// 8. class - blank object
// Jab aap JavaScript mein 'class' use karke naya instance/object banate ho, 
// toh constructor ke andar 'this' shuruat mein ek khali (blank) object hota hai, 
// jismein baad mein values add hoti hain.
class User {
    constructor() {
        console.log(this); // Output: User {} (Blank Object)
    }
}
const newInstance = new User();


/**
 * =========================================================================
 * JAVASCRIPT CALL, APPLY, AND BIND METHODS [01:13:15]
 * Course Source: Sheryians Coding School (Advanced JS Tutorial)
 * =========================================================================
 * * Simple Words Mein: 
 * Maan lo ek function hai jise kisi object ke andar ki values use karni hain, 
 * par woh function us object ke andar nahi, balki bahar khule mein bana hai. 
 * 'call', 'apply', aur 'bind' ka use karke hum us function ko kisi bhi object 
 * ke sath "jod" sakte hain aur uske andar 'this' ki value badal sakte hain.
 */

// --- Screen Par Diya Gaya Base Code ---

// Ek object jismein data store hai
let obj = {
    name: "harsh",
    age: 26
};

// Ek normal function jo bahar bana hai, iske andar 'this' abhi default mein window hai
function abcd(city, country) {
    // Jab hum is function ko object ke sath jodenge, toh 'this' matlab 'obj' ban jayega
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}.`);
    console.log(`I live in ${city}, ${country}.`);
}


// =========================================================================
// 1. CALL METHOD
// =========================================================================
/**
 * * Kaise kaam karta hai:
 * 'call' method function ko TURANT (immediately) chala deta hai.
 * - Iska pehla argument woh OBJECT hota hai jise 'this' banana hai.
 * - Uske baad ke arguments normal function parameters ki tarah EK-EK kar ke (comma separated) diye jaate hain.
 */

console.log("--- CALL METHOD EXECUTION ---");
abcd.call(obj, "Bhopal", "India"); 
// Output: Hello, my name is harsh and my age is 26. I live in Bhopal, India.


// =========================================================================
// 2. APPLY METHOD
// =========================================================================
/**
 * * Kaise kaam karta hai:
 * 'apply' method bhi function ko TURANT hi chala deta hai.
 * - Iska pehla argument bhi wahi OBJECT hota hai jise 'this' banana hai.
 * - LEKIN, baki ke bache hue arguments ko ek-ek karke dene ke bajay ek ARRAY `[]` ke andar band karke diya jata hai.
 */

console.log("--- APPLY METHOD EXECUTION ---");
abcd.apply(obj, ["Bhopal", "India"]); 
// Output: Hello, my name is harsh and my age is 26. I live in Bhopal, India.


// =========================================================================
// 3. BIND METHOD (Exact screen code line 13)
// =========================================================================
/**
 * * Kaise kaam karta hai:
 * 'bind' method function ko turant nahi chalata! 
 * Yeh function ko us object ke sath "baandh" (bind) deta hai aur badle mein ek 
 * NAYA FUNCTION return karta hai, jise aap future mein kabhi bhi chala sakte ho.
 */

console.log("--- BIND METHOD EXECUTION ---");

// abcd.bind(obj) ne function chalaya nahi, bas bind karke 'storedFunction' mein save kar diya
const storedFunction = abcd.bind(obj, "Bhopal", "India"); 

// Jab aapko zarurat ho, tab aap is naye function ko baad mein kabhi bhi call kar sakte hain:
storedFunction(); 
// Output: Hello, my name is harsh and my age is 26. I live in Bhopal, India.


/**
 * =========================================================================
 * QUICK SUMMARY (Yaad rakhne ka short-cut trick):
 * =========================================================================
 * - CALL  -> Turant chalega, arguments direct comma (,) laga kar diye jayenge. (C = Comma)
 * - APPLY -> Turant chalega, arguments Array `[]` mein diye jayenge. (A = Array)
 * - BIND  -> Turant nahi chalega, naya function bana kar dega jise baad mein run kar sakte hain. (B = Bound/Later)
 */