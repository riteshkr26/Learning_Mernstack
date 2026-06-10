/**
 * =========================================================================
 * JAVASCRIPT CLASSES, INHERITANCE & SUPER() [02:59:04]
 * Course Source: Sheryians Coding School (Advanced JS Tutorial)
 * =========================================================================
 * * SCREEN DESCRIPTION & HOW IT WORKS (SIMPLE WORDS):
 * - `User` ek Base/Parent class hai jismein basic login credentials store hote hain.
 * - `Admin` ek Derived/Child class hai jo `extends` keyword ka use karke User ki saari 
 * properties ko apne andar le aati hai.
 * - `super()` call karna zaroori hai taaki Parent class ka constructor run ho sake aur 
 * values (name, address, etc.) sahi se set ho sakein.
 */

// --- Parent Class: User (Screen Lines 1 to 15) ---
class User {
    // Constructor naye objects ki basic details initialize karta hai
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
    }
}


// --- Child Class: Admin inheriting User (Screen Lines 17 to 28) ---
class Admin extends User { // Screen Line 17
    
    // Admin ka apna khud ka constructor (Screen Line 18)
    constructor(name, address, username, email) {
        
        // super() parent class (User) ke constructor ko data bhejta hai (Screen Line 19)
        super(name, address, username, email); 
        
        // Admin ke paas ek extra special power/property hai: role (Screen Line 20)
        this.role = "admin"; 
    } // Screen Line 21

    // Special Method: Jo sirf admin ke paas hai (Screen Line 23)
    // Yeh method screen par maujood saare h1 tags ko dhoondh kar delete kar deta hai.
    remove() {
        document.querySelectorAll("h1").forEach(function (elem) { // Screen Line 24
            elem.remove(); // Screen Line 25
        }); // Screen Line 26
    } // Screen Line 27
} // Screen Line 28


// --- Creating Instances / Objects (Screen Lines 30 & 31) ---

// u1 ek normal User object hai jiske paas remove() karne ki power nahi hai.
let u1 = new User("Harsh", "Bhopal", "async123", "hey@heyehey.com"); // Screen Line 30

// u2 ek Admin object hai jiske paas role="admin" bhi hai aur remove() method bhi hai.
let u2 = new Admin("Harshita", "Delhi", "harshiiiiitaaa", "hey2@heyehey.com"); // Screen Line 31


// --- Testing and Verification in Console ---
console.log("Normal User Object:", u1);
console.log("Admin Object with extra role:", u2);

// Agar aap browser console mein jaakar 'u2.remove()' chalayenge, 
// toh screen par bane dono blue aur purple <h1> tags completely delete ho jayenge!