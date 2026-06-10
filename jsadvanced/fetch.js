function getUsers() {
    // Clear out old cards before fetching new ones
    document.querySelector(".users").innerHTML = "";

    // Fetch 3 random users from the public API
    fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
        data.results.forEach(function (user) {
            
            // Create main card wrapper
            const card = document.createElement("div");
            card.className = "bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full transition transform hover:scale-105";

            // Horizontal flex wrapper
            const innerFlex = document.createElement("div");
            innerFlex.className = "flex items-center space-x-4";

            // User Avatar Image
            const avatar = document.createElement("img");
            avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700";
            avatar.src = user.picture.large;
            avatar.alt = "User avatar";

            // Text layout wrapper
            const textContainer = document.createElement("div");

            // User Name Heading
            const name = document.createElement("h2");
            name.className = "text-xl font-semibold text-gray-100";
            name.textContent = user.name.first + " " + user.name.last;

            // User Email Paragraph
            const email = document.createElement("p");
            email.className = "text-gray-400 text-sm break-all";
            email.textContent = user.email;

            // Append everything together hierarchically
            textContainer.appendChild(name);
            textContainer.appendChild(email);
            
            innerFlex.appendChild(avatar);
            innerFlex.appendChild(textContainer);
            
            card.appendChild(innerFlex);

            // Inject the completed card into the DOM element
            document.querySelector(".users").appendChild(card);
        });
    });
}

// Event listener for the refresh button
document.getElementById("refreshBtn").addEventListener("click", getUsers);

// Initial call to load users when page opens
getUsers();