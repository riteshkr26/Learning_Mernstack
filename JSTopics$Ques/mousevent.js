// Selecting the container element
const box = document.getElementById("movingBox");

// 1. Mouse Move Event: Follow the cursor across the screen
window.addEventListener("mousemove", function (dets) {
    // dets.clientX and dets.clientY get the current X and Y coordinates of the mouse
    let mouseX = dets.clientX;
    let mouseY = dets.clientY;

    // Dynamically update the top and left CSS properties of the box
    box.style.left = mouseX + "px";
    box.style.top = mouseY + "px";
});

// 2. Mouse Over Event: Changes color and text when the mouse enters the box
box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "#00b894"; // Changes to a nice mint green
    box.innerText = "Inside!";
});

// 3. Mouse Out Event: Resets color and text when the mouse leaves the box
box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "crimson"; // Resets back to crimson red
    box.innerText = "Hover Me";
});


//prevent default in form  , target , type
