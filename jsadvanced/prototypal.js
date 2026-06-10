/**
 * =========================================================================
 * PROTOTYPAL INHERITANCE (OBJECT.CREATE) - SIMPLE NOTES
 * [Sheryians Coding School - Advanced JS]
 * =========================================================================
 * SHORT SUMMARY: 
 * Jab ek Object ke features doosre Object mein udhaar (inherit) lene ho, 
 * bina code copy-paste kiye, tab Object.create() use hota hai.
 */

// 1. Parent Object (Jiske paas saara data hai)
let coffee = { 
    color: "dark", 
    drink: function () {
        console.log("Drinking coffee...");
    }
};

// 2. Child Object (Object.create se naya khali object banaya aur coffee ko uska parent bana diya)
let arabiatacoffee = Object.create(coffee); 


// 3. Testing & Output
console.log(arabiatacoffee);        // Output: {}  (Yeh bilkul khali dikhega)
console.log(arabiatacoffee.color);  // Output: "dark" (Kyunki isne data parent se uthaya)

/**
 * BEHIND THE SCENES (JS Engine Kaise Kaam Karta Hai?):
 * 1. Jab humne 'arabiatacoffee.color' maanga, toh JS ne pehle arabiatacoffee ke andar dhoondha.
 * 2. Wahan kuch nahi mila ({}), toh JS uske Parent ('coffee') ke paas gaya.
 * 3. Parent ke paas use 'color: "dark"' mil gaya aur usne screen par print kar diya.
 * Isi ko Prototypal Inheritance bolte hain.
 */

// 4. Custom Property (Naye object mein khud ka data add karna)
arabiatacoffee.price = 250; 
console.log(arabiatacoffee.price); // Output: 250 (Yeh iska apna personal data hai)