// 1. Selecting the required elements (Matches your image)
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

// 2. Handling Form Submission
form.addEventListener("submit", function (dets) {
    dets.preventDefault(); // Prevents page reload

    // Extracting values from the inputs array
    let userName = inputs[0].value;
    let userRole = inputs[1].value;
    let imageUrl = inputs[2].value;

    // 3. Creating the Card Elements dynamically (As structured in your screenshot)
    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    // Setting the image source from the 3rd input field
    img.setAttribute("src", imageUrl); 

    // Creating text elements for the card details
    let nameHeading = document.createElement("h3");
    nameHeading.textContent = userName;

    let roleParagraph = document.createElement("p");
    roleParagraph.textContent = userRole;

    // 4. Appending elements together to form the structure
    profile.appendChild(img);
    profile.appendChild(nameHeading);
    profile.appendChild(roleParagraph);
    
    card.appendChild(profile);
    
    // 5. Appending the final card into the #main container
    main.appendChild(card);

    // Optional: Clear the form inputs after submission
    form.reset();
});