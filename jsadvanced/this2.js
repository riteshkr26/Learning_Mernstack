/**
 * =========================================================================
 * COMPLETE USER MANAGER WITH REMOVE USER FUNCTIONALITY [02:03:41]
 * Course Source: Sheryians Coding School (Advanced JS Tutorial)
 * =========================================================================
 * * HOW REMOVE WORKS (SIMPLE WORDS):
 * - Jab hum loop chala kar card banate hain, toh har user ko uski ek pehchan 
 * (index) dete hain.
 * - Card ke andar ek "Remove" button banta hai. Jab uspar click hota hai, 
 * toh woh `removeUser(index)` ko call karta hai.
 * - Array se data delete karne ke liye hum `.splice(index, 1)` use karte hain.
 * - Data delete hote hi hum `this.renderUi()` fir se chala dete hain taaki 
 * screen update ho jaye.
 */

// --- DOM elements selection ---
const form = document.querySelector("form");
const username = document.querySelector("#name");
const role = document.querySelector("#role");
const bio = document.querySelector("#bio");
const photo = document.querySelector("#photo");
const cardsWrapper = document.querySelector("#cards-wrapper");

// --- Main Application Object ---
const userManager = {
    // In-memory Database
    users: [],

    // 1. Initializer Method
    init: function () {
        // .bind(this) lagaya taaki submitForm ke andar 'this' humesha 'userManager' rahe
        form.addEventListener("submit", this.submitForm.bind(this));
    },

    // 2. Submit Handler Method
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },

    // 3. Add User Method
    addUser: function () {
        if (!username.value || !role.value) {
            alert("Please fill Name and Role fields!");
            return;
        }

        // Object ko array ke andar push karna
        this.users.push({
            name: username.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
        });

        form.reset();
        this.renderUi(); // UI refresh
    },

    // 4. NEW: Remove User Method (Array se data delete karne ke liye)
    removeUser: function (index) {
        // .splice() method array se target index wali item ko delete kar deta hai
        this.users.splice(index, 1);
        
        // Console log validation ke liye
        console.log("User Removed! Updated Database:", this.users);
        
        // Data change hone ke baad UI ko phir se render karna zaroori hai
        this.renderUi();
    },

    // 5. UI Renderer Method (Screen Line 31-51 Extended)
    renderUi: function () {
        // Purane elements ko clear karna taaki clean state mile
        cardsWrapper.innerHTML = "";

        // arrow function use karne se 'this' ka context automatic barkarar rehta hai
        // forEach ke andar 'index' parameter hume batata hai ki kaun sa user kis position par hai
        this.users.forEach((user, index) => {
            
            // Main card container
            const card = document.createElement("div");
            card.className = "bg-gray-800 p-6 rounded-2xl border border-gray-700 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition duration-300 relative";

            // A) Image Rendering (Screen Line 32-38)
            const img = document.createElement("img");
            img.className = "w-28 h-28 rounded-full object-cover mb-5 border-4 border-blue-500/30 shadow-md";
            img.src = user.photo;
            img.alt = "User Photo";
            card.appendChild(img);

            // B) Name Rendering (Screen Line 40-44)
            const nameElement = document.createElement("h2");
            nameElement.className = "text-2xl font-bold mb-1 text-blue-400 tracking-wide";
            nameElement.textContent = user.name;
            card.appendChild(nameElement);

            // C) Role Rendering (Screen Line 46-50)
            const roleElement = document.createElement("p");
            roleElement.className = "text-purple-400 mb-2 font-semibold text-sm uppercase tracking-wider";
            roleElement.textContent = user.role;
            card.appendChild(roleElement);

            // D) Bio Rendering
            const bioElement = document.createElement("p");
            bioElement.className = "text-gray-400 text-sm mt-2 mb-4 line-clamp-3";
            bioElement.textContent = user.bio || "No bio provided.";
            card.appendChild(bioElement);

            // E) NEW: Remove Button Element Creation
            const removeBtn = document.createElement("button");
            removeBtn.className = "mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-1.5 px-4 rounded text-xs tracking-wide transition transform active:scale-95";
            removeBtn.textContent = "Remove User";

            // Click Event for Remove Button:
            // Jab button par click hoga, tab array ka wahi exact 'index' removeUser ke paas jayega
            removeBtn.addEventListener("click", () => {
                this.removeUser(index);
            });
            
            card.appendChild(removeBtn);

            // Final Card injection into wrapper
            cardsWrapper.appendChild(card);
        });
    }
};

// System chalana
userManager.init();