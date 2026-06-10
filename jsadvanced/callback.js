/**
 * =========================================================================
 * SECTION 4: CALLBACKS, PROMISES, AND ASYNC/AWAIT [03:08:05]
 * Source: Sheryians Coding School (Advanced JS Tutorial)
 * =========================================================================
 */

// =========================================================================
// TOPIC 1: Synchronous vs Asynchronous JS
// =========================================================================
/**
 * * Simple Words Mein:
 * - Synchronous (Sync): Code hamesha line-by-line chalta hai. Jab tak pehli line 
 * poori nahi hogi, doosri line ruki rahegi.
 * - Asynchronous (Async): Jo kaam time lete hain (jaise server se data lana ya timer), 
 * JS unhe background mein bhej deta hai aur aage badh jata hai. Jab woh kaam poora 
 * ho jata hai, tab uska result screen par aata hai.
 */

// Sync Example:
console.log("Sync 1: Start");
console.log("Sync 2: Middle");
console.log("Sync 3: End"); // Yeh hamesha line-by-line hi chalega.

// Async Example:
console.log("Async 1: Start");
setTimeout(() => {
    console.log("Async 2: Processing after 2 seconds..."); // Yeh background mein chala gaya
}, 2000);
console.log("Async 3: End"); // Yeh pehle chal jayega, timer ka wait nahi karega!


// =========================================================================
// TOPIC 2: Callback Pattern and Callback Hell
// =========================================================================
/**
 * * Simple Words Mein:
 * - Callback: Ek function ke andar doosra function pass karna taaki async kaam 
 * khatam hone ke baad woh execute ho sake.
 * - Callback Hell: Jab ek async kaam ke andar doosra, uske andar teesra callback 
 * daalte hain, toh code aage badhne ke bajay right side bhagne lagta hai aur 
 * `triangle shape` (` pyramid of doom`) ban jata hai jise padhna namumkin ho jata hai.
 */

// Callback Hell Example:
function downloadFile(callback) {
    setTimeout(() => {
        console.log("File Downloaded");
        callback();
    }, 1000);
}

// Callback Hell look (Nested Structure):
downloadFile(() => {
    console.log("Processing File...");
    setTimeout(() => {
        console.log("Uploading File to Server...");
        setTimeout(() => {
            console.log("Task Completed!");
        }, 1000);
    }, 1000);
});


// =========================================================================
// TOPIC 3: Promises: resolve, reject, then, catch
// =========================================================================
/**
 * * Simple Words Mein:
 * - Promise ek object hai jo batata hai ki futuristic kaam safal (resolve) hua ya 
 * fail (reject) hua.
 * - Agar success hua toh `.then()` chalta hai, agar fail hua toh `.catch()` chalta hai. 
 * Yeh callback hell ko khatam karne ke liye aaya tha.
 */

// Delay Simulator using Promises (Practice part from screen screen)
function delaySimulator(status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === "success") {
                resolve("Data fetched successfully!");
            } else {
                reject("Error: Connection Failed!");
            }
        }, 1500);
    });
}

// Using the Promise:
delaySimulator("success")
    .then((message) => console.log("Promise Success:", message))
    .catch((error) => console.error("Promise Failed:", error));


// =========================================================================
// TOPIC 4: async/await syntax, error handling with try-catch
// =========================================================================
/**
 * * Simple Words Mein:
 * - `async/await` promises ko likhne ka sabse aasan aur modern tarika hai. 
 * - Isse asynchronous code bilkul seedha aur synchronous jaisa saaf dikhne lagta hai.
 * - Ismein error handle karne ke liye hum standard `try {} catch(err) {}` use karte hain.
 * - CRITICAL CONFUSION (From Screen): `async` functions hamesha badle mein ek PROMISE return karte hain!
 */

// Chaining async operations using async/await (Screen Practice concept)
async function executeTasks() {
    try {
        console.log("Starting network request...");
        
        // 'await' line ko tab tak rok kar rakhta hai jab tak promise poora na ho jaye
        let result = await delaySimulator("success"); 
        console.log("Async/Await Result:", result);
        
        console.log("Next chain step triggered...");
    } catch (error) {
        // Agar kuch bhi galat hua, toh sidha catch block handle kar lega
        console.error("Caught an error inside async function:", error);
    }
}

executeTasks();


/**
 * =========================================================================
 * MINDSET (Screen Par Likha Hua Direct Quote):
 * =========================================================================
 * "Async isn't magic - it's just structured waiting"
 * Matlab JavaScript koi jadu nahi kar raha, woh bas bohot hoshiyari se time-taking 
 * tasks ko queue (waiting area) mein laga deta hai taaki aapka browser lag na kare!
 */