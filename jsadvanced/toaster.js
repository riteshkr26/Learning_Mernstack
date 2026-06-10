/**
 * Parent Function: Toaster Mechanism Controller
 * Yeh function ek inner function return karega jo state handle karta hai.
 */
function initializeToasterSystem() {
    
    // Private State Counter: Yeh track rakhta hai ki screen par kitne toast notifications active hain.
    // Closures ki wajah se yeh memory se wipe-out nahi hota.
    let activeToasts = 0; 

    // Inner Function: Yeh actually custom toast element create karta hai screen pe.
    return function(messageText) {
        
        // EDGE CASE / LIMITER: 
        // Agar pehle se 3 notifications screen par dikh rahe hain, toh user ke clicks block kar do.
        if (activeToasts >= 3) {
            console.warn("Limiter Triggered: Ek baar mein maximum 3 toasts hi allow hain!");
            return; 
        }

        // State change: Naya toast display hone ja raha hai toh counter ko increment karo.
        activeToasts++;

        // DOM Operations: Target container select karna jahan notification append karna hai.
        const parentContainer = document.getElementById("parent");

        // Dynamic Toast Element creation (Exact Tailwind styles as shown in video screen)
        const toasterElement = document.createElement("div");
        toasterElement.className = "inline-block bg-gray-800 text-white px-6 py-3 rounded shadow-lg transition-opacity duration-300 border-l-4 border-green-500";
        toasterElement.innerText = messageText;

        // Visual Layout update: Element ko fixed HTML structure ke andar render karna.
        parentContainer.appendChild(toasterElement);

        /**
         * Automatic Cleanup Call:
         * 3 Seconds (3000ms) ke baad notification screen se automatic remove ho jayega.
         */
        setTimeout(function() {
            // Screen se DOM node ko remove karna
            toasterElement.remove();
            
            // MAGIC OF CLOSURE:
            // Yeh inner anonymous callback function parent function ke 'activeToasts' variable 
            // ko modify kar sakta hai, kyunki iske paas purane variables ka access block barkarar hai!
            activeToasts--; 
        }, 3000);
    };
}

// System Initiation: 'createToaster' variable ab humare returned function ko point kar raha hai.
const createToaster = initializeToasterSystem();

// DOM Binding: Event handler ko physical button click se jodna.
document.getElementById("toastBtn").addEventListener("click", function() {
    createToaster("This is a toaster notification!");
});