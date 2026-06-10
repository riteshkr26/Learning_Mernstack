/**
 * =========================================================================
 * CONSTRUCTOR FUNCTIONS & 'THIS' KEYWORD IN OOJS [02:26:46]
 * Source: Sheryians Coding School (Advanced JS Tutorial)
 * =========================================================================
 * * SCREEN DESCRIPTION & HOW IT WORKS (SIMPLE WORDS):
 * - Screen par upar comment mein likha hai: "kaisa dikhega and hum log naye naye 
 * objects with different values bana paayege, yahi upar upar se poora kaam hai OOPS mein"
 * - Constructor function ka naam hamesha CAPITAL letter se shuru hota hai (CreatePencil).
 * - Jab bhi hum `new` keyword lagakar is function ko call karte hain, toh background mein 
 * ek khali object `{}` banta hai, aur `this` us khali object ko point karne lagta hai.
 * - `this.name = name` ka matlab hai us naye object ke andar 'name' naam ki key daal do.
 */

// --- Constructor Function Definition (Screen Lines 3 to 14) ---
function CreatePencil(name, price, color, company) {
    
    // Instance variables assignment using 'this'
    this.name = name;         // Screen Line 4
    this.price = price;       // Screen Line 5
    this.color = color;       // Screen Line 6
    this.company = company;   // Screen Line 7
    
    // Dynamic Method: Jo HTML element banakar body mein render karega (Screen Line 8)
    this.write = function (text) {
       // 1. Browser ke document mein ek naya <h1> element create karo (Screen Line 9)
        let h1 = document.createElement("h1");
        
    //     // 2. Us h1 element ke andar woh text daalo jo argument mein pass hua hai (Screen Line 10)
    h1.textContent = text;
        
    //     // 3. H1 ka color wahi set karo jo is particular pencil ka color hai (Screen Line 11)
      h1.style.color = color;
        
      // 4. Is tayaar h1 tag ko HTML body ke sabse aakhiri mein jod (append) do (Screen Line 12)
      document.body.append(h1);
     };  //Screen Line 13
} // Screen Line 14


// CreatePencil.prototype.write = function (text) {
//     // Create element
//     let h1 = document.createElement("h1");
    
//     // Set content
//     h1.textContent = text;
    
//     // 'this.color' abhi bhi chalega kyunki prototype function apne object ka data access kar sakta hai
//     h1.style.color = this.color; 
    
//     // Append to body
//     document.body.append(h1);
// };



// --- Creating Real Objects / Instances (Screen Lines 16 & 17) ---

// 'new' keyword background mein ek blank object banayega aur 'this' ko assign karega.
// Uske baad 'Nataraj', 10, 'black', 'nataraj' values usme map ho jayengi.
let pencil1 = new CreatePencil("Nataraj", 10, "black", "nataraj"); // Screen Line 16
let pencil2 = new CreatePencil("Doms", 10, "red", "doms");         // Screen Line 17


// --- Execution / Testing the Method ---
// Dono objects ke paas apni khud ki dynamic 'write' functionality aa chuki hai.

pencil1.write("Writing with Nataraj Pencil!"); 
// Yeh browser screen par black color se text print karega.

pencil2.write("Writing with Doms Pencil!"); 
// Yeh browser screen par red color se text print karega.



// --- 5. Code Verification Proof ---
console.log(pencil1.hasOwnProperty('write')); // Output: false (Kyunki iska apna nahi hai, prototype ka hai)
console.log(pencil1.__proto__.hasOwnProperty('write')); // Output: true (Proof: Method prototype par safe hai!)

/**
 * =========================================================================
 * SUMMARY NOTES:
 * =========================================================================
 * 1. Constructor function ek factory machine ki tarah hai.
 * 2. `pencil1` aur `pencil2` us factory se nikle alag-alag products (objects) hain.
 * 3. Dono ke paas data alag hai (ek black hai, ek red), par dono ke kaam karne ka 
 * tarika (`write` function) bilkul same hai.
 */